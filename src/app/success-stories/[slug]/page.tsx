import { notFound } from "next/navigation";
import SuccessStoryDetail from "@/components/SuccessStories/SuccessStoryDetail";
import stories from "@/components/SuccessStories/TestomnialsData";

export default function SuccessStoryPage({ params }: any) {
  const slug = params.slug;
  const found = stories.find((s) => s.slug === slug);
  if (!found) return notFound();
  const story = {
    ...found,
    description: found.summary,
  };
  return <SuccessStoryDetail {...story} />;
}
