import React from 'react';
import { Box, Heading, Text, Button, VStack, useColorModeValue, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const MotionBox = motion(Box);

const HeroSection = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.500, purple.500, pink.500)',
    'linear(to-r, blue.400, purple.400, pink.400)'
  );
  const textColor = useColorModeValue('gray.800', 'white');
  const sectionBg = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box as="section" bg={sectionBg} py={24} px={4} id="home" position="relative" overflow="hidden">
      <Box maxW="3xl" mx="auto" textAlign="center" position="relative" zIndex={1}>
        <VStack spacing={6}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h1" size="4xl" fontWeight="bold" color={textColor}>
              Hi, Hitesh Asoria
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text fontSize="2xl" color={'blue.500'} fontWeight="semibold">
              React Developer | Frontend Engineer
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text fontSize="lg" color={'gray.600'} maxW="2xl" mx="auto">
              Building beautiful, performant web applications with React and modern technologies.
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              bgGradient={bgGradient}
              color="white"
              mt={6}
              borderRadius="full"
              px={10}
              py={7}
              fontSize="lg"
              fontWeight="semibold"
              _hover={{
                transform: 'translateY(-2px) scale(1.05)',
                boxShadow: 'xl',
                textDecoration: 'none'
              }}
              transition="all 0.3s ease"
              leftIcon={<span>🚀</span>}
              onClick={()=>document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </MotionBox>
        </VStack>
      </Box>
      {/* Decorative elements */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        w="20px"
        h="20px"
        bg="blue.400"
        borderRadius="50%"
        opacity={0.6}
        animation={`${floatAnimation} 6s ease-in-out infinite`}
        style={{ animationDelay: '0s' }}
      />
      <MotionBox
        position="absolute"
        top="40%"
        right="15%"
        w="15px"
        h="15px"
        bg="purple.400"
        borderRadius="50%"
        opacity={0.6}
        animation={`${floatAnimation} 7s ease-in-out infinite`}
        style={{ animationDelay: '2s' }}
      />
      <MotionBox
        position="absolute"
        bottom="30%"
        left="20%"
        w="12px"
        h="12px"
        bg="pink.400"
        borderRadius="50%"
        opacity={0.6}
        animation={`${floatAnimation} 5s ease-in-out infinite`}
        style={{ animationDelay: '1s' }}
      />
    </Box>
  );
};

export default HeroSection;