import TestimonialCard from "@/components/SuccessStories/TestimonialCard";
import stories from "@/components/SuccessStories/TestomnialsData";

export default function SuccessStoriesPage() {
  return (
    <div className="bg-gray-900 px-auto p-8 pt-32 text-white">
      <div className="container ps-6">
        <h1 className="text-3xl font-bold mb-6">Success Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {stories.map((story) => (
            <TestimonialCard key={story.slug} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
