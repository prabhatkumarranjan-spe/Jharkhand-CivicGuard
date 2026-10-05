const assert = require("node:assert/strict");
const { once } = require("node:events");
const test = require("node:test");

const { normalizeMongoUri } = require("../config/db");
const { validateComplaintInput } = require("../middleware/validationMiddleware");
const Complaint = require("../models/Complaint");
const { app } = require("../server");

function validateComplaint(body) {
  const req = { body };
  let statusCode;
  let payload;
  let nextCalled = false;
  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(value) {
      payload = value;
      return this;
    }
  };

  validateComplaintInput(req, res, () => {
    nextCalled = true;
  });

  return { req, statusCode, payload, nextCalled };
}

test("upgrades MongoDB Atlas connection strings to SRV", () => {
  assert.equal(
    normalizeMongoUri("mongodb://user:pass@cluster.example.mongodb.net/?retryWrites=true"),
    "mongodb+srv://user:pass@cluster.example.mongodb.net/?retryWrites=true"
  );
});

test("preserves local and already-SRV MongoDB connection strings", () => {
  const localUri = "mongodb://localhost:27017/civicguard";
  const srvUri = "mongodb+srv://user:pass@cluster.example.mongodb.net/civicguard";

  assert.equal(normalizeMongoUri(localUri), localUri);
  assert.equal(normalizeMongoUri(srvUri), srvUri);
});

test("rejects invalid MongoDB connection strings without exposing their value", () => {
  assert.throws(() => normalizeMongoUri("not-a-uri"), {
    message: "MongoDB URI is invalid. Check MONGODB_URI in backend/.ENV."
  });
});

test("accepts a complaint when the optional reporter name is omitted", () => {
  const result = validateComplaint({
    description: "Large pothole near the school",
    location: "Ranchi",
    type: "Road"
  });

  assert.equal(result.nextCalled, true);
  assert.equal(result.req.body.name, "");
});

test("rejects missing required complaint fields and non-string names", () => {
  const missingDescription = validateComplaint({ location: "Ranchi", type: "Road" });
  const invalidName = validateComplaint({
    name: 123,
    description: "Broken road",
    location: "Ranchi",
    type: "Road"
  });

  assert.equal(missingDescription.statusCode, 400);
  assert.match(missingDescription.payload.message, /description/);
  assert.equal(invalidName.statusCode, 400);
  assert.equal(invalidName.payload.message, "Name must be a string");
});

test("stores AI assessment levels as strings", () => {
  const complaint = new Complaint({
    description: "Large pothole",
    location: "Ranchi",
    type: "Road",
    severity: "High",
    urgency: "Medium",
    impact: "Low",
    riskScore: 70
  });

  assert.equal(complaint.validateSync(), undefined);
  complaint.severity = "Urgent";
  assert.ok(complaint.validateSync().errors.severity);
});

test("health endpoint reports a disconnected database as unavailable", async (t) => {
  const server = app.listen(0, "127.0.0.1");
  t.after(() => new Promise((resolve) => server.close(resolve)));
  await once(server, "listening");

  const response = await fetch(`http://127.0.0.1:${server.address().port}/api/health`);
  const payload = await response.json();

  assert.equal(response.status, 503);
  assert.deepEqual(payload, {
    success: false,
    database: "disconnected",
    message: "CivicGuard Jharkhand backend is running, but MongoDB is not connected"
  });
});
