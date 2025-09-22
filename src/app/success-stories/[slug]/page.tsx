import { notFound } from "next/navigation";
import SuccessStoryDetail from "@/components/SuccessStories/SuccessStoryDetail";
import stories from "@/components/SuccessStories/TestomnialsData";

export default async function SuccessStoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) return notFound();

  return <SuccessStoryDetail {...story} />;
}