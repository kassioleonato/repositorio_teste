import {
  AspectRatio,
  chakra,
  Circle,
  Flex,
  FlexProps,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import content from "../../content";

const MotionFlex = motion<FlexProps>(Flex);
const ChakraSwiper = chakra(Swiper);

type SwiperManager = {
  swiper: SwiperCore;
  activeIndex: number;
};

export default function Choices() {
  const [manager, setManager] = useState<SwiperManager>({} as SwiperManager);

  const handleChangeSlide = useCallback(
    (index: number) => {
      manager.swiper.slideTo(index);

      setManager({
        ...manager,
        activeIndex: index,
      });
    },
    [manager]
  );
  return (
    <>
      <Flex
        p={{ base: "4", md: "8" }}
        flexDirection={{ base: "column", lg: "row" }}
        bg={"white"}
        id="intro"
        position={"relative"}
      >
        <MotionFlex
          whileInView={{ translateX: [-50, 0], opacity: [0, 1] }}
          w={{ base: "100%", lg: "50%" }}
        >
          <Stack
            spacing={{ base: "3", md: "6" }}
            align="center"
            justifyContent={"center"}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color={content.colors.primary}
              mt={4}
            >
              {content.choices.title}
            </Text>
            <Text
              color={"gray.600"}
              maxW="3xl"
              textAlign="center"
              fontSize="md"
              whiteSpace="break-spaces"
              p={{ base: "1", sm: "3" }}
              lineHeight="8"
            >
              {content.choices.content}
            </Text>
          </Stack>
        </MotionFlex>
        <Flex
          w={{ base: "100%", sm: "100%", lg: "50%" }}
          direction={{ base: "column", md: "row" }}
        >
          <ChakraSwiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={true}
            modules={[Autoplay]}
            className="mySwiper"
            onAfterInit={(s) =>
              setManager({
                swiper: s,
                activeIndex: 0,
              })
            }
            onSlideChange={(s) =>
              setManager({ ...manager, activeIndex: s.activeIndex })
            }
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            width="100%"
          >
            {content.choices.images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <AspectRatio ratio={4/3}>
                  <Img
                    src={image}
                    alt="Main Image"
                    w="full"
                    h="full"
                    objectFit="cover"
                    objectPosition="center center"
                  />
                  </AspectRatio>
                </SwiperSlide>
              );
            })}
          </ChakraSwiper>
          <Stack
            alignSelf={{ md: "center" }}
            justifyContent={{ base: "center", md: "" }}
            alignItems={{ base: "center", md: "" }}
            position={"absolute"}
            direction={{
              base: "column",
            }}
            zIndex={99999}
            className="custom-swiper-pagination"
            pl={{ base: 0, md: 4 }}
            py={{ base: 4, md: 0 }}
          >
            {content.choices.images.map((image, index) => {
              const isActive = manager.activeIndex === index;

              return (
                <Circle
                  size={{ base: "8px", md: "11px", lg: "13px" }}
                  key={index}
                  cursor="pointer"
                  onClick={() => handleChangeSlide(index)}
                  bgColor={isActive ? "white" : "blackAlpha.900"}
                  opacity={isActive ? 1 : 0.5}
                />
              );
            })}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
