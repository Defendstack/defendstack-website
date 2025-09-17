import Link from "next/link";

// Sample data; in real use, fetch from API or file
const stories = [
  {
    slug: "mpl-tackles-security-debt",
    title: "How MPL Tackled Security Debt with DefendStack",
    summary: "How Mobile Premier League (MPL), a leading mobile gaming platform, reduced security debt and empowered developers using DefendStack.",
    author: "MPL Security & Engineering Team",
    content: `
At Mobile Premier League (MPL), one of the world’s leading mobile gaming platforms, security has always been a top priority. With millions of users engaging daily, safeguarding sensitive data and ensuring platform reliability is non-negotiable.
But like many fast-scaling companies, MPL faced real challenges on their security journey.

**The Challenges We Faced**
- No dedicated budget for security tools: “As a growing company, we had to be razor-focused on product and growth. Security was important, but allocating a large budget for expensive tools wasn’t realistic at the time.”
- No clear remediation strategy: “We were catching vulnerabilities, but didn’t have a defined playbook for fixing them. Issues would pile up in tickets without clear owners or priorities.”
- Hard to patch existing vulnerabilities: “With multiple games, legacy code, and third-party integrations, patching wasn’t straightforward. Fixes often risked breaking other components, so remediation kept getting delayed.”

These challenges made it difficult to maintain a proactive security posture. The security and engineering teams often felt they were firefighting instead of preventing issues.

**How DefendStack Helped**
- **Budget-friendly & open source first:** DefendStack’s open-source foundation allowed MPL to adopt security tooling without heavy upfront licensing costs. 
- **Remediation strategies built-in:** Instead of just surfacing vulnerabilities, DefendStack provided custom remediation strategies directly in pull requests. This gave developers clear next steps and reduced friction between security and engineering.
- **Faster patching workflows:** With automated scanning in CI/CD and context-aware prioritization, our teams could focus on critical, exploitable vulnerabilities first. This helped us patch faster without slowing down feature delivery.
- **Shift-left without slowing devs:** Developers didn’t have to context-switch. DefendStack integrated directly into existing pipelines, ensuring security checks ran quietly in the background — only surfacing issues when action was needed.

**The Outcome**
- Cut down mean-time-to-remediate (MTTR) from weeks to days.
- Gain full visibility into vulnerabilities across assets and APIs.
- Build a repeatable security playbook that scaled with development speed.
- Adopt a DevSecOps culture without slowing product velocity.

**Final Thoughts**
Security debt can feel overwhelming when budgets are tight and remediation paths are unclear. MPL’s experience shows that with the right partner, it’s possible to shift security left, reduce risk, and empower developers, all without burning massive budgets.
At DefendStack, we’re proud to support teams like MPL who are building for scale while keeping security at the core.
    `,
  },
  {
    slug: "startupx-secures-its-pipeline",
    title: "StartupX Secures Its Pipeline",
    summary: "StartupX reduced security incidents to zero and scaled confidently.",
    author: "John Smith, Founder",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="container mx-auto p-8 pt-32">
      <h1 className="text-3xl font-bold mb-6">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/success-stories/${story.slug}`}
            className="bg-white dark:bg-darkmode rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
            <p className="mb-4">{story.summary}</p>
            <span className="text-gray-600 dark:text-gray-400 text-sm">{story.author}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}