import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, BoxProps, Heading } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import content from '../../content'

const MotionBox = motion<BoxProps>(Box)

export const FAQ = () => (
  <MotionBox as="section" whileInView={{ opacity: [0, 1] }} bg={content.colors.primaryDark} py={16} id="faq">
    <Heading mb={24} textAlign="center" size="2xl" color="white">Perguntas Frequentes</Heading>

    <Box maxW="5xl" mx="auto" px={{ base: '2', md: '4' }} pt="6" pb="16">
      <Accordion allowMultiple>
        {content.faq.items.map((item, index) => (
          <AccordionItem key={`accord-item-${index}`}>
            <h2>
              <AccordionButton >
                <Box flex='1' textAlign='left' fontWeight="bold" color="white">
                  {item.question}
                </Box>
                <AccordionIcon color={'white'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontWeight="light" whiteSpace="break-spaces" color="white">
              {item.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  </MotionBox>
)