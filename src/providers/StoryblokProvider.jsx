"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ImageWithText from "@/components/imagewithtext/ImageWithText";
import Grid from "@/components/grid/Grid";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";


const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  header: Header,
  hero: Hero,
  imagewithtext: ImageWithText,
  grid: Grid,
  contact: Contact,
  about: About,
  footer: Footer,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

console.log("Storyblok components:", components);

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}