import React from 'react';
import { Box, Heading, Text, SimpleGrid, VStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiSass, SiChakraui, SiVite, SiGit, SiGithub, SiNpm, SiNextdotjs, SiTailwindcss, SiFigma, SiDocker } from 'react-icons/si';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const techStack = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
  { icon: SiSass, name: 'Sass', color: '#CF649A' },
  { icon: SiChakraui, name: 'Chakra UI', color: '#319795' },
  { icon: SiVite, name: 'Vite', color: '#646CFF' },
  // { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', color: '#181717' },
  // { icon: SiNpm, name: 'npm', color: '#CB3837' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#38B2AC' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  // { icon: SiDocker, name: 'Docker', color: '#2496ED' },
];

const TechStackSection = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box as="section" py={24} px={4} id="tech-stack" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Box maxW="6xl" mx="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" size="3xl" mb={12} fontWeight="bold" color={textColor}>
            My Tech Stack
          </Heading>
        </MotionBox>
        <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={6}>
          {techStack.map((tech, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
              bg={cardBg}
              p={6}
              borderRadius="2xl"
              boxShadow="lg"
              _hover={{ boxShadow: 'xl' }}
            >
              <VStack spacing={4} align="center">
                <Icon as={tech.icon} boxSize={10} color={tech.color} />
                <Text fontWeight="semibold" fontSize="lg" color={textColor}>
                  {tech.name}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TechStackSection;