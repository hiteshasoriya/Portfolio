import React from "react";
import {
  Box,
  Text,
  HStack,
  Icon,
  useColorModeValue,
  keyframes,
  Link,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const MotionBox = motion(Box);

const Footer = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="footer"
      py={12}
      px={6}
      bg={bgColor}
      mt="auto"
      position="relative"
      overflow="hidden"
    >
      <Box
        maxW="6xl"
        mx="auto"
        textAlign="center"
        position="relative"
        zIndex={1}
      >
        <HStack justify="center" spacing={6} mb={6}>
          <MotionBox
            whileHover={{ scale: 1.2, color: "blue.500" }}
            transition="all 0.3s ease"
          >
            <Link
              href="https://github.com/hiteshasoriya"
              isExternal
              aria-label="GitHub Profile"
            >
              <Icon
                as={FaGithub}
                boxSize={7}
                color={textColor}
                cursor="pointer"
              />
            </Link>
          </MotionBox>
          <MotionBox
            whileHover={{ scale: 1.2, color: "blue.500" }}
            transition="all 0.3s ease"
          >
            <Link
              href="https://linkedin.com/in/hitesh-asoriya"
              isExternal
              aria-label="LinkedIn Profile"
            >
              <Icon
                as={FaLinkedin}
                boxSize={7}
                color={textColor}
                cursor="pointer"
              />
            </Link>
          </MotionBox>
          <MotionBox
            whileHover={{ scale: 1.2, color: "blue.500" }}
            transition="all 0.3s ease"
          >
            <Link
              href="https://x.com/hitesh-asoriya"
              isExternal
              aria-label="LinkedIn Profile"
            >
              <Icon
                as={FaXTwitter}
                boxSize={7}
                color={textColor}
                cursor="pointer"
              />
            </Link>
          </MotionBox>
        </HStack>
        <Text color={textColor} fontSize="sm" mb={2}>
          © {new Date().getFullYear()} Hitesh Asoria. All rights reserved.
        </Text>
        <Text color={textColor} fontSize="sm" mb={6}>
          Made with{" "}
          <Icon as={FaHeart} color="red.500" boxSize={4} display="inline" />{" "}
          using React, Vite, and Chakra UI
        </Text>
        <MotionBox
          whileHover={{ scale: 1.1, color: "blue.500" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          cursor="pointer"
          display="inline-block"
        >
          <Icon as={FaArrowUp} boxSize={6} color={textColor} />
        </MotionBox>
      </Box>
      {/* Decorative elements */}
      <MotionBox
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="100px"
        bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
        opacity="0.1"
      />
    </Box>
  );
};

export default Footer;
