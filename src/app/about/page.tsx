export default function About() {
  return (
    <main className="flex p-10 flex-col items-start justify-center min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-left text-primary drop-shadow-sm">
        About Us
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-4 text-left">
        After becoming immensely frustrated and experiencing all the emotions
        that come with the struggles of implementing application security into
        our organization's SDLC, we finally reached a breaking point.
      </p>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-4 text-left">
        That's when we decided,{" "}
        <span className="font-semibold text-primary">"That's it!"</span> And so,
        we started{" "}
        <span className="font-semibold text-primary">DefendStack Project</span>{" "}
        because we believe in:
      </p>
      <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-200 mb-4 max-w-md">
        <li>Open-source Transparency</li>
        <li>Community</li>
        <li>Mission-driven Security</li>
      </ul>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed text-left">
        <span className="font-semibold text-primary">Mission Statement:</span>{" "}
        With breaches originating in the wild, application security shouldn't be
        a luxury available only to enterprises and companies with big budgets.
        Instead, startups, SMBs, MSMEs, and individual projects should
        prioritize application security.
        <br />
        <span className="font-semibold text-primary">
          Hence, DefendStack Project!
        </span>
      </p>
    </main>
  );
}