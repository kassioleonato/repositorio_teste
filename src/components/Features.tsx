import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import content from "../../content";
import { Feature } from "./Feature";

export const Features = () => {
  const { features } = content;

  return (
    <Box
      as="section"
      maxW={'1600px'}
      mx="auto"
      py="100"
      px={{ base: "6", md: "8" }}
      mt={4}
      id="services"
      alignItems="center"
      justifyItems={"center"}
    >
      <Heading
        mb={24}
        textAlign="center"
        size="2xl"
        color={content.colors.primary}
      >
        Atuação
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2, xl: 3 }}
        spacingX="10"
        spacingY={{ base: "8", md: "14" }}
        width="100%"
        alignItems="center"
        justifyItems={"center"}

      >
        {features.items.map((item, index) => (
          <Feature
            title={item.title}
            key={`feat-${index}`}
            image={item.imagesrc}
          >
            {item.content}
          </Feature>
        ))}
      </SimpleGrid>
    </Box>
  );
};