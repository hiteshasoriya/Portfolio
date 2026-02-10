import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  useColorModeValue,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);

const projects = [
  {
    title: "SaaS Admin Dashboard",
    description:
      "A modern, responsive SaaS admin dashboard built with React and Chakra UI. Includes analytics, user management, billing overview, dark/light mode, and a collapsible sidebar for an optimized user experience.",
    techStack: [
      "React",
      "Chakra UI",
      "Vite",
      "Recharts",
      "Framer Motion",
      "JavaScript",
    ],
    demoLink: "https://react-saas-admin-dashboard.vercel.app/",
    codeLink: "https://github.com/hiteshasoriya/react-saas-admin-dashboard",
    bg: "blue.50",
    darkBg: "blue.900",
    iconColor: "blue.500",
  },
  {
    title: "Modern Landing Page",
    description:
      "A high-conversion, production-ready landing page designed for startups, SaaS products, and businesses. Built with React and Chakra UI with a clean UI, strong visual hierarchy, and full responsiveness.",
    techStack: ["React", "Chakra UI", "Vite", "JavaScript"],
    demoLink: "https://react-chakra-landing-page.vercel.app/",
    codeLink: "https://github.com/hiteshasoriya/react-chakra-landing-page",
    bg: "green.50",
    darkBg: "green.900",
    iconColor: "green.500",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing frontend projects, UI design skills, and services. Includes animated sections, dark/light mode, and a modern responsive layout.",
    techStack: ["React", "Chakra UI", "Framer Motion", "Vite"],
    demoLink: "#",
    codeLink: "https://github.com/hiteshasoriya/Portfolio",
    bg: "purple.50",
    darkBg: "purple.900",
    iconColor: "purple.500",
  },
];

const ProjectsSection = () => {
  const cardBg = useColorModeValue("white", "gray.850");
  const textColor = useColorModeValue("gray.800", "white");
  const descriptionColor = useColorModeValue("gray.500", "gray.300");
  const sectionBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box
      as="section"
      py={24}
      px={4}
      id="projects"
      bg={sectionBg}
      backdropFilter="blur(10px)"
    >
      <Box w="100%" textAlign="center" px={4}>
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
            color={textColor}
          >
            Featured Projects
          </Heading>
        </MotionBox>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow={useColorModeValue("lg", "2xl")}
              _hover={{ boxShadow: useColorModeValue("xl", "3xl") }}
              border="1px solid"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              overflow="hidden"
              h="100%"
            >
              {/* FLEX COLUMN */}
              <VStack spacing={6} align="stretch" p={8} h="100%">
                {/* Header */}
                <Box
                  bg={useColorModeValue(project.bg, project.darkBg)}
                  p={4}
                  borderRadius="xl"
                >
                  <Heading size="lg" fontWeight="bold" color={textColor}>
                    {project.title}
                  </Heading>
                </Box>

                {/* Description */}
                <Text color={descriptionColor} fontSize="md" lineHeight="1.7">
                  {project.description}
                </Text>

                {/* Tech Stack */}
                <HStack spacing={2} justify={"center"} flexWrap="wrap">
                  {project.techStack.map((tech, techIndex) => (
                    <Tag 
                      key={techIndex} 
                      size="sm" 
                      variant="subtle" 
                      colorScheme={useColorModeValue('blue', 'cyan')} 
                      bg={useColorModeValue('blue.50', 'cyan.900')} 
                    >
                      {tech}
                    </Tag>
                  ))}
                </HStack>

                {/* PUSH BUTTONS TO BOTTOM */}
                <HStack spacing={3} justify="flex-end" mt="auto">
                  <Button
                    leftIcon={<FaExternalLinkAlt />}
                    size="sm"
                    variant="outline"
                    colorScheme="blue"
                    onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    Live Demo
                  </Button>

                  <Button
                    leftIcon={<FaGithub />}
                    size="sm"
                    colorScheme="gray"
                    onClick={() => window.open(project.codeLink, "_blank")}
                  >
                    Code
                  </Button>
                </HStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
