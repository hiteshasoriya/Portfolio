import React from "react";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Link as ChakraLink,
  Badge,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaBars,
  FaCode,
  FaMobileAlt,
  FaCog,
  FaProjectDiagram,
} from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const shadowColor = useColorModeValue("lg", "dark-lg");
  const navBg = useColorModeValue("gray.100", "gray.700");
  const navHoverBg = useColorModeValue("blue.50", "blue.900");

  const navItems = [
    { name: "Home", href: "#home", icon: <FaCode /> },
    {
      name: "Services",
      href: "#services",
      icon: <FaMobileAlt />,
      badge: "New",
    },
    { name: "Tech Stack", href: "#tech-stack", icon: <FaCog /> },
    {
      name: "Projects",
      href: "#projects",
      icon: <FaProjectDiagram />,
      badge: "4",
    },
  ];

  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <MotionBox
        as="nav"
        py={5}
        px={{ base: 3, md: 8 }}
        bg={bgColor}
        boxShadow={shadowColor}
        position="sticky"
        top={0}
        zIndex={100}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        backdropFilter="blur(10px)"
        bgGradient={useColorModeValue(
          "linear(to-r, white, gray.50)",
          "linear(to-r, gray.800, gray.900)"
        )}
      >
        <HStack
          justify="space-between"
          maxW="7xl"
          mx="auto"
          spacing={{ base: 1, md: 8 }}
        >
          {/* Left Side - Brand Name */}
          <Box>
            <Heading as="h1" size="xl" fontWeight="bold" color={textColor}>
              Hitesh Asoria
            </Heading>
          </Box>

          {/* Right Side - Navigation Items and Theme Button */}
          <HStack spacing={{ base: 1, md: 4 }}>
            {/* Desktop Navigation - Hidden on mobile */}
            <HStack spacing={2} display={{ base: "none", lg: "flex" }}>
              {navItems.map((item, index) => (
                <MotionBox
                  key={item.name || index}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ChakraLink
                    href={item.href}
                    color={textColor}
                    fontWeight="medium"
                    px={4}
                    py={3}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    bg={navBg}
                    _hover={{
                      color: "blue.500",
                      textDecoration: "none",
                      bg: navHoverBg,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <Box fontSize="xl">{item.icon}</Box>
                    <Box>{item.name}</Box>
                    {item.badge && (
                      <Badge
                        ml={2}
                        colorScheme="blue"
                        fontSize="xs"
                        borderRadius="full"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </ChakraLink>
                </MotionBox>
              ))}
            </HStack>

            {/* Theme Toggle Button - Visible on all screens */}
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              size="lg"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
                transform: "scale(1.1)",
              }}
              transition="all 0.3s ease"
            />

            {/* Mobile Menu Button - Hidden on desktop */}
            <IconButton
              aria-label="Menu"
              icon={<FaBars />}
              variant="ghost"
              size="lg"
              onClick={onOpen}
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
                transform: "scale(1.1)",
              }}
              display={{ base: "flex", lg: "none" }}
              transition="all 0.3s ease"
            />
          </HStack>
        </HStack>
      </MotionBox>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
