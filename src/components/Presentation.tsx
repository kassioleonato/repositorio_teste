import {
  Box,
  Button,
  Flex,
  Heading,
  HeadingProps,
  Img,
  Stack,
  StackProps,
  Text,
  TextProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { cta } from "utils/cta";
import content from "../../content";

const MotionHeading = motion<HeadingProps>(Heading);
const MotionText = motion<TextProps>(Text);
const MotionStack = motion<StackProps>(Stack);

export const Presentation = () => {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative" id="about">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <MotionHeading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              whileInView={{ x: [-24, 0], opacity: [0, 1] }}
              // @ts-ignore
              transition={{ duration: 1 }}
            >
              {content.presentation.title}
            </MotionHeading>
            <MotionText
              fontSize={{ md: "lg" }}
              color="whiteAlpha.800"
              mt="9"
              maxW="lg"
              whiteSpace="break-spaces"
              whileInView={{ x: [-24, 0], opacity: [0, 1] }}
              // @ts-ignore
              transition={{ duration: 1, duration: 0.4 }}
            >
              {content.presentation.content}
            </MotionText>
            <MotionStack
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
              whileInView={{ x: [-24, 0], opacity: [0, 1] }}
              // @ts-ignore
              transition={{ duration: 1, duration: 0.8 }}
            >
              <Button
                as="a"
                href="#"
                bgColor={content.colors.primary}
                color="white"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
                onClick={cta}
              >
                Marcar consulta
              </Button>
            </MotionStack>
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
            src="/pres.jpg"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition={useBreakpointValue({
              base: "45% 25%",
              md: "center center",
            })}
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.400" />
        </Box>
      </Flex>
    </Box>
  );
};
