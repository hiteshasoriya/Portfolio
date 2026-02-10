import React from 'react';
import { Box, VStack, HStack, Text, useColorModeValue, IconButton, Badge } from '@chakra-ui/react';
import { FaTimes, FaCode, FaMobileAlt, FaCog, FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const MobileMenu = ({ isOpen, onClose }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const menuItems = [
    { name: 'Home', href: '#home', icon: <FaCode /> },
    { name: 'Services', href: '#services', icon: <FaMobileAlt />, badge: 'New' },
    { name: 'Tech Stack', href: '#tech-stack', icon: <FaCog /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram />, badge: '4' },
    { name: 'Contact', href: '#contact', icon: <FaCode /> },
  ];

  if (!isOpen) return null;

  return (
    <MotionBox
      position="fixed" 
      top={0} 
      right={0} 
      bottom={0} 
      left={0} 
      bg={bgColor} 
      zIndex={1000} 
      p={6}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 40, stiffness: 200 }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={8}>
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>
          Menu
        </Text>
        <IconButton
          aria-label="Close menu"
          icon={<FaTimes />}
          onClick={onClose}
          variant="ghost"
          size="lg"
          color={textColor}
          _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), transform: 'scale(1.1)' }}
          transition="all 0.3s ease"
        />
      </Box>
      <VStack spacing={4} align="stretch">
        {menuItems.map((item, index) => (
          <MotionBox
            key={index}
            whileHover={{ x: 10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <HStack
              spacing={4}
              fontSize="2xl"
              fontWeight="medium"
              cursor="pointer"
              color={textColor}
              onClick={() => {
                onClose();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }} 
              px={4}
              py={4}
              borderRadius="lg"
              _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
              transition="all 0.3s ease"
            >
              <Box fontSize="2xl">{item.icon}</Box>
              <Text>{item.name}</Text>
              {item.badge && (
                <Badge ml="auto" colorScheme="blue" fontSize="xs" borderRadius="full">
                  {item.badge}
                </Badge>
              )}
            </HStack>
          </MotionBox>
        ))}
      </VStack>
    </MotionBox>
  );
};

export default MobileMenu;