import { Box, BoxProps, Button, Container, Heading, Stack, StackProps, Text, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import { cta, ctaSecondary } from 'utils/cta'
import content from '../../content'

const MotionBox = motion<BoxProps>(Box)
const MotionStack = motion<StackProps>(Stack)

type CtaProps = {
  title: string
  description: string
  isShowCtaButton?: boolean
  backgroundColor?: string
  textColor?: string
  idagende:string
}

export const Cta: React.FC<CtaProps> = ({ title, description, isShowCtaButton = true, backgroundColor = 'white', textColor = 'gray.600',idagende }) => (
  <MotionBox
    as="section"
    bg={backgroundColor}
    id="intro"
  >
    <Container py={{ base: '16', md: '24' }} maxW="3xl">
      <MotionStack spacing={{ base: '8', md: '10' }} whileInView={{ translateX: [-50, 0], opacity: [0, 1] }}>
        <Stack spacing={{ base: '6', md: '10' }} align="center">
          <Heading size={useBreakpointValue({ base: 'lg', md: 'xl' })} color={textColor}>
            {title}
          </Heading>
          <Text color={textColor} maxW="3xl" textAlign="center" fontSize="md" whiteSpace="break-spaces">
            {description}
          </Text>
        </Stack>
        {isShowCtaButton && (
          <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center" id={idagende}>
            <Button
              colorScheme={content.colors.scheme}
              rounded="full"
              size="lg"
              onClick={cta}
            >
              Marque a sua consulta
            </Button>
          </Stack>
        )}
      </MotionStack>
    </Container>
  </MotionBox>
)