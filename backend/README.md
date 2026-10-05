# Backend database setup

## MongoDB Atlas

1. Create an Atlas cluster and a database user.
2. In Atlas Network Access, allow the IP address of the machine running the backend.
3. Copy the cluster's Node.js connection string. Atlas SRV strings start with
   `mongodb+srv://`; keep the generated hostname and connection options.
4. Save the completed file as `.ENV` in this directory. Keep `.ENV` private and
   do not commit database credentials.

`config/db.js` reads `MONGODB_URI` (or the legacy `MONGO_URI`) from
`backend/.ENV`. It also upgrades a legacy `mongodb://` URI for an Atlas
`*.mongodb.net` host to the required SRV scheme. The server connects to MongoDB
before listening, so it won't report a healthy API while the database is
unavailable.

If connection fails, verify the Atlas cluster is running, the database user's
credentials are current, and Atlas **Network Access** allows the outbound IP
address of the machine running the backend. The frontend user's IP is not the
one to add. Ensure the backend host can resolve DNS SRV records and reach Atlas
over TCP port `27017`. For Render, check the service's outbound IP addresses and
add the required addresses to Atlas Network Access. Avoid opening the cluster
to every IP unless you deliberately accept the security risk for temporary,
isolated testing.

The root `render.yaml` configures the Render web service. Set the private
`MONGODB_URI` and `GEMINI_API_KEY` values in Render when creating the Blueprint;
the file intentionally does not contain either secret. Configure `WEB_ORIGIN`
if the frontend is hosted at a different web origin than the repository's
GitHub Pages site.

## Demo/historical assets

The generated assets in `demo-data/assets.js` are synthetic sample data for
demonstration only, not real government data. The dataset contains 130 assets
for Ranchi, Jamshedpur, Dhanbad, Bokaro, Hazaribagh, and Deoghar:

| Type | Count |
| --- | ---: |
| Roads | 50 |
| Drainage | 30 |
| Streetlights | 25 |
| Water Supply | 15 |
| Bridges | 10 |

After configuring `.ENV`, run `npm run seed:demo-assets` from this directory.
The seeder inserts missing `DEMO-` asset IDs and leaves existing records
unchanged, so rerunning it does not duplicate the dataset.

## Model fields for API integration

Complaint fields:
`name`, `description`, `photo`, `location`, `type`, `category`, `department`,
`riskScore`, `severity`, `urgency`, `impact`, `aiReason`,
`recommendedAction`, `status`, `assignedOfficer`, `createdAt`.

Asset fields:
`assetId`, `city`, `type`, `location`, `lastMaintenance`,
`previousComplaints`, `condition`, `traffic`, `rainfallRisk`, `riskScore`,
`status`.
