export interface BulletPoint {
  title: string;
  description: string;
  icon?: string;
  metric?: string;
}

export interface SlideData {
  id: string;
  slideNumber: number;
  category: string;
  headline: string;
  subheadline?: string;
  bullets?: BulletPoint[];
  visualDescription?: string;
  speakerNotes: string;
  layout:
    | "title"
    | "problem"
    | "solution"
    | "technology"
    | "difference"
    | "live-demo-brief"
    | "live-demo-scenario"
    | "live-demo-decision"
    | "workflow"
    | "business-model"
    | "market"
    | "moat"
    | "team"
    | "roadmap"
    | "closing";
  keyTakeaway?: string;
  durationSeconds?: number;
}

export type PresentationTheme = "obsidian" | "blueprint" | "emerald" | "minimal";

export interface TeamMember {
  name: string;
  role: string;
  domain: string;
  background: string;
  avatarUrl?: string;
  skills: string[];
}

export interface FeasibilityResult {
  siteSummary: string;
  zoningVerdict: string;
  recommendedStrategy: string;
  estimatedCostRange: string;
  expectedYield: string;
  bankabilityScore: number;
  bankabilityBreakdown: {
    zoningCompliance: number;
    titleRisk: number;
    financialViability: number;
    infrastructureReadiness: number;
    esgRating: string;
  };
  constructionPhasing: {
    phase: string;
    title: string;
    costShare: string;
  }[];
  aiInsights: string[];
}

export interface GoogleSlidesExportState {
  status: "idle" | "requesting_token" | "creating_presentation" | "populating_slides" | "completed" | "error";
  progress: number; // 0 to 100
  presentationId?: string;
  presentationUrl?: string;
  error?: string;
}
