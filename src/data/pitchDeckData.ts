import { SlideData, TeamMember } from "../types";

export const PITCH_DECK_META = {
  title: "BuildAI Africa",
  tagline: "Intelligence for Africa’s Next Generation of Development.",
  subtitle: "The Intelligent First Layer for African Real Estate & Infrastructure.",
  author: "BuildAI Team",
  program: "Google Africa Applied AI Lab",
  version: "1.0 Demo Day Edition",
  website: "https://buildai.africa",
  email: "partnerships@buildai.africa",
  linkedin: "linkedin.com/company/buildai",
};

export const INITIAL_SLIDES: SlideData[] = [
  {
    id: "slide-1",
    slideNumber: 1,
    category: "Introduction",
    headline: "BuildAI Africa",
    subheadline: "The Intelligent First Layer for African Real Estate & Infrastructure.",
    visualDescription:
      "A split-screen image. Left side: A raw, empty plot of land in an emerging African corridor. Right side: A glowing, AI-generated digital twin of a mixed-use development on that exact same land.",
    speakerNotes:
      "Africa is building faster than anywhere else on earth. But before we build, we need intelligence. Today, we are introducing BuildAI Africa — the intelligence engine turning raw African land into verified, bankable developments in seconds.",
    layout: "title",
    keyTakeaway: "Pioneering the first multimodal AI development co-pilot built specifically for African urbanization.",
    durationSeconds: 30,
  },
  {
    id: "slide-2",
    slideNumber: 2,
    category: "The Problem",
    headline: "Development Decisions are Slow, Fragmented, and Capital-Risky.",
    subheadline: "The 'Data Desert' holding back Africa's $1.4 Trillion construction boom.",
    bullets: [
      {
        title: "Siloed Data",
        description:
          "Zoning laws, material prices, and topographical data remain trapped in paper archives, unstructured PDFs, and expensive isolated consultants.",
        icon: "FileWarning",
        metric: "6+ Weeks Delay",
      },
      {
        title: "Capital Inefficiency",
        description:
          "Developers and tier-1 banks spend weeks and millions of Naira, Cedis, or Shillings on manual feasibility studies before committing heavy project capital.",
        icon: "TrendingDown",
        metric: "$25K+ per site",
      },
      {
        title: "The Western Gap",
        description:
          "Global PropTech software assumes clean municipal APIs and structured GIS databases. Africa’s real estate reality is analog, hyper-local, and unindexed.",
        icon: "ShieldAlert",
        metric: "0% Western fit",
      },
    ],
    visualDescription:
      "Icons showing a developer surrounded by confused arrows pointing to an Architect, a Surveyor, a Bank, and a pile of physical paperwork.",
    speakerNotes:
      "Currently, to determine if a site is viable, a developer must manually coordinate between surveyors, architects, and lawyers. This friction causes stalled projects and massive capital flight. We are solving this data desert.",
    layout: "problem",
    keyTakeaway: "Analog records and fragmented consultants create multi-million dollar capital risks and project stalls.",
    durationSeconds: 45,
  },
  {
    id: "slide-3",
    slideNumber: 3,
    category: "The Solution",
    headline: "From Analog Reality to Digital Intelligence in Minutes.",
    subheadline: "BuildAI is a multimodal development intelligence platform.",
    bullets: [
      {
        title: "Multimodal Site Ingestion",
        description:
          "We ingest raw smartphone photos, drone footage, boundary coordinates, land size, and target budgets to evaluate real-world site potential immediately.",
        icon: "Camera",
      },
      {
        title: "Instant Feasibility & Yield",
        description:
          "Instantly generates preliminary development strategies, conceptual massing block plans, localized bill-of-quantities cost ranges, and solar/energy requirements.",
        icon: "Cpu",
      },
      {
        title: "Workforce Augmentation",
        description:
          "We are not replacing architects or surveyors. We are augmenting professionals with an intelligent first layer that compresses feasibility from 45 days to 60 seconds.",
        icon: "Users",
      },
    ],
    visualDescription:
      "A sleek dashboard mockup showing an input (a site photo + a text prompt) generating an output (a 3D block plan + a cost breakdown chart).",
    speakerNotes:
      "We act as a co-pilot for developers. We compress a multi-week feasibility workflow into a matter of minutes, allowing professionals to make data-backed decisions before heavy capital is committed.",
    layout: "solution",
    keyTakeaway: "Compressing 6-week manual feasibility studies into a 60-second verified development roadmap.",
    durationSeconds: 45,
  },
  {
    id: "slide-4",
    slideNumber: 4,
    category: "Technology",
    headline: "Powered by the Google DeepMind Ecosystem.",
    subheadline: "Purpose-built AI architecture leveraging state-of-the-art Google models.",
    bullets: [
      {
        title: "Gemini 1.5 Pro (The Knowledge Engine)",
        description:
          "Utilizing the million-token context window to ingest, parse, and cross-reference 500+ page local building codes, municipal zoning bylaws, and gazetted regulations via RAG.",
        icon: "Sparkles",
        metric: "1M+ Token RAG",
      },
      {
        title: "Gemini Multimodal Vision (The Reality Engine)",
        description:
          "Interpreting messy, real-world field inputs: drone surveys, smartphone video walk-throughs, hand-drawn site sketches, and raw topographical photos.",
        icon: "Eye",
        metric: "Multimodal Vision",
      },
      {
        title: "Gemma (The Edge Engine)",
        description:
          "Deploying quantized, ultra-lightweight open models directly to surveyor mobile devices for offline site data capture in zero/low-bandwidth corridors.",
        icon: "Smartphone",
        metric: "Offline Edge AI",
      },
    ],
    visualDescription:
      "Logos of Gemini, Gemma, and Veo connected to a central 'BuildAI Brain' icon.",
    speakerNotes:
      "This is not a simple chatbot wrapper. We require Google's specific architecture. We use Gemini's context window to digitize fragmented legal data, and Gemma to push edge computing directly to surveyors in the field.",
    layout: "technology",
    keyTakeaway: "DeepMind's massive context and multimodal edge compute solve the exact structural hurdles of African PropTech.",
    durationSeconds: 50,
  },
  {
    id: "slide-5",
    slideNumber: 5,
    category: "Value Proposition",
    headline: "From Raw Land to an Intelligent Development Decision.",
    subheadline: "Without waiting weeks for the first structured answer.",
    bullets: [
      {
        title: "1. Raw Land",
        description: "Photo + coordinates: smartphone captures, drone imagery & boundary coordinates.",
        icon: "Camera",
      },
      {
        title: "2. Local Evidence",
        description: "Codes + costs + context: state zoning bylaws, setback rules & live regional prices.",
        icon: "Database",
      },
      {
        title: "3. AI Scenario",
        description: "Plan + cost + phasing: instant 3D site massing, dynamic BOQ & solar energy calculation.",
        icon: "Cpu",
      },
      {
        title: "4. Human Review",
        description: "Architect + planner + lender: professional validation, surveyor signoff & bank review.",
        icon: "ShieldCheck",
      },
    ],
    visualDescription:
      "4-stage horizontal pipeline with 'Why this matters for Africa' callouts and 90-day milestone banner.",
    speakerNotes:
      "Here is the BuildAI difference. We connect raw field capture with local planning evidence and AI scenarios, culminating in seamless human review by architects, planners, and bank credit committees.",
    layout: "difference",
    keyTakeaway: "End-to-end evidence pipeline: Raw Land → Local Evidence → AI Scenario → Human Review.",
    durationSeconds: 45,
  },
  {
    id: "slide-6",
    slideNumber: 6,
    category: "Live Demo",
    headline: "From 6,690 m² of Raw Land to a Structured Development Scenario.",
    subheadline: "A real African site brief evaluated by BuildAI in seconds.",
    bullets: [
      {
        title: "Site Area",
        description: "6,690 m² raw land parcel with south-facing main road and secondary east-side access.",
        icon: "Maximize2",
      },
      {
        title: "Development Objective",
        description: "Commercial frontage on main transit road with private residential development behind.",
        icon: "Building2",
      },
      {
        title: "Design Intent",
        description: "Striking 3-storey commercial facade paired with high-yield duplex-style homes.",
        icon: "Home",
      },
    ],
    visualDescription:
      "Site Input card on left, and 'What the AI Receives' graphic schematic showing 6 duplex tiles, commercial frontage, and dual road corridors.",
    speakerNotes:
      "Let's look at a live example from a real 6,690 m² site brief. The user provides coordinates, road orientations, and goals. BuildAI ingests the data and structures the raw parcel in real-time.",
    layout: "live-demo-brief",
    keyTakeaway: "Instant ingestion and site demarcation of unindexed parcels with dual road access.",
    durationSeconds: 45,
  },
  {
    id: "slide-7",
    slideNumber: 7,
    category: "Live Demo",
    headline: "One Site. Multiple Viable Strategies. Evidence Attached to Every Assumption.",
    subheadline: "AI-generated conceptual massing and first-pass development breakdown.",
    bullets: [
      {
        title: "Development Mix",
        description: "Commercial frontage + 8 residential duplex units maximizing ground coverage (48%).",
        icon: "Building2",
      },
      {
        title: "Access Logic & Phasing",
        description: "South primary commercial ingress / East residential exit; frontage built first to fund phase 2.",
        icon: "Route",
      },
      {
        title: "Energy & Key Risks",
        description: "45 kVA peak load solar strategy with planning setback variances highlighted.",
        icon: "SunMedium",
      },
    ],
    visualDescription:
      "Conceptual site strategy schematic with 8 duplexes, 7 parking stalls, and 3-storey commercial frontage alongside structured first-pass output table.",
    speakerNotes:
      "Here is the AI-generated first-pass scenario. We allocate 8 duplex units, internal circulation with 7 parking bays, and a 3-storey commercial front. Every assumption is linked to verifiable local building codes.",
    layout: "live-demo-scenario",
    keyTakeaway: "Optimized massing, access circulation, and phased construction economics in seconds.",
    durationSeconds: 50,
  },
  {
    id: "slide-8",
    slideNumber: 8,
    category: "Live Demo",
    headline: "BuildAI Does Not Make the Investment Decision—It Makes the Evidence Easier to Evaluate.",
    subheadline: "Decision dashboard and bankability pre-underwriting signal.",
    bullets: [
      {
        title: "Bankability Readiness (78/100)",
        description: "Structured pre-underwriting credit signal analyzing planning, infrastructure, and economics.",
        icon: "ShieldCheck",
        metric: "78 Score",
      },
      {
        title: "5-Stage Evidence Pipeline",
        description: "1 Local Rules → 2 Cost Evidence → 3 Site Signals → 4 Scenarios → 5 Review Pack.",
        icon: "TrendingUp",
      },
    ],
    visualDescription:
      "Bankability readiness circular gauge showing score 78 alongside 5 numbered green pipeline steps leading from evidence to lender decision.",
    speakerNotes:
      "We do not replace the bank's credit committee. We provide the standardized evidence layer. With a Bankability Score of 78 and five structured evidence steps, lenders can evaluate development risk with zero guesswork.",
    layout: "live-demo-decision",
    keyTakeaway: "The product wedge: faster feasibility today unlocks standardized underwriting data tomorrow.",
    durationSeconds: 45,
  },
  {
    id: "slide-9",
    slideNumber: 9,
    category: "Business Model",
    headline: "B2B SaaS Meets Project Finance Underwriting.",
    subheadline: "A dual-engine model expanding from developer productivity to financial gatekeeper.",
    bullets: [
      {
        title: "Developer SaaS (Immediate Cashflow)",
        description:
          "Tiered recurring subscription for real estate developers, architectural studios, and survey firms for rapid site feasibility and scenario planning.",
        icon: "Building",
        metric: "$199 - $1,499 / mo",
      },
      {
        title: "Bank API & Risk Scoring (The Killer Wedge)",
        description:
          "Providing a proprietary 'Capital Risk & Bankability Score' to project finance banks, enabling institutions to underwrite construction loans with zero manual audit friction.",
        icon: "Landmark",
        metric: "1.5% Loan Volume / API Call",
      },
    ],
    visualDescription:
      "Two distinct columns. Left: 'Real Estate Developers' (SaaS). Right: 'Commercial Banks' (API/Underwriting).",
    speakerNotes:
      "We start by selling feasibility intelligence to developers. But our ultimate moat is the financial sector. Banks lose millions on stalled projects. By providing a dynamic risk score, we become the mandatory underwriting engine for construction finance.",
    layout: "business-model",
    keyTakeaway: "The Bankability Score transforms BuildAI into the foundational underwriting protocol for African infrastructure.",
    durationSeconds: 50,
  },
  {
    id: "slide-10",
    slideNumber: 10,
    category: "Market & GTM",
    headline: "Riding the Largest Urbanization Event in History.",
    subheadline: "Africa's rapid urban expansion creates an unprecedented $1.4 Trillion market demand.",
    bullets: [
      {
        title: "1.3 Billion New Urbanites",
        description:
          "Africa’s population will double by 2050, requiring tens of millions of new residential units, logistics hubs, and commercial spaces annually.",
        icon: "Globe",
        metric: "2x Population by 2050",
      },
      {
        title: "Macro Economic Driver",
        description:
          "Real estate and construction already account for over 10% of continental GDP across key sub-Saharan economies.",
        icon: "BarChart3",
        metric: ">10% of Continental GDP",
      },
      {
        title: "Phased GTM Strategy",
        description:
          "Phase 1: Launch in Lagos, Nigeria (partnering with 15 mid-tier developers & architectural firms). Phase 2: Rapid expansion to Accra (Ghana) & Nairobi (Kenya).",
        icon: "MapPin",
        metric: "Lagos → Accra → Nairobi",
      },
    ],
    visualDescription:
      "A map of Africa highlighting Nigeria, Ghana, and Kenya with a 'TAM/SAM/SOM' chart.",
    speakerNotes:
      "Africa is the urban frontier of the 21st century. We are launching where development friction is highest: starting in Lagos, the commercial powerhouse of West Africa, then expanding into Accra and Nairobi.",
    layout: "market",
    keyTakeaway: "Massive demographic tailwinds combined with focused hyper-local rollout across top African commercial hubs.",
    durationSeconds: 45,
  },
  {
    id: "slide-11",
    slideNumber: 11,
    category: "Defensibility",
    headline: "Western Tech Cannot Easily Copy This.",
    subheadline: "Our moat is rooted in deep local data capture and informal market adaptation.",
    bullets: [
      {
        title: "Proprietary Data Structuring",
        description:
          "We are systematically building proprietary, digitized datasets of local material costs, supplier indices, and unindexed municipal zoning laws that global APIs lack.",
        icon: "Database",
        metric: "Proprietary Datasets",
      },
      {
        title: "Hyper-Localization & Climate AI",
        description:
          "Models fine-tuned for African supply chain bottlenecks, informal land tenure systems, red soil/monsoon drainages, and off-grid microgrid integration.",
        icon: "ShieldCheck",
        metric: "Local Supply Chain Fine-Tuning",
      },
      {
        title: "Network Effects with Financial Institutions",
        description:
          "As banks adopt our Bankability Score as the lending benchmark, developers are compelled to use BuildAI for all capital requests.",
        icon: "Lock",
        metric: "Underwriting Standard",
      },
    ],
    visualDescription:
      "A shield icon representing 'Local Data Moat' blocking generic global software icons.",
    speakerNotes:
      "Global software cannot serve this market because it assumes digitized data that simply does not exist. Our moat is our ground-level data structuring, making our intelligence impossible to replicate off-the-shelf.",
    layout: "moat",
    keyTakeaway: "Unindexed local data + institutional lending integration creates an impenetrable regional moat.",
    durationSeconds: 45,
  },
  {
    id: "slide-12",
    slideNumber: 12,
    category: "The Team",
    headline: "Built by Operators Who Understand the Ground.",
    subheadline: "Deep African real estate domain expertise paired with elite multimodal AI engineering.",
    bullets: [
      {
        title: "Leadership & Domain Team",
        description:
          "African real estate strategy, emerging market infrastructure economics, and regional development capital.",
        icon: "UserCheck",
      },
      {
        title: "AI & Engineering Lead — CTO / AI Systems",
        description:
          "Specialist in Multimodal AI, RAG architectures with Gemini 1.5 Pro, and edge model deployment using Gemma on low-bandwidth mobile devices.",
        icon: "Code2",
      },
      {
        title: "Strategic Advisory Council",
        description:
          "Senior urban planners & structural engineering partners from Lagos State Physical Planning authorities and regional real estate developer associations.",
        icon: "Award",
      },
    ],
    visualDescription:
      "Team executive profiles with domain achievements, AI credentials, and advisory stamps.",
    speakerNotes:
      "We combine deep domain expertise in African construction with advanced AI engineering. We know exactly where the data is hidden, and how to extract it.",
    layout: "team",
    keyTakeaway: "The ideal intersection of ground-level African real estate experience and world-class AI capability.",
    durationSeconds: 40,
  },
  {
    id: "slide-13",
    slideNumber: 13,
    category: "Execution Roadmap",
    headline: "Execution Roadmap to Accra (Sept - Dec).",
    subheadline: "A focused 90-day sprint leading to our live Demo Day milestone.",
    bullets: [
      {
        title: "Month 1 (Sept): RAG & Legal Ingestion",
        description:
          "Build the core RAG architecture. Ingest Nigerian building codes, state zoning gazettes, and historical material cost databases into Gemini 1.5 Pro.",
        icon: "FileCode",
        metric: "Sept: 500+ Code Ingest",
      },
      {
        title: "Month 2 (Oct): Multimodal Training & Beta",
        description:
          "Train multimodal vision models on drone footage, site sketches, and topography. Onboard 5 closed-beta developer partners in Lagos.",
        icon: "Cpu",
        metric: "Oct: 5 Pilot Developers",
      },
      {
        title: "Month 3 (Nov): Bankability Score & UI",
        description:
          "Finalize the developer UI/UX and calibrate the 'Bankability Risk Score' algorithm with 2 commercial project finance pilot banks.",
        icon: "Sliders",
        metric: "Nov: Bank Calibration",
      },
      {
        title: "The December Demo (Accra)",
        description:
          "Live, interactive demonstration of turning a raw smartphone photo of an empty plot into a fully phased, cost-estimated development plan in 60 seconds.",
        icon: "Rocket",
        metric: "Dec: Live 60s Demo",
      },
    ],
    visualDescription:
      "A simple Gantt chart or timeline graphic highlighting milestones leading to Demo Day in Accra.",
    speakerNotes:
      "Our 90-day roadmap is razor-focused on one milestone: demonstrating live in Accra how a raw smartphone photo of vacant African land transforms into a bankable development plan in under 60 seconds.",
    layout: "roadmap",
    keyTakeaway: "Clear milestones with quantifiable deliverables culminating in a live multimodal demo at Demo Day.",
    durationSeconds: 45,
  },
  {
    id: "slide-14",
    slideNumber: 14,
    category: "Closing",
    headline: "Let’s Build Africa, Smarter.",
    subheadline: "Join us at the Google Africa Applied AI Lab to shape the continent's urban future.",
    bullets: [
      {
        title: "Capital & Partnership Ask",
        description:
          "Raising seed funding and onboarding institutional banking partners to deploy BuildAI across West and East Africa.",
        icon: "TrendingUp",
      },
      {
        title: "Official Website",
        description:
          "Website: https://buildai.africa",
        icon: "Globe",
      },
    ],
    visualDescription:
      "Closing branding card with high-contrast typography, partnership callouts, and official website.",
    speakerNotes:
      "Africa is urbanizing right now. With BuildAI, we have the opportunity to ensure every dollar invested builds smarter, greener, and faster. Visit buildai.africa to learn more.",
    layout: "closing",
    keyTakeaway: "Ready to scale with Google AI, developer partners, and construction finance institutions.",
    durationSeconds: 30,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Saroj Ekka",
    role: "Co-Founder & CEO",
    domain: "Real Estate & Strategy",
    background: "Deep expertise in African real estate strategy, emerging market infrastructure economics, and regional project development finance.",
    skills: ["Real Estate Feasibility", "Project Finance", "GTM & Partnerships", "Emerging Market Strategy"],
  },
  {
    name: "Dr. K. Adeyemi",
    role: "Co-Founder & CTO",
    domain: "Multimodal AI & Systems",
    background: "AI researcher & engineer specializing in Gemini 1.5 Pro RAG architectures, geospatial vision models, and quantized Gemma edge deployment.",
    skills: ["Google DeepMind APIs", "Multimodal Vision", "Gemma Edge Quantization", "RAG & Vector Pipelines"],
  },
  {
    name: "Arc. Emeka Nwosu",
    role: "Head of Domain Architecture",
    domain: "Urban Planning & Building Codes",
    background: "14+ years managing major commercial developments across Lagos, Abuja, and Accra; former technical consultant to State Urban Planning Board.",
    skills: ["West African Building Codes", "FAR & Zoning Optimization", "Quantity Surveying", "Permitting Pathways"],
  },
];
