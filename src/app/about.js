import { StoryblokCMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("about");
}

export default async function ContactPage() {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["about"] });
    console.log('Current Story:', currentStory);
    if (!currentStory) throw new Error();


    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    console.error('Error fetching story:', error); 
    notFound();
  }
}

export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";
