export type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export const PROMPT_PROBES = [
  'What is the Creator White Label Revenue Engine?',
  'How does white-labeling work?',
  'What monetization tools are included?',
  'Who is this platform for?',
  'How can I onboard creators quickly?',
  'What ROI can I expect?',
]

const PLATFORM_KNOWLEDGE: Record<string, string> = {
  what: `The Creator White Label Revenue Engine is a purpose-built platform for agencies, creator management companies, MCNs, and coaches who serve content creators. It lets you deliver best-in-class monetization tools under your own brand—without the cost, complexity, and timeline of building from scratch.`,
  who: `Our ideal customers are creator economy operators: agencies that manage creators, multi-channel networks (MCNs), creator coaches and educators, and SaaS companies building creator-facing products. They already serve creators, want to own the relationship, need speed and scalability, and think strategically about unit economics.`,
  white: `Deep white-label means your brand, your domain, your pricing, and your support. Creators and their audiences never need to know what powers the experience. Unlike superficial rebranding on other platforms, you're not locked into their roadmap or feature set.`,
  features: `The platform includes a full revenue-first feature set: courses, memberships, digital products, affiliates, and communities—all in one place. You get one billing relationship, one analytics dashboard, and one integration surface instead of juggling multiple tools.`,
  onboarding: `The platform is built for multi-tenant, multi-creator operations. You can onboard creators quickly, configure revenue stacks per client, and scale without scaling your engineering team. Deploy a differentiated offering in weeks, not quarters.`,
  roi: `For agencies serving 50+ creators, expect 20–40% improvement in revenue per creator and meaningful reduction in time-to-first-revenue (often from months to weeks). You'll see faster revenue realization, higher retention, operational efficiency, and scalable unit economics.`,
  pain: `We solve: (1) Expensive, slow monetization tech—months of development and high costs. (2) Scattered tools—courses here, memberships there, leading to poor UX. (3) Limited white-label options that lock you in. (4) Difficulty proving ROI to creators. (5) Commodity positioning with no differentiation.`,
  journey: `Everything is built around the creator's revenue journey: awareness → conversion → retention → expansion. Analytics, automation, and UX all serve that flow. It's a true revenue engine, not features bolted onto a generic CMS or LMS.`,
}

function normalizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

function selectResponse(query: string, history: Message[]): string {
  const words = normalizeQuery(query)

  if (words.some((w) => ['hi', 'hello', 'hey', 'howdy'].includes(w))) {
    return `Hello! I'm your platform assistant. I can answer questions about the Creator White Label Revenue Engine—from features and white-labeling to onboarding and ROI. What would you like to know?`
  }

  if (words.some((w) => ['what', 'platform', 'engine', 'revenue'].includes(w)) && !words.includes('roi')) {
    return PLATFORM_KNOWLEDGE.what
  }

  if (words.some((w) => ['who', 'for', 'customer', 'agency', 'mcn', 'coach'].includes(w))) {
    return PLATFORM_KNOWLEDGE.who
  }

  if (words.some((w) => ['white', 'label', 'brand', 'own'].includes(w))) {
    return PLATFORM_KNOWLEDGE.white
  }

  if (words.some((w) => ['feature', 'include', 'tool', 'course', 'membership', 'product', 'affiliate', 'community'].includes(w))) {
    return PLATFORM_KNOWLEDGE.features
  }

  if (words.some((w) => ['onboard', 'creator', 'quick', 'add', 'setup'].includes(w))) {
    return PLATFORM_KNOWLEDGE.onboarding
  }

  if (words.some((w) => ['roi', 'return', 'revenue', 'expect', 'result'].includes(w))) {
    return PLATFORM_KNOWLEDGE.roi
  }

  if (words.some((w) => ['pain', 'problem', 'solve', 'challenge'].includes(w))) {
    return PLATFORM_KNOWLEDGE.pain
  }

  if (words.some((w) => ['journey', 'flow', 'awareness', 'conversion', 'retention'].includes(w))) {
    return PLATFORM_KNOWLEDGE.journey
  }

  if (words.some((w) => ['help', 'start', 'begin', 'guide'].includes(w))) {
    return `I'd be happy to guide you! Here are some areas I can help with:\n\n• Platform overview — What we offer and who it's for\n• White-labeling — How your brand takes center stage\n• Monetization tools — Courses, memberships, digital products, affiliates, communities\n• Onboarding — How to add creators and configure revenue stacks\n• ROI — Expected outcomes for agencies serving 50+ creators\n\nAsk me a specific question, or try one of the suggested prompts above.`
  }

  return `I'm not sure I have a specific answer for that. I'm best at answering questions about:\n\n• What the Creator White Label Revenue Engine is\n• Who it's for (agencies, MCNs, coaches)\n• White-labeling and branding\n• Monetization features (courses, memberships, etc.)\n• Onboarding creators\n• Expected ROI and outcomes\n\nFeel free to ask about any of these, or rephrase your question.`
}

function simulateTypingDelay(): Promise<void> {
  return new Promise((r) => setTimeout(r, 400 + Math.random() * 500))
}

export async function getAIResponse(
  userMessage: string,
  history: Message[]
): Promise<string> {
  await simulateTypingDelay()
  return selectResponse(userMessage, history)
}
