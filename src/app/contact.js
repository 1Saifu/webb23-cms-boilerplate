import { StoryblokCMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("contact");
}

export default async function ContactPage() {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["contact"] });
    if (!currentStory) throw new Error();

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    console.error('Error fetching story:', error);
    notFound();
  }
}
export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";
