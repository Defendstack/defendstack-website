import { notFound } from "next/navigation";
import SuccessStoryDetail from "@/components/SuccessStories/SuccessStoryDetail";

// Example story data for MPL
const stories = [
  {
    slug: "mpl-tackles-security-debt",
  title: "How MPL Tackled Security Debt with DefendStack",
  subtitle: "Cutting security debt and empowering developers at scale",
  author: "MPL Security & Engineering Team",
  company: {
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Mobile_Premier_League_logo.png",
    name: "Mobile Premier League (MPL)",
    industry: "Gaming & Esports",
    website: "https://mpl.live",
  },
  quote: "DefendStack enabled us to shift security left—without slowing down our product teams.",
  quoteAuthor: "VP Engineering, MPL",
  challenges: [
    {
      title: "No dedicated budget for security tools",
      body: "As a growing company, we had to be razor-focused on product and growth. Security was important, but allocating a large budget for expensive tools wasn’t realistic at the time.",
    },
    {
      title: "No clear remediation strategy",
      body: "We were catching vulnerabilities, but didn’t have a defined playbook for fixing them. Issues would pile up in tickets without clear owners or priorities.",
    },
    {
      title: "Hard to patch existing vulnerabilities",
      body: "With multiple games, legacy code, and third-party integrations, patching wasn’t straightforward. Fixes often risked breaking other components, so remediation kept getting delayed.",
    },
  ],
  solution: [
    {
      title: "Budget-friendly & open source first",
      body: "DefendStack’s open-source foundation allowed MPL to adopt security tooling without heavy upfront licensing costs.",
    },
    {
      title: "Remediation strategies built-in",
      body: "DefendStack provided custom remediation strategies directly in pull requests. This gave developers clear next steps and reduced friction between security and engineering.",
    },
    {
      title: "Faster patching workflows",
      body: "With automated scanning in CI/CD and context-aware prioritization, our teams could focus on critical, exploitable vulnerabilities first. This helped us patch faster without slowing down feature delivery.",
    },
    {
      title: "Shift-left without slowing devs",
      body: "Developers didn’t have to context-switch. DefendStack integrated directly into existing pipelines, ensuring security checks ran quietly in the background — only surfacing issues when action was needed.",
    },
  ],
  outcome: [
    "Cut down mean-time-to-remediate (MTTR) from weeks to days.",
    "Gain full visibility into vulnerabilities across assets and APIs.",
    "Build a repeatable security playbook that scaled with development speed.",
    "Adopt a DevSecOps culture without slowing product velocity.",
  ],
  finalThoughts:
    "Security debt can feel overwhelming when budgets are tight and remediation paths are unclear. MPL’s experience shows that with the right partner, it’s possible to shift security left, reduce risk, and empower developers, all without burning massive budgets. At DefendStack, we’re proud to support teams like MPL who are building for scale while keeping security at the core.",
},
  // ... other stories
];

export default function SuccessStoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) return notFound();

  return <SuccessStoryDetail {...story} />;
}