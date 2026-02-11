import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Result1 from "../assets/ResultImages/Result_1.jpeg";
import Result2 from "../assets/ResultImages/Result_2.jpeg";
import Result3 from "../assets/ResultImages/Result_3.jpeg";
import Result4 from "../assets/ResultImages/Result_4.jpeg";
import Result5 from "../assets/ResultImages/Result_5.jpeg";

import Original1 from "../assets/OriginalImages/Original_1.jpeg";
import Original2 from "../assets/OriginalImages/Original_2.jpeg";
import Original3 from "../assets/OriginalImages/Original_3.jpeg";
import Original4 from "../assets/OriginalImages/Original_4.jpeg";
import Original5 from "../assets/OriginalImages/Original_5.jpeg";

const MotionBox = motion(Box);

const images = [
  { result: Result1, original: Original1 },
  { result: Result2, original: Original2 },
  { result: Result3, original: Original3 },
  { result: Result4, original: Original4 },
  { result: Result5, original: Original5 },
];

const PhotoIllustrationsCarousel = () => {
  const [showOriginal, setShowOriginal] = useState(false);
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const sectionBg = useColorModeValue("gray.50", "gray.900");

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <Box as="section" py={24} bg={sectionBg}>
      {/* Header */}
      <MotionBox
        textAlign="center"
        mb={12}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading size="3xl" fontWeight="bold" color={textColor}>
          Photo Illustrations
        </Heading>
      </MotionBox>

      {/* Slider */}
      <Box
        mx="auto"
        px={8}
        maxW="7xl"
        sx={{
          ".slick-slider": { width: "100%" },
          ".slick-list": { overflow: "hidden" },
        }}
      >
        <Slider {...settings}>
          {images.map((img, index) => {

            return (
              <Box key={index} px={3}>
                <MotionBox
                  bg={cardBg}
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="lg"
                  position="relative"
                  h={{ base: "220px", md: "260px" }}
                  cursor="pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setShowOriginal(!showOriginal)}
                >
                  {/* Result Image */}
                  <Image
                    src={img.result}
                    alt="Final Result"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />

                  {/* Original Image */}
                  <MotionBox
                    position="absolute"
                    inset={0}
                    animate={{
                      opacity: showOriginal ? 1 : 0,
                      filter: showOriginal ? "blur(0px)" : "blur(10px)",
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={img.original}
                      alt="Original"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </MotionBox>
                </MotionBox>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default PhotoIllustrationsCarousel;
