# Backend database setup

## MongoDB Atlas

1. Create an Atlas cluster and a database user.
2. In Atlas Network Access, allow the IP address of the machine running the backend.
3. Copy the cluster's Node.js connection string and replace the placeholders in
   `.ENV.example`.
4. Save the completed file as `.ENV` in this directory. Keep `.ENV` private and
   do not commit database credentials.

`config/db.js` reads `MONGO_URI` from `backend/.ENV` and connects with Mongoose.
The server entry point can call the exported `connectDB` function; this setup
does not change server or route behavior.

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
