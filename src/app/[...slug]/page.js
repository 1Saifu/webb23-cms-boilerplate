import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";
import { StoryblokCMS } from "@/utils/cms";

//Generates static paths for all stories
//Nextjs will generate a static page for each story
export async function generateStaticParams() {
  try {
    const paths = await StoryblokCMS.getStaticPaths();
    return paths;
  } catch (error) {
    console.log(error);
  }
}

// Generates static meta props for each story
export async function generateMetadata({ params }) {
  const slug = params.slug.join("/");
  console.log("Generating metadata for slug:", slug); // Verify slug
  try {
    const metadata = await StoryblokCMS.generateMetaFromStory(slug);
    console.log("Generated Metadata:", metadata); // Verify metadata
    return metadata;
  } catch (error) {
    console.error("Error generating metadata:", error); // Log errors
    return { title: "Default Title", description: "Default Description" }; // Fallback
  }
}



//Params are passed to the CMSPage component and used to fetch the story
//This function is called for each item in the paths array returned from generateStaticParams func
export default async function CMSPage({ params }) {
  try {
    const currentStory = await StoryblokCMS.getStory(params);
    console.log("Current Story:", currentStory); 
    if (!currentStory) throw new Error();

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    notFound();
  }
}

//Force dynamic rendering in development and Visual editor
export const dynamic = StoryblokCMS.isDevelopment
  ? "force-dynamic"
  : "force-static";
