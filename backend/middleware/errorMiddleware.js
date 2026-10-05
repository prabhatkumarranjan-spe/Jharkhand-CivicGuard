function notFound(req, res) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
}

function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  let statusCode = err.statusCode || err.status || 500;
  let message = err.message || "Internal server error";

  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID";
  } else if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors).map((item) => item.message).join(", ");
  } else if (err.code === 11000) {
    statusCode = 409;
    message = "A record with this value already exists";
  } else if (err.name === "MongooseServerSelectionError") {
    statusCode = 503;
    message = "Database service is unavailable";
  }

  console.error(`[${statusCode}] ${message}`);
  res.status(statusCode).json({ success: false, message });
}

module.exports = { notFound, errorHandler };
