const departmentByType = {
  Road: "Road/ULB",
  Drainage: "Drainage Department",
  Streetlight: "Electrical Department",
  "Water Supply": "Water Supply Department",
  Bridge: "Engineering Department",
  "Public Building": "Building/Engineering Department"
};

function getDepartmentForType(type) {
  return departmentByType[type];
}

module.exports = { departmentByType, getDepartmentForType };
