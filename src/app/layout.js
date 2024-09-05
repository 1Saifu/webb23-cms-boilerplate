import Layout from "@/components/layout";
import "./globals.css";
import StoryblokProvider from "@/providers/StoryblokProvider";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Header from "@/components/header/Header";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({ children }) {
  const currentConfig = await StoryblokCMS.getConfig();

  console.log("Current Config:", currentConfig);

  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <Header config={currentConfig} />
          <Layout config={currentConfig}>{children}</Layout>
        </body>
      </html>
    </StoryblokProvider>
  );
}
