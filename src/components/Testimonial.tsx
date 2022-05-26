import { Box, BoxProps, Circle, Flex, HStack, Text, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import { Quotee } from './Quotee'
import { QuoteIcon } from './QuoteIcon'
import content from '../../content'

const MotionBox = motion<BoxProps>(Box)

export const Testimonial = () => {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0)

  const { testimonials } = content

  const testimonial = React.useMemo(() => {
    if (!testimonials) return undefined
    return testimonials[testimonialIndex]
  }, [testimonialIndex, testimonials])

  if (!testimonials?.length) return null

  return (
  <MotionBox as="section" whileInView={{ opacity: [0, 1], scale: [0.80, 1] }} id="testimonials">
    <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color='gray.400'
          fontSize={{ base: '3xl', md: '6xl' }}
        />
        <Text fontSize={{ base: 'xl', md: 'xl' }} fontWeight="medium" mt="6">
          &ldquo;{testimonial?.content}&rdquo;
        </Text>
        <Quotee
            name={testimonial?.clientName || ''}
            jobTitle={testimonial?.clientDescription || ''}
            mt="8"
            />
      </Flex>
      <HStack justify="center" spacing="4" mt="8" color='gray.400'>
        {testimonials.map((_, index) => {
          const isActive = index === testimonialIndex
          return (
          <Circle
            key={`cirecle-${index}`}
            size={isActive ? "3" : "2"}
            bg={isActive ? content.colors.primary : 'gray.300'}
            onClick={() => setTestimonialIndex(index)}
            _hover={{
              cursor: 'pointer',
            }}
          />
        )})}
      </HStack>
      {/* <HStack justify="center" spacing="4" mt="16" color='yellow.400' textDecoration="underline" textUnderlineOffset="4px">
        <Link target="_blank" href="https://www.google.com/maps/place/Reumatologista+em+BH-+Dra.+Ana+J%C3%BAlia+Furbino+Dias+Bicalho/@-19.9350741,-43.9278547,17z/data=!4m7!3m6!1s0xa6997bafe33061:0x1e1d10b0e92ea458!8m2!3d-19.9352409!4d-43.9257074!9m1!1b1">
          Dar o meu feedback
        </Link>
      </HStack> */}
    </Box>
  </MotionBox>
)
}