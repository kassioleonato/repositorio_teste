import { Img } from "@chakra-ui/react";
import Choices from "components/Choices";
import { Cta } from "components/Cta";
import { FAQ } from "components/FAQ";
import { Features } from "components/Features";
import { Footer } from "components/Footer";
import { Hero } from "components/Hero";
import { Navbar } from "components/Navbar";
import { Presentation } from "components/Presentation";
import { Testimonial } from "components/Testimonial";
import WelcomeMessage from "components/WelcomeMessage";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import content from "../../content";

const MotionAnchor = motion.a;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content={content.head.metaDescription} />
        <link rel="icon" href={"/favicon.png"} />
        <title>{content.head.title}</title>

        <meta property="og:site_name" content={content.head.title} />
        <meta property="og:title" content={content.head.title} />
        <meta
          property="og:description"
          content={content.head.metaDescription}
        />
        <meta property="og:image" itemProp="image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Head>

      <Navbar />

      <Hero />

      <WelcomeMessage />

      <Features />

      <Presentation />

      <Choices />

      <FAQ />

      <Testimonial />

      <Cta title={content.cta.title} description={content.cta.content} idagende={"cel"} />

      {/* <Partner /> */}

      <Footer />

      <MotionAnchor
        whileInView={{
          x: [24, 0],
          y: [24, 0],
          opacity: [0, 1],
          scale: [0.8, 1],
        }}
        // @ts-ignore
        transition={{ duration: 1, delay: 3 }}
        target="_blank"
        href={`https://wa.me/${content.social.whatsAppNumber}`}
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 999,
        }}
      >
        <Img src={"./whatsapp-icon.png"} w={24} />
      </MotionAnchor>
    </div>
  );
};

export default Home;
