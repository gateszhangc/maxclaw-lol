export const siteUrl =
  process.env.NEXT_PUBLIC_WEB_URL?.replace(/\/$/, "") ||
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://maxclaw.lol";

export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type CardItem = {
  title: string;
  description: string;
  tag?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ComparisonRow = {
  metric: string;
  maxclaw: string;
  other: string;
};

export type Section = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  cards?: CardItem[];
};

export type ContentPage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  summary: Stat[];
  comparisonTarget?: string;
  matrix?: ComparisonRow[];
  sections: Section[];
  faqs?: FaqItem[];
  relatedSlugs: string[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export const siteConfig = {
  name: "MaxClaw",
  shortName: "MaxClaw",
  projectName: process.env.NEXT_PUBLIC_PROJECT_NAME?.trim() || "maxclaw-lol",
  organizationName: "MiniMax",
  authorName: "MaxClaw Editorial Team",
  tagline: "Cloud AI agent by MiniMax for zero-ops deployment",
  description:
    "MaxClaw is the cloud AI agent by MiniMax for zero-ops deployment. Learn what MaxClaw is, how it works, which teams it fits, and how MaxClaw compares with OpenClaw and the broader Claw ecosystem.",
  url: siteUrl,
  socialImagePath: "/opengraph-image",
  keywords: [
    "MaxClaw",
    "MaxClaw AI agent",
    "what is MaxClaw",
    "MiniMax MaxClaw",
    "MiniMax AI agent",
    "cloud AI agent",
    "MaxClaw deployment",
    "MaxClaw features",
    "OpenClaw alternative",
    "MiniMax M2.5",
    "AI agent deployment",
    "MaxClaw vs OpenClaw",
  ],
  ctaPath: "/get-started",
  launchStatusUrl: "https://www.easyclaw.pro",
};

export const headerLinks: NavLink[] = [
  { href: "/#features", label: "Features" },
  { href: "/claw-ecosystem", label: "Ecosystem" },
  { href: "/minimax-m25-model", label: "Model" },
  { href: "/minimax-ai", label: "MiniMax" },
];

export const comparisonLinks: NavLink[] = [
  {
    href: "/maxclaw-vs-openclaw",
    label: "MaxClaw vs OpenClaw",
    description: "Managed cloud versus self-hosted flexibility.",
  },
  {
    href: "/maxclaw-vs-kimiclaw",
    label: "MaxClaw vs KimiClaw",
    description: "Cloud agent comparison across model, storage, and channels.",
  },
  {
    href: "/maxclaw-vs-zeroclaw",
    label: "MaxClaw vs ZeroClaw",
    description: "Managed cloud versus Rust-native infrastructure.",
  },
  {
    href: "/maxclaw-vs-picoclaw",
    label: "MaxClaw vs PicoClaw",
    description: "Cloud AI agent versus edge and embedded deployment.",
  },
];

export const researchLinks: NavLink[] = [
  {
    href: "/claw-ecosystem",
    label: "Claw Ecosystem",
    description: "A landscape view of MaxClaw and its closest neighbors.",
  },
  {
    href: "/minimax-ai",
    label: "MiniMax AI",
    description: "The company profile behind MaxClaw.",
  },
  {
    href: "/minimax-m25-model",
    label: "MiniMax M2.5 Model",
    description: "Architecture, economics, and agentic fit.",
  },
];

export const featuredRoutes: CardItem[] = [
  {
    title: "MaxClaw vs OpenClaw",
    description:
      "Choose between zero-ops cloud deployment and self-hosted model flexibility.",
    tag: "/maxclaw-vs-openclaw",
  },
  {
    title: "MaxClaw vs KimiClaw",
    description:
      "See how MaxClaw compares with Moonshot AI on storage, skills, and messaging reach.",
    tag: "/maxclaw-vs-kimiclaw",
  },
  {
    title: "MaxClaw vs ZeroClaw",
    description:
      "Compare a fully managed agent with a lean Rust-native runtime built for efficiency.",
    tag: "/maxclaw-vs-zeroclaw",
  },
  {
    title: "MaxClaw vs PicoClaw",
    description:
      "Understand where MaxClaw fits relative to offline and edge-first agent deployments.",
    tag: "/maxclaw-vs-picoclaw",
  },
  {
    title: "Claw Ecosystem",
    description:
      "A decision map for the full Claw landscape, from managed services to self-hosted binaries.",
    tag: "/claw-ecosystem",
  },
  {
    title: "MiniMax AI",
    description:
      "Company context, product strategy, and why MiniMax built a cloud-first Claw product.",
    tag: "/minimax-ai",
  },
  {
    title: "MiniMax M2.5 Model",
    description:
      "A technical lens on the MoE model, long context, and economics behind MaxClaw.",
    tag: "/minimax-m25-model",
  },
  {
    title: "Launch Status",
    description:
      "The current placeholder page for deployment links, release messaging, and the next CTA step.",
    tag: "/get-started",
  },
];

export const heroStats: Stat[] = [
  {
    label: "Launch flow",
    value: "10 sec",
    detail: "Public positioning centers on one-click cloud deployment instead of server setup.",
  },
  {
    label: "Context range",
    value: "200K-1M",
    detail: "MiniMax M2.5 is positioned for long sessions, memory-heavy workflows, and research.",
  },
  {
    label: "Cost posture",
    value: "1/7-1/20",
    detail: "The public narrative emphasizes lower per-token cost than comparable frontier models.",
  },
  {
    label: "Channel fit",
    value: "TG / DC / Slack",
    detail: "MaxClaw is framed as living inside the communication tools teams already use.",
  },
];

export const searchIntentCards: CardItem[] = [
  {
    title: "What MaxClaw is",
    description:
      "MaxClaw is presented as a cloud-hosted AI agent by MiniMax, built for teams that want agent behavior without self-hosting the stack.",
    tag: "Definition",
  },
  {
    title: "Why people evaluate MaxClaw",
    description:
      "Search intent usually centers on fast deployment, long-context memory, messaging-native operation, and whether MaxClaw can replace a heavier setup.",
    tag: "Search intent",
  },
  {
    title: "What to compare next",
    description:
      "Most buyers immediately compare MaxClaw with OpenClaw and adjacent Claw variants to understand the convenience-versus-control trade-off.",
    tag: "Comparison",
  },
];

export const featureCards: CardItem[] = [
  {
    title: "Cloud-hosted by default",
    description:
      "MaxClaw removes VPS provisioning, Docker chores, and manual API key plumbing from the default path.",
    tag: "Deployment",
  },
  {
    title: "Persistent working memory",
    description:
      "The product pitch leans on memory continuity across long-running sessions and evolving user preferences.",
    tag: "Memory",
  },
  {
    title: "Native messaging presence",
    description:
      "Telegram, Discord, and Slack integrations position the agent inside existing operational channels.",
    tag: "Channels",
  },
  {
    title: "Persona control",
    description:
      "Operators can shape tone, personality, and behavioral guidance without rebuilding an agent stack.",
    tag: "Control",
  },
  {
    title: "OpenClaw tool inheritance",
    description:
      "The cloud product is still described as part of the broader Claw movement, not a disconnected black box.",
    tag: "Ecosystem",
  },
  {
    title: "Economics for always-on use",
    description:
      "The model story is tied to high-frequency automation that stays affordable enough to keep running.",
    tag: "Cost",
  },
];

export const technologyCards: CardItem[] = [
  {
    title: "MiniMax M2.5",
    description:
      "A 229B-parameter Mixture-of-Experts model with roughly 10B active parameters per token.",
  },
  {
    title: "Lightning Attention",
    description:
      "MiniMax positions its linear-scaling attention system as the reason long context stays practical.",
  },
  {
    title: "Fast interactive inference",
    description:
      "Public materials describe speeds up to 100 tokens per second for responsive agent interactions.",
  },
  {
    title: "Agentic specialization",
    description:
      "The M2.5 narrative focuses on code generation, multi-step tool calling, and complex reasoning.",
  },
];

export const pillarCards: CardItem[] = [
  {
    title: "Zero technical debt",
    description:
      "Managed infrastructure means no patch treadmill, no server babysitting, and fewer integration surprises.",
  },
  {
    title: "Economic headroom",
    description:
      "Sparse activation and lower inference cost are central to MaxClaw's positioning for continuous automation.",
  },
  {
    title: "Operational proximity",
    description:
      "The agent is designed to operate where work already happens, rather than asking users to switch tools.",
  },
];

export const homeComparisonRows = [
  {
    metric: "Primary posture",
    maxclaw: "Managed cloud AI agent",
    openclaw: "Self-hosted framework",
    kimi: "Browser-centric managed service",
    zero: "Rust-native OSS runtime",
    pico: "Edge and embedded agent",
  },
  {
    metric: "Setup burden",
    maxclaw: "Low",
    openclaw: "High",
    kimi: "Low",
    zero: "Medium",
    pico: "Medium",
  },
  {
    metric: "Model strategy",
    maxclaw: "MiniMax M2.5",
    openclaw: "Bring your own",
    kimi: "Kimi K2.5",
    zero: "Bring your own",
    pico: "PicoLM or cloud fallback",
  },
  {
    metric: "Best fit",
    maxclaw: "Always-on productivity agents",
    openclaw: "Developers wanting full control",
    kimi: "Document-heavy browser workflows",
    zero: "Security-conscious lean hosting",
    pico: "Offline IoT and embedded scenarios",
  },
  {
    metric: "Distribution",
    maxclaw: "Messaging platforms",
    openclaw: "Broad channel connectors",
    kimi: "Browser and selected channels",
    zero: "Config-driven channel set",
    pico: "Embedded and device-side",
  },
];

export const useCases: CardItem[] = [
  {
    title: "Operators who want an agent now",
    description:
      "Best for teams that want deployment speed and continuity without taking on runtime operations.",
  },
  {
    title: "Developers benchmarking the ecosystem",
    description:
      "Useful when comparing MaxClaw against OpenClaw, KimiClaw, ZeroClaw, and PicoClaw before committing.",
  },
  {
    title: "Messaging-native workflows",
    description:
      "Works well when the agent needs to stay inside Telegram, Discord, or Slack instead of a separate console.",
  },
  {
    title: "Cost-sensitive automation",
    description:
      "Relevant for recurring research, monitoring, and content tasks that would otherwise be too expensive to keep on.",
  },
];

export const deploymentSteps: CardItem[] = [
  {
    title: "1. Open the agent surface",
    description:
      "Start from the MiniMax Agent entry point where MaxClaw is positioned as a managed deployment.",
  },
  {
    title: "2. Select MaxClaw",
    description:
      "Choose the MaxClaw agent profile instead of assembling an OpenClaw stack by hand.",
  },
  {
    title: "3. Deploy into the cloud",
    description:
      "The public promise is a one-click setup that skips infrastructure provisioning on your side.",
  },
  {
    title: "4. Bind your channels",
    description:
      "Attach Telegram, Discord, or Slack so the agent shows up inside your operating environment.",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What is MaxClaw?",
    answer:
      "MaxClaw is positioned as the cloud-hosted AI agent built by MiniMax on top of the broader OpenClaw movement. The pitch is simple: keep the tool-using agent behavior, remove the infrastructure burden.",
  },
  {
    question: "What is MaxClaw used for?",
    answer:
      "MaxClaw is aimed at teams that want a persistent AI agent for research, monitoring, messaging-native workflows, and always-on automation without maintaining a self-hosted runtime.",
  },
  {
    question: "What model powers MaxClaw?",
    answer:
      "MaxClaw is publicly framed around MiniMax M2.5, a Mixture-of-Experts model with 229B total parameters, long context support, and a lower cost profile for agentic workloads.",
  },
  {
    question: "How fast is deployment supposed to be?",
    answer:
      "The public product messaging centers on deployment in about 10 seconds, with the infrastructure handled for you in the cloud.",
  },
  {
    question: "Which channels matter most?",
    answer:
      "Telegram, Discord, and Slack appear repeatedly in the official narrative because they are the clearest example of MaxClaw living where work already happens.",
  },
  {
    question: "How is MaxClaw different from OpenClaw?",
    answer:
      "OpenClaw keeps flexibility and self-hosting control. MaxClaw packages the same movement into a managed, cloud-first path for people who do not want to run the infrastructure layer.",
  },
  {
    question: "Where does MaxClaw beat other Claw variants?",
    answer:
      "The strongest public case is zero-ops deployment plus cost efficiency for always-on workflows. Other variants can win on flexibility, browser ecosystems, Rust-native security, or edge deployment.",
  },
];

const pages: ContentPage[] = [
  {
    slug: "claw-ecosystem",
    title: "The Claw Ecosystem: where MaxClaw fits in 2026",
    shortTitle: "Claw Ecosystem",
    description:
      "A landscape guide to MaxClaw, OpenClaw, KimiClaw, ZeroClaw, and PicoClaw. Use it to decide whether you need managed cloud convenience, browser workflows, Rust efficiency, or edge deployment.",
    eyebrow: "Ecosystem map",
    intro:
      "The Claw ecosystem now spans five distinct product shapes: MaxClaw for managed cloud deployment, OpenClaw for broad self-hosted flexibility, KimiClaw for browser-centric workflows, ZeroClaw for Rust-native lean infrastructure, and PicoClaw for offline or embedded environments.",
    summary: [
      {
        label: "Decision axis",
        value: "Ops vs control",
        detail: "The biggest trade-off is still how much infrastructure responsibility you want to keep.",
      },
      {
        label: "Model posture",
        value: "Fixed or BYO",
        detail: "Managed services pick the model for you; open frameworks let you swap providers.",
      },
      {
        label: "Distribution",
        value: "Chat, browser, edge",
        detail: "Each variant wins by living in a different operational context.",
      },
    ],
    sections: [
      {
        title: "Three ways the ecosystem is splitting",
        description:
          "The market is no longer just open source versus hosted. It now breaks across operational responsibility, distribution channel, and hardware footprint.",
        bullets: [
          "Managed services such as MaxClaw reduce deployment friction to near zero.",
          "Browser-led agents such as KimiClaw emphasize storage, skills, and a workspace environment.",
          "Infrastructure-first projects such as ZeroClaw and PicoClaw optimize for resource efficiency, security posture, or offline execution.",
        ],
      },
      {
        title: "Where MaxClaw sits",
        description:
          "MaxClaw occupies the position for teams that want the Claw toolchain without taking on the burden of hosting, model routing, or channel plumbing.",
        cards: [
          {
            title: "Best when you need velocity",
            description: "Choose MaxClaw when deployment speed matters more than infrastructure customization.",
          },
          {
            title: "Best when you want channel-native operations",
            description: "Its strongest public edge is the messaging-platform story rather than a browser workspace.",
          },
          {
            title: "Best when cost matters over time",
            description: "Lower model cost matters most when the agent is meant to stay on continuously.",
          },
        ],
      },
      {
        title: "How to choose the right variant",
        description:
          "Start with your constraint, not the hype. If you need full control, choose the framework. If you need a browser-first research cockpit, choose the browser service. If you need zero operations, MaxClaw is the right center line.",
        bullets: [
          "Pick OpenClaw if model choice and channel breadth matter most.",
          "Pick KimiClaw if document storage and skill ecosystem depth define your workflow.",
          "Pick ZeroClaw if security layering and tiny runtime footprint matter most.",
          "Pick PicoClaw if your agent must run offline or on constrained hardware.",
        ],
      },
    ],
    relatedSlugs: [
      "maxclaw-vs-openclaw",
      "maxclaw-vs-kimiclaw",
      "maxclaw-vs-zeroclaw",
      "maxclaw-vs-picoclaw",
    ],
    cta: {
      title: "Use the ecosystem map as your filter",
      description:
        "If you already know that you want a managed cloud path, the next step is to zoom into MaxClaw itself.",
      primaryLabel: "Go to launch status",
      primaryHref: "/get-started",
      secondaryLabel: "Return home",
      secondaryHref: "/",
    },
  },
  {
    slug: "maxclaw-vs-openclaw",
    title: "MaxClaw vs OpenClaw: managed cloud versus self-hosted control",
    shortTitle: "MaxClaw vs OpenClaw",
    description:
      "Compare MaxClaw with OpenClaw across deployment burden, model flexibility, channels, security posture, and who each platform serves best.",
    eyebrow: "Comparison",
    intro:
      "MaxClaw and OpenClaw share the same movement, but they solve different problems. OpenClaw gives operators maximum freedom and responsibility. MaxClaw is the cloud-managed option for teams that want the result without owning the stack.",
    comparisonTarget: "OpenClaw",
    summary: [
      {
        label: "Core trade-off",
        value: "Convenience vs control",
        detail: "MaxClaw simplifies the operating layer; OpenClaw preserves freedom over models and hosting.",
      },
      {
        label: "Deployment path",
        value: "Cloud vs self-hosted",
        detail: "OpenClaw assumes you will touch infrastructure. MaxClaw assumes you do not want to.",
      },
      {
        label: "Audience",
        value: "Operators vs builders",
        detail: "The sharper your need for custom infra, the stronger the case for OpenClaw.",
      },
    ],
    matrix: [
      {
        metric: "Setup burden",
        maxclaw: "One-click managed path with no server provisioning on your side.",
        other: "VPS, Docker, model keys, and ongoing maintenance live with you.",
      },
      {
        metric: "Model choice",
        maxclaw: "Centered on MiniMax M2.5.",
        other: "Bring your own model stack across multiple providers.",
      },
      {
        metric: "Channel story",
        maxclaw: "Focused around Telegram, Discord, and Slack.",
        other: "Broader connector flexibility for custom setups.",
      },
      {
        metric: "Best fit",
        maxclaw: "Teams optimizing for speed and continuity.",
        other: "Developers who want full customization and infrastructure control.",
      },
    ],
    sections: [
      {
        title: "Why OpenClaw still matters",
        description:
          "OpenClaw remains the right answer if your priority is ownership of the execution environment. It keeps the model layer swappable, the channel layer extensible, and the deployment layer in your hands.",
        bullets: [
          "You can align model choice to cost, performance, or privacy requirements.",
          "You can shape integrations beyond the opinionated defaults of a hosted product.",
          "You accept setup complexity because it buys operational freedom.",
        ],
      },
      {
        title: "Why MaxClaw wins for managed deployment",
        description:
          "MaxClaw compresses the path from curiosity to live agent. The value is not just faster setup; it is removing the hidden burden of staying current after the initial install.",
        cards: [
          {
            title: "No infrastructure queue",
            description: "You do not need to budget server setup before evaluating the product.",
          },
          {
            title: "Messaging-first distribution",
            description: "The product is designed to appear in the communication channels teams already rely on.",
          },
          {
            title: "Cost story tied to uptime",
            description: "Lower model cost matters more as the number of automated runs increases.",
          },
        ],
      },
      {
        title: "Decision rule",
        description:
          "If your team would rather spend time refining workflows than maintaining runtime infrastructure, MaxClaw is the stronger default. If you need to tune the stack itself, OpenClaw remains the more appropriate choice.",
      },
    ],
    faqs: [
      {
        question: "Is MaxClaw just a hosted version of OpenClaw?",
        answer:
          "It is better described as the managed cloud interpretation of the same ecosystem. The hosted experience is the product, not an implementation detail.",
      },
      {
        question: "Who should not pick MaxClaw over OpenClaw?",
        answer:
          "Teams with strict infrastructure constraints, provider requirements, or a deep need to shape the runtime itself will usually prefer OpenClaw.",
      },
    ],
    relatedSlugs: ["claw-ecosystem", "maxclaw-vs-kimiclaw", "get-started"],
    cta: {
      title: "Prefer the managed path?",
      description:
        "Move to the launch page if you already know you want MaxClaw's zero-ops posture.",
      primaryLabel: "Open launch status",
      primaryHref: "/get-started",
      secondaryLabel: "Compare with ZeroClaw",
      secondaryHref: "/maxclaw-vs-zeroclaw",
    },
  },
  {
    slug: "maxclaw-vs-kimiclaw",
    title: "MaxClaw vs KimiClaw: two cloud AI agents with different priorities",
    shortTitle: "MaxClaw vs KimiClaw",
    description:
      "Compare MaxClaw with KimiClaw across cloud deployment, storage, skills, channels, and the difference between messaging-native and browser-centric workflows.",
    eyebrow: "Comparison",
    intro:
      "MaxClaw and KimiClaw are both managed services, but they lead with different strengths. MaxClaw emphasizes fast deployment into messaging channels and cost-efficient agent behavior. KimiClaw emphasizes browser workflows, file storage, and a large skills ecosystem.",
    comparisonTarget: "KimiClaw",
    summary: [
      {
        label: "Workflow center",
        value: "Chat vs browser",
        detail: "MaxClaw is stronger when your agent should live in channels; KimiClaw is stronger when the browser workspace is central.",
      },
      {
        label: "Data posture",
        value: "Memory vs storage",
        detail: "MaxClaw leans into remembered context while KimiClaw leans into document-heavy cloud storage.",
      },
      {
        label: "Ecosystem flavor",
        value: "Lean vs expansive",
        detail: "KimiClaw's skills library is a differentiator; MaxClaw's strongest pitch is speed and simplicity.",
      },
    ],
    matrix: [
      {
        metric: "Model positioning",
        maxclaw: "MiniMax M2.5 for cost-efficient agentic tasks.",
        other: "Kimi K2.5 with deep browser ecosystem alignment.",
      },
      {
        metric: "Storage story",
        maxclaw: "Long-term memory and conversation continuity.",
        other: "40 GB cloud storage for document-centric workflows.",
      },
      {
        metric: "Skills posture",
        maxclaw: "Tighter, simpler product experience.",
        other: "Large community skills surface with broad workflow coverage.",
      },
      {
        metric: "Best fit",
        maxclaw: "Messaging-native operator workflows.",
        other: "Research-heavy browser workflows and large file collections.",
      },
    ],
    sections: [
      {
        title: "Where KimiClaw has structural advantages",
        description:
          "KimiClaw is stronger when your workflow depends on large document libraries, browser-led research, or a broad catalog of prebuilt skills.",
        bullets: [
          "40 GB cloud storage supports document-heavy retrieval workflows.",
          "The ClawHub skills surface widens the number of prepackaged behaviors.",
          "The browser ecosystem is a feature, not a side effect.",
        ],
      },
      {
        title: "Why MaxClaw stays compelling",
        description:
          "MaxClaw keeps the operating model simpler. It puts the agent in the places your team already works and ties the product story directly to lower-cost always-on automation.",
        cards: [
          {
            title: "Lower-friction deployment",
            description: "MaxClaw is framed as the faster path from idea to live agent.",
          },
          {
            title: "Clearer messaging-platform story",
            description: "The strongest distribution angle is direct operation in chat environments.",
          },
          {
            title: "Cost discipline for recurring tasks",
            description: "Lower model cost matters more as the number of automated runs increases.",
          },
        ],
      },
      {
        title: "Decision rule",
        description:
          "Choose MaxClaw when the agent must be present inside messaging workflows with minimal setup. Choose KimiClaw when your workflow revolves around browser productivity, stored files, and a wider skills marketplace.",
      },
    ],
    relatedSlugs: ["claw-ecosystem", "minimax-m25-model", "get-started"],
    cta: {
      title: "Need the simpler cloud agent?",
      description:
        "If messaging-first deployment matters more than file storage and browser workspace depth, MaxClaw is the cleaner path.",
      primaryLabel: "Go to launch status",
      primaryHref: "/get-started",
      secondaryLabel: "Read the model page",
      secondaryHref: "/minimax-m25-model",
    },
  },
  {
    slug: "maxclaw-vs-zeroclaw",
    title: "MaxClaw vs ZeroClaw: managed cloud simplicity versus Rust-native efficiency",
    shortTitle: "MaxClaw vs ZeroClaw",
    description:
      "See how MaxClaw compares with ZeroClaw across runtime footprint, hosting responsibility, security posture, and the trade-off between cloud ease and Rust-native control.",
    eyebrow: "Comparison",
    intro:
      "ZeroClaw represents the infrastructure-first side of the Claw ecosystem: lean binaries, strict runtime design, and a strong security story. MaxClaw represents the opposite side: a managed cloud path that removes hosting complexity for teams that want outcomes more than runtime ownership.",
    comparisonTarget: "ZeroClaw",
    summary: [
      {
        label: "Primary difference",
        value: "Managed vs lean self-hosted",
        detail: "ZeroClaw wins on footprint and security model. MaxClaw wins on not needing to host anything.",
      },
      {
        label: "Engineering bias",
        value: "Rust vs productized cloud",
        detail: "This comparison mostly comes down to whether your team wants to own the system boundary.",
      },
      {
        label: "Operational fit",
        value: "VPS vs no VPS",
        detail: "If the phrase 'runtime policy' matters, ZeroClaw becomes more attractive.",
      },
    ],
    matrix: [
      {
        metric: "Hosting model",
        maxclaw: "Always-on managed service.",
        other: "Self-hosted Rust binary with tight resource characteristics.",
      },
      {
        metric: "Security posture",
        maxclaw: "Managed cloud controls.",
        other: "Explicit runtime tiers, allowlists, and Rust-native safety posture.",
      },
      {
        metric: "Hardware efficiency",
        maxclaw: "No local hardware requirement.",
        other: "Optimized for small footprints and efficient self-hosting.",
      },
      {
        metric: "Best fit",
        maxclaw: "Teams optimizing for speed and simplicity.",
        other: "Teams optimizing for runtime discipline and infrastructure ownership.",
      },
    ],
    sections: [
      {
        title: "Where ZeroClaw is the sharper tool",
        description:
          "ZeroClaw is strongest when runtime control is not a nuisance but the actual requirement. Its value comes from efficiency, clear security boundaries, and the ability to run in lean environments.",
        bullets: [
          "Rust-native design supports a tighter security and reliability story.",
          "The platform suits developers comfortable shaping hosting and policy themselves.",
          "Its small footprint is compelling for constrained or cost-sensitive hosting.",
        ],
      },
      {
        title: "Why MaxClaw remains the better product default",
        description:
          "Most teams evaluating AI agents are not looking for a runtime project. They are looking for a reliable agent they can deploy and operate immediately. That is where MaxClaw wins.",
        cards: [
          {
            title: "No binary lifecycle",
            description: "You never have to own build, distribution, or patch cadence.",
          },
          {
            title: "Better fit for non-infra teams",
            description: "MaxClaw makes the agent usable by operators and PMs, not only developers.",
          },
          {
            title: "Built around always-on agent behavior",
            description: "The product story is tuned for continuous, cross-channel use instead of runtime minimalism.",
          },
        ],
      },
      {
        title: "Decision rule",
        description:
          "Choose ZeroClaw if you need a tightly controlled runtime and know why. Choose MaxClaw if you want the cloud product that gets out of your way and lets you focus on the workflow itself.",
      },
    ],
    relatedSlugs: ["claw-ecosystem", "maxclaw-vs-openclaw", "get-started"],
    cta: {
      title: "Need the zero-ops route instead of the lean binary?",
      description:
        "If you do not want to become the operator of your own AI agent runtime, MaxClaw is the clearer default.",
      primaryLabel: "Open launch status",
      primaryHref: "/get-started",
      secondaryLabel: "Compare with OpenClaw",
      secondaryHref: "/maxclaw-vs-openclaw",
    },
  },
  {
    slug: "maxclaw-vs-picoclaw",
    title: "MaxClaw vs PicoClaw: cloud AI agent versus edge and embedded deployment",
    shortTitle: "MaxClaw vs PicoClaw",
    description:
      "Compare MaxClaw with PicoClaw across cloud infrastructure, offline capability, hardware requirements, and where edge-first AI agents beat managed cloud products.",
    eyebrow: "Comparison",
    intro:
      "MaxClaw and PicoClaw live at opposite ends of the ecosystem. MaxClaw assumes abundant cloud infrastructure and a strong model behind the scenes. PicoClaw assumes you might need to run an agent on tiny hardware, in offline conditions, or close to sensors and embedded systems.",
    comparisonTarget: "PicoClaw",
    summary: [
      {
        label: "Deployment posture",
        value: "Cloud vs edge",
        detail: "The real question is whether your agent should live on the network or at the hardware boundary.",
      },
      {
        label: "Capability trade-off",
        value: "Reasoning vs locality",
        detail: "MaxClaw wins on model capability. PicoClaw wins when locality and offline operation are the real requirements.",
      },
      {
        label: "Audience",
        value: "Teams vs builders",
        detail: "PicoClaw makes more sense for embedded and device-side engineers than general productivity teams.",
      },
    ],
    matrix: [
      {
        metric: "Runtime location",
        maxclaw: "Managed cloud service.",
        other: "Runs on constrained hardware and edge devices.",
      },
      {
        metric: "Connectivity assumption",
        maxclaw: "Internet-connected by design.",
        other: "Offline and device-local scenarios are a core part of the story.",
      },
      {
        metric: "Hardware story",
        maxclaw: "No hardware footprint on your side.",
        other: "Designed for RISC-V, ARM64, and embedded environments.",
      },
      {
        metric: "Best fit",
        maxclaw: "Productivity and channel-native cloud agents.",
        other: "IoT, edge automation, and hardware-linked workloads.",
      },
    ],
    sections: [
      {
        title: "Where PicoClaw is legitimately different",
        description:
          "PicoClaw is not just another hosted-agent alternative. It opens a class of use cases that only appear when hardware constraints and offline execution are central to the workflow.",
        bullets: [
          "It targets embedded and low-cost devices instead of general cloud deployment.",
          "Offline or hardware-local execution changes what kinds of automations are possible.",
          "Sensor and device-side integrations can matter more than pure reasoning depth.",
        ],
      },
      {
        title: "Why MaxClaw is still the better default website path",
        description:
          "Most buyers searching for MaxClaw are not looking for an embedded runtime. They are looking for a capable agent that can be live quickly and operate across communications channels without hardware design decisions.",
        cards: [
          {
            title: "No device procurement",
            description: "You can evaluate MaxClaw without choosing boards, hardware classes, or an edge stack.",
          },
          {
            title: "Stronger general-purpose model layer",
            description: "MaxClaw's value stays tied to a larger cloud model optimized for reasoning and tools.",
          },
          {
            title: "Cleaner route for productivity teams",
            description: "The cloud path is easier to explain, trial, and deploy for non-embedded organizations.",
          },
        ],
      },
      {
        title: "Decision rule",
        description:
          "Choose PicoClaw only when offline execution or embedded hardware is the real requirement. Otherwise, MaxClaw is the more practical and broadly useful path.",
      },
    ],
    relatedSlugs: ["claw-ecosystem", "maxclaw-vs-zeroclaw", "get-started"],
    cta: {
      title: "Need the cloud product, not the edge runtime?",
      description:
        "If your job is to deploy a powerful agent quickly, MaxClaw is easier to operationalize than an embedded stack.",
      primaryLabel: "Open launch status",
      primaryHref: "/get-started",
      secondaryLabel: "Read the ecosystem guide",
      secondaryHref: "/claw-ecosystem",
    },
  },
  {
    slug: "minimax-ai",
    title: "MiniMax AI: the company behind MaxClaw",
    shortTitle: "MiniMax AI",
    description:
      "Understand MiniMax's role behind MaxClaw, including its full-stack AI strategy, Lightning Attention, consumer products, and why a cloud-hosted agent fits its product portfolio.",
    eyebrow: "Company profile",
    intro:
      "MiniMax is presented as the full-stack AI company behind MaxClaw. The public story combines proprietary model research, large-scale consumer products, and a cloud platform that turns that model layer into deployable agents.",
    summary: [
      {
        label: "Founded",
        value: "2021",
        detail: "The company story begins with a full-stack rather than model-only strategy.",
      },
      {
        label: "Public narrative",
        value: "Six AI Tigers",
        detail: "MiniMax is consistently positioned as one of China's leading AI companies.",
      },
      {
        label: "Portfolio logic",
        value: "Model + product",
        detail: "MaxClaw sits alongside broader MiniMax products rather than standing alone.",
      },
    ],
    sections: [
      {
        title: "Why MiniMax matters in the MaxClaw story",
        description:
          "MaxClaw's strongest claims only make sense when paired with MiniMax's broader platform narrative. The cloud product depends on the company owning both the model layer and the deployment layer.",
        bullets: [
          "Lightning Attention and long-context research support the MaxClaw memory story.",
          "Consumer-scale products support the claim that MiniMax can ship polished AI interfaces, not only models.",
          "The managed cloud product becomes a distribution layer for MiniMax intelligence beyond its own apps.",
        ],
      },
      {
        title: "The company strategy behind the agent",
        description:
          "MiniMax is publicly framed as building the whole stack: proprietary models, infrastructure, and consumer products. MaxClaw is where that strategy becomes tangible for agentic workflows.",
        cards: [
          {
            title: "Model ownership",
            description: "MiniMax does not rely on a third-party foundation model to power its flagship agent.",
          },
          {
            title: "Product breadth",
            description: "The company profile consistently points to a wider ecosystem rather than a single product bet.",
          },
          {
            title: "Distribution play",
            description: "MaxClaw extends MiniMax into the operational environments users already occupy.",
          },
        ],
      },
      {
        title: "What to take away",
        description:
          "If you are evaluating MaxClaw seriously, you are also evaluating MiniMax's ability to keep investing in the product. The company page matters because it explains why MaxClaw can exist as more than a thin wrapper around someone else's stack.",
      },
    ],
    relatedSlugs: ["minimax-m25-model", "claw-ecosystem", "get-started"],
    cta: {
      title: "Want the model details next?",
      description:
        "The fastest way to understand the product economics is to read the MiniMax M2.5 page after the company profile.",
      primaryLabel: "Explore MiniMax M2.5",
      primaryHref: "/minimax-m25-model",
      secondaryLabel: "Go to launch status",
      secondaryHref: "/get-started",
    },
  },
  {
    slug: "minimax-m25-model",
    title: "MiniMax M2.5: the model powering MaxClaw",
    shortTitle: "MiniMax M2.5 Model",
    description:
      "A practical overview of the MiniMax M2.5 model behind MaxClaw, including MoE architecture, Lightning Attention, long context, inference speed, and why those properties matter for cloud agents.",
    eyebrow: "Model overview",
    intro:
      "MaxClaw is positioned around MiniMax M2.5, a 229B-parameter Mixture-of-Experts model that activates roughly 10B parameters per token. The public story focuses on cost-efficient reasoning, long context, and the economics required for always-on AI agents.",
    summary: [
      {
        label: "Architecture",
        value: "229B MoE",
        detail: "Sparse activation is the core of the model's efficiency narrative.",
      },
      {
        label: "Long context",
        value: "200K-1M",
        detail: "The product story depends on maintaining memory over long-running sessions.",
      },
      {
        label: "Speed",
        value: "Up to 100 tok/s",
        detail: "Responsiveness matters when the agent must feel live inside chat environments.",
      },
    ],
    sections: [
      {
        title: "Why M2.5 fits an agent product",
        description:
          "The MaxClaw story is not just 'a model powers an app.' It is that this specific model shape makes the economics of an always-on cloud agent workable.",
        bullets: [
          "Sparse activation lowers cost per token relative to a dense model of similar scale.",
          "Long context supports memory continuity, research, and multi-step workflows.",
          "Fast inference helps the agent feel responsive in messaging channels.",
        ],
      },
      {
        title: "Lightning Attention in practical terms",
        description:
          "MiniMax's Lightning Attention is important because it connects technical architecture to product experience. Long conversations and memory-heavy sessions are only useful if they remain responsive enough to operate in real time.",
        cards: [
          {
            title: "Linear-scaling story",
            description: "The attention system is framed as the reason long context stays economically tractable.",
          },
          {
            title: "Agent memory payoff",
            description: "Long sessions, large documents, and context accumulation become more realistic product features.",
          },
          {
            title: "Operational economics",
            description: "A lower compute bill is what keeps always-on agents from becoming luxury demos.",
          },
        ],
      },
      {
        title: "What this means for MaxClaw",
        description:
          "The M2.5 page matters because it explains MaxClaw's two strongest claims at once: the agent can stay capable, and it can stay on. That combination is more persuasive than raw benchmark bragging on its own.",
      },
    ],
    relatedSlugs: ["minimax-ai", "claw-ecosystem", "get-started"],
    cta: {
      title: "Ready to translate the model story into product evaluation?",
      description:
        "Move from the architecture page to the launch page when you are ready to evaluate the MaxClaw product surface.",
      primaryLabel: "Open launch status",
      primaryHref: "/get-started",
      secondaryLabel: "Read about MiniMax",
      secondaryHref: "/minimax-ai",
    },
  },
  {
    slug: "get-started",
    title: "MaxClaw launch status",
    shortTitle: "Launch Status",
    description:
      "A placeholder launch page for MaxClaw while the final public deployment path is being finalized. Review the current product story, comparisons, and next reading paths from here.",
    eyebrow: "Launch status",
    intro:
      "This page is the current stand-in for the final public deployment link. The product story, comparison pages, and model narrative are live; the permanent outbound launch path is still being finalized.",
    summary: [
      {
        label: "Status",
        value: "Placeholder",
        detail: "The CTA destination is intentionally internal until the final launch flow is ready.",
      },
      {
        label: "What is ready",
        value: "Site narrative",
        detail: "Homepage, comparison pages, and research pages are already structured and searchable.",
      },
      {
        label: "Suggested next step",
        value: "Read before you deploy",
        detail: "Use this page as a routing hub until the external launch path is connected.",
      },
    ],
    sections: [
      {
        title: "What this placeholder is doing",
        description:
          "Instead of sending traffic to an incomplete or changing external flow, the current CTA route keeps visitors inside the site and funnels them into the most useful reading paths.",
        bullets: [
          "It preserves a working CTA across the homepage and child pages.",
          "It gives you a safe default while production deployment details are finalized.",
          "It keeps internal links and browser tests stable during site buildout.",
        ],
      },
      {
        title: "Best pages to visit next",
        description:
          "If you are evaluating MaxClaw right now, the most useful follow-up pages are the ones that answer product fit before launch mechanics.",
        cards: [
          {
            title: "Need the big picture?",
            description: "Read the Claw Ecosystem page to see where MaxClaw fits relative to the whole category.",
          },
          {
            title: "Need a direct comparison?",
            description: "Use the comparison pages if you are deciding between MaxClaw and a specific alternative.",
          },
          {
            title: "Need the technical case?",
            description: "Read the MiniMax M2.5 page if model architecture and economics drive your choice.",
          },
        ],
      },
      {
        title: "What happens later",
        description:
          "Once the production launch path is connected, this page can be replaced by the real deployment destination without changing the surrounding site structure or calls to action.",
      },
    ],
    relatedSlugs: ["claw-ecosystem", "maxclaw-vs-openclaw", "minimax-m25-model"],
    cta: {
      title: "Keep exploring while the launch endpoint is finalized",
      description:
        "The site already gives you the complete positioning story, even before the final outbound deployment CTA is wired in.",
      primaryLabel: "Return home",
      primaryHref: "/",
      secondaryLabel: "Open ecosystem guide",
      secondaryHref: "/claw-ecosystem",
    },
  },
];

export const pagesBySlug: Record<string, ContentPage> = Object.fromEntries(
  pages.map((page) => [page.slug, page]),
) as Record<string, ContentPage>;

export const pageList = pages;

export const footerGroups = [
  {
    title: "Overview",
    links: [
      { href: "/", label: "Homepage" },
      { href: "/get-started", label: "Launch Status" },
      { href: "/claw-ecosystem", label: "Claw Ecosystem" },
    ],
  },
  {
    title: "Comparisons",
    links: comparisonLinks,
  },
  {
    title: "Research",
    links: researchLinks,
  },
];
