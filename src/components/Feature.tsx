import {
  Box,
  BoxProps,
  Flex,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import content from "../../content";

export interface FeatureProps {
  title: string;
  children: React.ReactNode;
  image: string;
}

const MotionBox = motion<BoxProps>(Box);

export const Feature = (props: FeatureProps) => {
  const { children } = props;
  const [isHovered, setIsHovered] = useState(false);

  const transitionTimingInSeconds = 0.7;

  return (
    <>
      <MotionBox
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        maxH="350px"
        maxW={"350px"}
        h="350px"
        w={"350px"}
        borderRadius="8px"
        padding="15px"
        boxShadow="2px 2px 8px rgb(0 0 0 / 10%)"
        alignItems="center"
        bgColor={content.colors.primary}
        textAlign="center"
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box position="relative" zIndex={1}>
          <Stack spacing="1" alignItems="center" display="flex">
            <Text
              fontSize={"1.3rem"}
              fontWeight={"bold"}
              color={"white"}
              transition={`all ${transitionTimingInSeconds}s ease-in-out`}
            >
              {props.title}
            </Text>
            <Box
              color="black"
              whiteSpace="break-spaces"
              fontSize={14}
              opacity={0.8}
              py={useBreakpointValue({ base: "3" })}
            >
              <Text
                fontSize={"1.1rem"}
                fontWeight={"bold"}
                color={!isHovered ? "transparent" : "white"}
                transition={`all ${transitionTimingInSeconds}s ease-in-out`}
              >
                {children}
              </Text>
            </Box>
          </Stack>
        </Box>

        <Flex
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
              w="full"
              h="full"
              position="absolute"
              objectFit="cover"
              src={props.image}
              transition={`all ${transitionTimingInSeconds}s ease-in-out`}
              css={isHovered ? { transform: "scale(1.05)" } : {}}
            />
            {!isHovered ? (
              <Box
                position="absolute"
                w="full"
                h="full"
                bgColor={"blackAlpha.300"}
              />
            ) : (
              <Box
                position="absolute"
                w="full"
                h="full"
                bgColor={"blackAlpha.700"}
              />
            )}
          </Box>
        </Flex>
      </MotionBox>
    </>
  );
};