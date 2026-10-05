const cities = [
  "Ranchi",
  "Jamshedpur",
  "Dhanbad",
  "Bokaro",
  "Hazaribagh",
  "Deoghar",
];

const assetTypes = [
  { type: "Roads", count: 50 },
  { type: "Drainage", count: 30 },
  { type: "Streetlights", count: 25 },
  { type: "Water Supply", count: 15 },
  { type: "Bridges", count: 10 },
];

let assetNumber = 0;
const assets = assetTypes.flatMap(({ type, count }) => {
  return Array.from({ length: count }, (_, index) => {
    assetNumber += 1;
    const city = cities[(assetNumber - 1) % cities.length];
    const riskScore = 20 + ((assetNumber * 17) % 76);

    return {
      assetId: `DEMO-${String(assetNumber).padStart(3, "0")}`,
      city,
      type,
      location: `${city}, Jharkhand - Demo Ward ${((index + assetNumber) % 20) + 1}`,
      lastMaintenance: new Date(Date.UTC(2020 + (assetNumber % 6), assetNumber % 12, 1 + (assetNumber % 27))),
      previousComplaints: assetNumber % 8,
      condition: riskScore >= 75 ? "Poor" : riskScore >= 50 ? "Fair" : "Good",
      traffic: (assetNumber * 13) % 101,
      rainfallRisk: (assetNumber * 19) % 101,
      riskScore,
      status: riskScore >= 85 ? "Needs Attention" : "Active",
    };
  });
});

module.exports = {
  classification: "DEMO/HISTORICAL - synthetic sample data; not real government data",
  sourceNote: "Generated sample asset records for demonstration only.",
  countsByType: Object.fromEntries(assetTypes.map(({ type, count }) => [type, count])),
  assets,
};