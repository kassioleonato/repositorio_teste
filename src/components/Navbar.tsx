import {
  Box,
  BoxProps,
  Button,
  Flex,
  HStack,
  Icon,
  Img,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import useScrollPosition from 'hooks/useScollPosition'
import * as React from 'react'
import {cta} from 'utils/cta'
import content from '../../content'
import {MobileNav} from './MobileNav'
import {NavLink} from './NavLink'
import {BsInstagram} from 'react-icons/bs'

const MotionBox = motion<BoxProps>(Box);

export const Navbar = () => {
  const hasTestimonial = content.testimonials
    ? content.testimonials.length > 0
    : false;

  const scrollPosition = useScrollPosition();

  return (
    <MotionBox
      whileInView={{ y: [-40, 0] }}
      // @ts-ignore
      transition={{ duration: 0.3 }}
      bg="transparent"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={3}
      opacity={scrollPosition < 80 ? 1 : 0}
    >
      <Box as="header">
        <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
          <Flex
            as="nav"
            justify={useBreakpointValue({
              base: "center",
              md: "space-between",
            })}
          >
            <HStack spacing="8">
              <Box as="a" href="#" rel="home">
                <Img src={"./logo.png"} alt="Envelope app logo" w={230} />
              </Box>
              <HStack display={{ base: "none", lg: "flex" }} spacing="8">
                <NavLink.Desktop active href="#about">
                  Sobre
                </NavLink.Desktop>
                <NavLink.Desktop href="#services">Informações</NavLink.Desktop>
                <NavLink.Desktop href="#faq">FAQ</NavLink.Desktop>
                {hasTestimonial && (
                  <NavLink.Desktop href="#testimonials">
                    Depoimentos
                  </NavLink.Desktop>
                )}
                <NavLink.Desktop href="#cel">Contato</NavLink.Desktop>
                <Link
                href= {content.social.instagramLink}
                target={'_blank'}
                >
                <Icon display={'flex'} as={BsInstagram} width={'22px'} height={'22px'} color={'white'}/>
                </Link>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display={{ base: "none", md: "flex" }}>
                <Button
                  bgColor={content.colors.primary}
                  color="white"
                  rounded="full"
                  onClick={cta}
                >
                  Marcar consulta
                </Button>
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </MotionBox>
  );
};
