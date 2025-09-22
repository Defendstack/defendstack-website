import React from "react";
import Link from "next/link";

interface Story {
  slug: string;
  title: string;
  summary: string;
  author: string;
  content?: string;
}

interface TestimonialCardProps {
  story: Story;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ story }) => {
  return (
    <Link
      href={`/success-stories/${story.slug}`}
      className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition text-left block w-full min-h-[220px] max-h-[260px] flex flex-col justify-between"
    >
      <div>
        <h2 className="text-xl font-semibold mb-2 text-white line-clamp-2">{story.title}</h2>
        <p className="mb-4 text-gray-300 line-clamp-3">{story.summary}</p>
      </div>
      <span className="text-gray-400 text-sm">By {story.author}</span>
    </Link>
  );
};

export default TestimonialCard;
