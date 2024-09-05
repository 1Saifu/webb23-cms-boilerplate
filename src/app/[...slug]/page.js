import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";
import { StoryblokCMS } from "@/utils/cms";

//Generates static paths for all stories
//Nextjs will generate a static page for each story
export async function generateStaticParams() {
  try {
    const paths = await StoryblokCMS.getStaticPaths();
    console.log('Generated paths:', paths);
    return paths.map(path => ({ params: { slug: path.slug } }));
  } catch (error) {
    console.log('Error generating static params:', error);
    return [];
  }
}

// Generates static meta props for each story
export async function generateMetadata({ params }) {
  const slug = params.slug.join("/");
  console.log("Generating metadata for slug:", slug); 
  try {
    const metadata = await StoryblokCMS.generateMetaFromStory(slug);
    console.log("Generated Metadata:", metadata); 
    return metadata;
  } catch (error) {
    console.error("Error generating metadata:", error); 
    return { title: "Default Title", description: "Default Description" };
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
export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";
