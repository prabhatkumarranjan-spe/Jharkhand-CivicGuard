const { GoogleGenAI } = require("@google/genai");
const { getDepartmentForType } = require("../utils/departmentMapper");
const { validateAIOutput } = require("../middleware/validationMiddleware");

function extractJson(text) {
  const cleaned = String(text || "").trim().replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/, "");
  try {
    return JSON.parse(cleaned);
  } catch (error) {
    throw Object.assign(new Error("Gemini returned an invalid JSON response"), { statusCode: 502, code: "INVALID_AI_RESPONSE" });
  }
}

async function analyzeComplaint({ description, location, type }) {
  if (!process.env.GEMINI_API_KEY) {
    throw Object.assign(new Error("Gemini service is not configured"), { statusCode: 503, code: "GEMINI_NOT_CONFIGURED" });
  }

  const prompt = `You analyze civic infrastructure complaints in Jharkhand, India. Return ONLY valid JSON with no markdown or extra text.\n\nComplaint:\n- Description: ${description}\n- Location: ${location}\n- Infrastructure type: ${type}\n\nRequired schema:\n{\n  "category": "short issue category",\n  "department": "${getDepartmentForType(type)}",\n  "severity": "Low|Medium|High|Critical",\n  "riskScore": 0,\n  "urgency": "Low|Medium|High|Critical",\n  "impact": "Low|Medium|High|Critical",\n  "reason": "brief safety or service reason",\n  "recommendedAction": "clear practical action"\n}\n\nriskScore must be an integer from 0 to 100. Use the exact department stated in the schema.`;

  try {
    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: { responseMimeType: "application/json", temperature: 0.2 }
    });
    const parsed = extractJson(response.text);
    const analysis = validateAIOutput(parsed);
    // The mapping is authoritative so citizens and model variations cannot misroute a complaint.
    analysis.department = getDepartmentForType(type);
    return analysis;
  } catch (error) {
    if (error.code === "INVALID_AI_RESPONSE" || error.code === "GEMINI_NOT_CONFIGURED") throw error;
    console.error("Gemini analysis failed:", error.message);
    throw Object.assign(new Error("Gemini analysis is currently unavailable"), { statusCode: 502, code: "GEMINI_ERROR" });
  }
}

module.exports = { analyzeComplaint };
