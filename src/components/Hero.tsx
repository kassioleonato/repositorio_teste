import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { cta } from "utils/cta";
import content from "../../content";

export const Hero = () => {
  return (
    <Box bg="gray.800" as="section" minH="90vh" position="relative">
      <Box py="32" position="relative" zIndex={1} pt={80}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl" id="content">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              {content.hero.title}
            </Heading>
            <Text fontSize={{ md: "2xl" }} mt="4" maxW="lg">
              {content.hero.titleHighlighted}
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
            >
              <Button
                bgColor={content.colors.primary}
                color={'white'}
                rounded="full"
                onClick={cta}
              >
                Marque a sua consulta
              </Button>
              <Button
                bg="transparent"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                px="8"
                fontSize="md"
                rounded="full"
              >
                <Link href="#about">Veja meu trabalho</Link>
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="/hero.jpg"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition={{base:"55% 25%",md:"25% 55%"}}
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.400" />
        </Box>
      </Flex>
    </Box>
  );
};
