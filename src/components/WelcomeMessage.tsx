import {
    Box,
  BoxProps,
  Button,
  Container,
  Heading,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { cta } from "utils/cta";
import content from "../../content";

const MotionBox = motion<BoxProps>(Box);
const MotionStack = motion<StackProps>(Stack);

export default function WelcomeMessage() {
  return (
    <MotionBox as="section" bg={content.colors.primaryDark} id="intro">
      <Container py={{ base: "3rem", md: "3.5rem" }} maxW="3xl">
        <MotionStack
          spacing={{ base: "6", md: "8" }}
          whileInView={{ translateX: [-50, 0], opacity: [0, 1] }}
        >
          <Stack spacing={{ base: "3", md: "6" }} align="center">
            <Heading
              size={useBreakpointValue({ base: "lg", md: "xl" })}
              color={"#FFFFFF"}
            >
              {content.welcomeMessage.title}
            </Heading>
            <Text
              color={"#FFFFFF"}
              maxW="3xl"
              textAlign="center"
              fontSize="md"
              whiteSpace="break-spaces"
            >
              {content.welcomeMessage.content}
            </Text>
          </Stack>

          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
          >
            <Button
              bgColor={content.colors.primary}
              color={'white'}
              rounded="full"
              size="lg"
              onClick={cta}
            >
              Marque a sua consulta
            </Button>
          </Stack>
        </MotionStack>
      </Container>
    </MotionBox>
  );
}
