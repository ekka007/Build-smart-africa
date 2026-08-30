import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "15mb" }));

// Lazy Google GenAI Client
let genAI: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
}

// Health check API
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    app: "BuildAI Africa Pitch Deck Engine",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    time: new Date().toISOString(),
  });
});

// API: AI Feasibility Analysis (Live Demo on Slide 3 & 10)
app.post("/api/ai/feasibility", async (req, res) => {
  try {
    const { location, landSize, zoningObjective, budget, soilType, powerAccess } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback realistic response if API key is not yet set
      return res.json({
        success: true,
        data: {
          siteSummary: `${location || "Lekki Phase 2, Lagos"} • ${landSize || "2,500 sqm"}`,
          zoningVerdict: "Approved for Mixed-Use Commercial / Residential (FAR 3.2, Max 6 Floors)",
          recommendedStrategy: "High-density 4-story mixed-use development with ground floor retail, co-working hub, and 18 residential 2-bed units.",
          estimatedCostRange: "₦420M - ₦490M ($310,000 - $360,000 USD)",
          expectedYield: "18.4% Net Annual Yield",
          bankabilityScore: 88,
          bankabilityBreakdown: {
            zoningCompliance: 94,
            titleRisk: 86,
            financialViability: 91,
            infrastructureReadiness: 79,
            esgRating: "A-"
          },
          constructionPhasing: [
            { phase: "Phase 1 (Months 1-2)", title: "Site Prep & Deep Piling", costShare: "18%" },
            { phase: "Phase 2 (Months 3-6)", title: "Superstructure & Pre-cast Concrete", costShare: "42%" },
            { phase: "Phase 3 (Months 7-9)", title: "MEP & Local Material Fitout", costShare: "28%" },
            { phase: "Phase 4 (Month 10)", title: "Solar Microgrid & Commissioning", costShare: "12%" }
          ],
          aiInsights: [
            "Local sandcrete block supplier 4.2km away reduces logistics overhead by 14%.",
            "Lagos State Physical Planning permit expedited pathway applies for solar-ready designs.",
            "Pre-leasing potential: 65% occupancy commitments feasible via local diaspora channels."
          ]
        }
      });
    }

    const ai = getGenAI();
    const prompt = `You are the BuildAI Africa Multimodal Development Intelligence Engine.
Analyze this African real estate site profile:
- Location/Corridor: ${location || "Lekki-Epe Expressway, Lagos, Nigeria"}
- Land Size: ${landSize || "2,500 sqm"}
- Stated Objective: ${zoningObjective || "Mixed-use Residential and Commercial"}
- Target Budget: ${budget || "$350,000"}
- Soil / Terrain: ${soilType || "Sandy coastal with seasonal high water table"}
- Power / Grid: ${powerAccess || "Unstable municipal grid, requires hybrid solar microgrid"}

Provide a structured, hyper-realistic African real estate feasibility analysis including:
1. Site summary and zoning compliance verdict based on local building regulations.
2. Recommended development strategy and yield estimate.
3. Localized cost estimation (in local currency & USD).
4. Bankability and Capital Risk Score (0-100) with breakdown.
5. Construction phasing schedule.
6. Hyper-local supply chain & infrastructure insights.

Return JSON in this format:
{
  "siteSummary": "...",
  "zoningVerdict": "...",
  "recommendedStrategy": "...",
  "estimatedCostRange": "...",
  "expectedYield": "...",
  "bankabilityScore": 86,
  "bankabilityBreakdown": {
    "zoningCompliance": 92,
    "titleRisk": 85,
    "financialViability": 89,
    "infrastructureReadiness": 78,
    "esgRating": "A"
  },
  "constructionPhasing": [
    {"phase": "Phase 1 (M 1-2)", "title": "...", "costShare": "20%"},
    {"phase": "Phase 2 (M 3-6)", "title": "...", "costShare": "40%"},
    {"phase": "Phase 3 (M 7-9)", "title": "...", "costShare": "25%"},
    {"phase": "Phase 4 (M 10)", "title": "...", "costShare": "15%"}
  ],
  "aiInsights": ["...", "...", "..."]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const jsonText = response.text || "{}";
    const data = JSON.parse(jsonText);
    res.json({ success: true, data });
  } catch (error: any) {
    console.error("Feasibility analysis error:", error);
    res.status(500).json({ error: error.message || "Failed to generate feasibility analysis" });
  }
});

// API: Investor Pitch Rehearsal & Q&A Coach
app.post("/api/ai/pitch-coach", async (req, res) => {
  try {
    const { slideIndex, slideTitle, currentNotes, userQuestion } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json({
        answer: `For Slide ${slideIndex + 1} (${slideTitle}): Focus on highlighting our proprietary data moat and how Google DeepMind's Gemini context window solves the unindexed, analog reality of African municipal codes. Emphasize that we are not displacing local architects but unlocking bank capital faster.`,
        suggestedInvestorQuestion: "How do you verify land title authenticity in regions without digitized cadaster records?",
        suggestedPunchline: "We compress a 6-week manual feasibility study costing $25k into a 60-second verified report for $500."
      });
    }

    const ai = getGenAI();
    const prompt = `You are a Tier-1 African tech VC partner coaching the founders of "BuildAI Africa" (Intelligence for Africa's Next Generation of Development).
Current Slide (${slideIndex + 1}): ${slideTitle}
Current Speaker Notes: ${currentNotes}
User Query / Pitch practice prompt: ${userQuestion || "How do I deliver this slide with maximum impact?"}

Provide actionable advice for delivering this slide:
1. Sharp delivery advice & body language / pacing tip.
2. A tough question a savvy investor will ask about this specific slide.
3. The winning, data-backed answer to give.
4. A 1-sentence memorable punchline for this slide.

Return JSON:
{
  "deliveryTip": "...",
  "suggestedInvestorQuestion": "...",
  "winningAnswer": "...",
  "suggestedPunchline": "..."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const jsonText = response.text || "{}";
    const parsed = JSON.parse(jsonText);
    res.json(parsed);
  } catch (error: any) {
    console.error("Pitch coach error:", error);
    res.status(500).json({ error: error.message || "Failed to run pitch coach" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BuildAI Africa pitch deck server running on http://localhost:${PORT}`);
  });
}

startServer();
