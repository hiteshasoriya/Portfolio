import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaCode,
  FaMobileAlt,
  FaPuzzlePiece,
  FaCog,
  FaRocket,
  FaImage,
  FaPaintBrush,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const services = [
  {
    icon: FaCode,
    title: "Custom React Web Development",
    description:
      "I build modern, fast, and responsive websites using React, Vite, and Chakra UI and any other css libraries perfect for startups, portfolios, and SaaS products.",
    iconColor: "blue.500",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile-First Design",
    description:
      "Creating beautiful, mobile-responsive interfaces that work on any device.",
    bg: "green.50",
    hoverBg: "green.100",
    iconColor: "green.500",
  },
  // {
  //   icon: FaPuzzlePiece,
  //   title: "Component Libraries",
  //   description:
  //     "Developing reusable component libraries with Chakra UI and other design systems.",
  //   bg: "purple.50",
  //   hoverBg: "purple.100",
  //   iconColor: "purple.500",
  // },
  {
    icon: FaCog,
    title: "Performance Optimization",
    description: "Optimizing React applications for speed and efficiency.",
    bg: "pink.50",
    hoverBg: "pink.100",
    iconColor: "pink.500",
  },
  {
    icon: FaRocket,
    title: "Landing Pages & SaaS UI",
    description:
      "High-converting landing pages and clean SaaS dashboards focused on performance, UX, and mobile responsiveness.",
    iconColor: "green.500",
  },
  {
    icon: FaImage,
    title: "Photo Illustration & Visual Design",
    description:
      "Custom photo illustrations, creative visuals, and image edits for social media, websites, and marketing campaigns.",
    iconColor: "purple.500",
  }
];

const ServicesSection = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box as="section" py={24} px={4} id="services" bg="white">
      <Box maxW="6xl" mx="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            size="3xl"
            mb={12}
            fontWeight="bold"
            color={"gray.800"}
          >
            My Services
          </Heading>
        </MotionBox>
        <SimpleGrid columns={{ base: 1, md: 2, lg:3 }} spacing={8}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              bg={cardBg}
              p={8}
              borderRadius="2xl"
              boxShadow="lg"
              _hover={{ boxShadow: "xl" }}
            >
              <VStack spacing={6} align="center">
                <Icon
                  as={service.icon}
                  boxSize={12}
                  color={service.iconColor}
                />
                <Heading
                  as="h3"
                  size="lg"
                  fontWeight="semibold"
                  color={textColor}
                >
                  {service.title}
                </Heading>
                <Text color="gray.500" textAlign="center" fontSize="md">
                  {service.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ServicesSection;
