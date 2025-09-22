import React from "react";
import logo from "./mpl_logo.png";
import Image from "next/image";

interface CompanyInfo {
  logoUrl: string;
  name: string;
  industry?: string;
  website?: string;
}

interface SectionItem {
  title: string;
  body: string;
}

interface SuccessStoryDetailProps {
  title: string;
  subtitle?: string;
  author: string;
  company: CompanyInfo;
  quote?: string;
  quoteAuthor?: string;
  challenges: SectionItem[];
  solution: SectionItem[];
  outcome: string[];
  finalThoughts: string;
}

const CardSection = ({
  title,
  items,
}: {
  title: string;
  items: SectionItem[];
}) => (
  <div className="my-10">
    <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-gray-800 rounded-xl p-6 shadow transition hover:shadow-md"
        >
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-300">{item.body}</p>
        </div>
      ))}
    </div>
  </div>
);

const OutcomeSection = ({ outcomes }: { outcomes: string[] }) => (
  <div className="my-10">
    <h2 className="text-2xl font-bold mb-4 text-primary">The Outcome</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-300">
      {outcomes.map((outcome, i) => (
        <li key={i}>{outcome}</li>
      ))}
    </ul>
  </div>
);

const SuccessStoryDetail: React.FC<SuccessStoryDetailProps> = ({
  title,
  subtitle,
  author,
  company,
  quote,
  quoteAuthor,
  challenges,
  solution,
  outcome,
  finalThoughts,
}) => (
  <div className="bg-gray-900 min-h-screen pb-16">
    <div className="max-w-5xl mx-auto pt-32 px-4 text-center">
      <Image
        src={company.logoUrl}
        alt={`${company.name} logo`}
        width={120}
        height={80}
        className="mx-auto mb-6 h-20 object-contain"
      />
      <h1 className="text-4xl font-extrabold text-primary mb-3">{title}</h1>
      {subtitle && <div className="text-xl text-gray-400 mb-4">{subtitle}</div>}
      <div className="flex flex-col items-center gap-2 mb-10">
        <span className="text-base text-gray-400">{author}</span>
        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            {company.name}
          </a>
        )}
        {company.industry && (
          <span className="text-sm text-gray-400">{company.industry}</span>
        )}
      </div>
    </div>

    {quote && (
      <div className="max-w-2xl mx-auto mb-8 px-4">
        <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-gray-200 mb-2">
          “{quote}”
        </blockquote>
        {quoteAuthor && (
          <div className="text-primary text-right font-medium">
            {quoteAuthor}
          </div>
        )}
      </div>
    )}

    <div className="max-w-5xl mx-auto rounded-2xl shadow-lg p-10">
      <CardSection title="The Challenges We Faced" items={challenges} />
      <CardSection title="How DefendStack Helped" items={solution} />
      <OutcomeSection outcomes={outcome} />
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-4 text-primary">Final Thoughts</h2>
        <p className="text-gray-300">{finalThoughts}</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto mt-10 px-4">
      <a
        href="/success-stories"
        className="inline-block text-primary font-semibold hover:underline transition"
      >
        ← Back to all stories
      </a>
    </div>
  </div>
);

export default SuccessStoryDetail;
