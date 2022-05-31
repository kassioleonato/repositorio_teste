import { Box, BoxProps, Button, Container, Flex, FlexProps, Heading, Img, Stack, StackProps, Text, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import { cta, ctaSecondary } from 'utils/cta'
import content from '../../content'

const MotionStack = motion<StackProps>(Stack)

type CtaProps = {
  title: string
  description: string
  isShowCtaButton?: boolean
  backgroundColor?: string
  textColor?: string
  idagende:string
}

const MotionFlex = motion<FlexProps>(Flex);

export const Cta: React.FC<CtaProps> = ({ title, description, isShowCtaButton = true, backgroundColor = 'white', textColor = 'gray.600',idagende }) => (
  <MotionFlex
    minH={"900px"}
    bg="gray.50"
    id="contact"
    alignItems={"center"}
    justifyContent={"center"}
    position={"relative"}
    zIndex="1"
    mb={16}
  >
      <Flex w={"full"} h={"full"} position={"absolute"}>
      <Img
        w={"full"}
        h={"full"}
        objectFit={"cover"}
        src="./ctaphoto.jpg"
        objectPosition={{base:"75% 40%", md:"25% 25%"}}
      />
       <Box position="absolute" w="full" h="full" bg="blackAlpha.500" />
    </Flex>

    <Flex
      py={{ base: "16", md: "24" }}
      position={"absolute"}
      alignItems={"center"}
      justifyContent={"center"}
      alignSelf={"center"}
    >
      <MotionStack
        spacing={{ base: "8", md: "10" }}
        whileInView={{ translateX: [-50, 0], opacity: [0, 1] }}
      >
        <Stack spacing={{ base: "4", md: "5" }} align="center">
          <Heading color="whiteAlpha.900" size={useBreakpointValue({ base: "lg", md: "xl" })}>
            {content.cta.title}
          </Heading>
          <Text color="whiteAlpha.900" maxW="2xl" textAlign="center" fontSize="lg">{description}</Text>
        </Stack>
        <Stack
          spacing="3"
          direction={{ base: "column", sm: "row" }}
          justify="center"
        >
          <Button
            colorScheme={content.colors.scheme}
            rounded="full"
            size="lg"
            onClick={cta}
          >
            Marque a sua consulta
          </Button>
          <Button
            variant="ghost"
            size="lg"
            rounded="full"
            color={'black'}
            backgroundColor={'white'}
            onClick={ctaSecondary}
          >
            Me siga nas redes sociais
          </Button>
        </Stack>
      </MotionStack>
    </Flex>
  </MotionFlex>
)