const stories = [
  {
    slug: "mpl-tackles-security-debt",
    title: "How MPL Tackled Security Debt with DefendStack",
    summary:
      "How Mobile Premier League (MPL), a leading mobile gaming platform, reduced security debt and empowered developers using DefendStack.",
    author: "MPL Security & Engineering Team",
    company: {
      logoUrl:
        "https://www.mpl.live/_next/image?url=https%3A%2F%2Fcms-origin.mpl.live%2Fcms-latest-env%2Fimages%2FMPL_logo_13457e45ff.webp&w=256&q=75",
      name: "Mobile Premier League (MPL)",
      industry: "Gaming & Esports",
      website: "https://mpl.live",
    },
    quote:
      "DefendStack enabled us to shift security left—without slowing down our product teams.",
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
    content: `
At Mobile Premier League (MPL), one of the world’s leading mobile gaming platforms, security has always been a top priority. With millions of users engaging daily, safeguarding sensitive data and ensuring platform reliability is non-negotiable.
But like many fast-scaling companies, MPL faced real challenges on their security journey.

**The Challenges We Faced**
- No dedicated budget for security tools
- No clear remediation strategy
- Hard to patch existing vulnerabilities

**How DefendStack Helped**
- Budget-friendly & open source first
- Remediation strategies built-in
- Faster patching workflows
- Shift-left without slowing devs

**The Outcome**
- Cut down MTTR from weeks to days
- Gain full visibility across assets and APIs
- Build a repeatable playbook
- Adopt DevSecOps without slowing velocity

**Final Thoughts**
Security debt can feel overwhelming when budgets are tight and remediation paths are unclear. MPL’s experience shows that with the right partner, it’s possible to shift security left, reduce risk, and empower developers, all without burning massive budgets.
    `,
  },
  //   {
  //     slug: "startupx-secures-its-pipeline",
  //     title: "StartupX Secures Its Pipeline",
  //     summary:
  //       "StartupX reduced security incidents to zero and scaled confidently.",
  //     author: "John Smith, Founder",
  //     company: {
  //       logoUrl: "",
  //       name: "StartupX",
  //       industry: "SaaS",
  //       website: "",
  //     },
  //     quote: "",
  //     quoteAuthor: "",
  //     challenges: [],
  //     solution: [],
  //     outcome: [],
  //     finalThoughts: "",
  //     content: "",
  //   },

];

export default stories;
