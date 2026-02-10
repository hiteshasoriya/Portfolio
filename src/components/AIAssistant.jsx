import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Input, VStack, Text, IconButton, useColorModeValue, Badge, HStack, Tooltip } from '@chakra-ui/react';
import { FaRobot, FaPaperPlane, FaTimes, FaQuestionCircle, FaLightbulb, FaCode, FaMobileAlt, FaCog, FaProjectDiagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your AI assistant. Ask me about Hitesh's portfolio, skills, or projects!",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const buttonBg = useColorModeValue('blue.500', 'blue.600');
  const buttonHover = useColorModeValue('blue.600', 'blue.700');

  const toggleAssistant = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue.toLowerCase());
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const generateAIResponse = (question) => {
    // Define common questions and responses
    const responses = {
      'hi|hello|hey': {
        text: "Hello! I'm here to help you learn about Hitesh Asoria's portfolio. What would you like to know?",
        type: 'greeting'
      },
      'skills|skill': {
        text: "Hitesh is a React Developer with expertise in frontend engineering. His key skills include React, JavaScript, TypeScript, Chakra UI, Vite, and modern web development technologies.",
        type: 'skills'
      },
      'projects|project': {
        text: "Hitesh has worked on several projects including an E-Commerce Platform, SaaS Admin Dashboard,  Modern Landing Page, Portfolio Website, and Figma to Responsive Pages. Each project showcases different aspects of his development skills.",
        type: 'projects'
      },
      'services|service': {
        text: "Hitesh offers Custom React Development, Mobile-First Design, Component Libraries development, and Performance Optimization services.",
        type: 'services'
      },
      'tech stack|technology': {
        text: "Hitesh works with React, JavaScript, TypeScript, HTML5, CSS3, Sass, Chakra UI, Vite, Git, GitHub, npm, Next.js, Tailwind CSS, Figma, and Docker.",
        type: 'tech'
      },
      'experience': {
        text: "Hitesh has extensive experience building beautiful, performant web applications with React and modern technologies. He focuses on creating responsive, user-friendly interfaces.",
        type: 'experience'
      },
      'contact|email': {
        text: "You can contact Hitesh through his LinkedIn, Twitter, or GitHub profiles. Check the footer for direct links to his social media.",
        type: 'contact'
      },
      'help|?': {
        text: "I can help with questions about Hitesh's portfolio, skills, projects, services, and technology stack. Just ask!",
        type: 'help'
      },
      'default': {
        text: "I'm not sure about that. You can ask me about Hitesh's skills, projects, services, or technology stack. Or browse through his portfolio sections to learn more!",
        type: 'default'
      }
    };

    // Find the best matching response
    for (const [pattern, response] of Object.entries(responses)) {
      const regex = new RegExp(pattern, 'i');
      if (regex.test(question)) {
        return {
          id: Date.now() + 1,
          text: response.text,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString(),
          type: response.type
        };
      }
    }

    return responses.default;
  };

  const quickQuestions = [
    { text: 'What are your skills?', icon: <FaCode />, question: 'skills' },
    { text: 'Show me projects', icon: <FaProjectDiagram />, question: 'projects' },
    { text: 'What services do you offer?', icon: <FaMobileAlt />, question: 'services' },
    { text: 'What technologies do you use?', icon: <FaCog />, question: 'tech stack' },
    { text: 'How can I contact you?', icon: <FaQuestionCircle />, question: 'contact' }
  ];

  return (
    <>
      {/* Floating AI Button */}
      <Box position="fixed" bottom={6} right={6} zIndex={1000}>
        <Tooltip label={isOpen ? 'Close AI Assistant' : 'Ask me anything'} hasArrow>
          <IconButton
            aria-label="AI Assistant"
            icon={<FaRobot />}
            onClick={toggleAssistant}
            colorScheme="blue"
            size="lg"
            borderRadius="full"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.1)', boxShadow: 'xl' }}
            transition="all 0.3s ease"
          />
        </Tooltip>
      </Box>

      {/* AI Assistant Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="fixed" 
            bottom={20} 
            right={6} 
            // left={6} 
            maxH="70vh" 
            w={{ base: 'calc(100% - 24px)', md: '400px' }} 
            bg={bgColor}
            borderRadius="2xl"
            boxShadow="2xl"
            p={4}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            zIndex={1000}
            border={useColorModeValue('1px', '1px')}
            borderColor={borderColor}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
              <HStack spacing={2}>
                <FaRobot color="#3182ce" />
                <Text fontWeight="bold" color={textColor} fontSize="lg">
                  AI Assistant
                </Text>
                <Badge colorScheme="green" fontSize="xs">
                  Online
                </Badge>
              </HStack>
              <IconButton
                aria-label="Close"
                icon={<FaTimes />}
                size="sm"
                variant="ghost"
                onClick={toggleAssistant}
                color={textColor}
              />
            </Box>

            {/* Messages Container */}
            <Box 
              flex="1" 
              overflowY="auto"
              maxH="38vh" 
              mb={4} 
              pr={2}
              display="flex" 
              flexDirection="column"
              borderRadius="lg"
              bg={useColorModeValue('gray.50', 'gray.850')}
              p={2}
            >
              {messages.map((message) => (
                <MotionBox
                  key={message.id}
                  alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                  bg={message.sender === 'user' ? 'blue.500' : useColorModeValue('gray.100', 'gray.700')}
                  color={message.sender === 'user' ? 'white' : textColor}
                  p={3}
                  borderRadius="lg"
                  mb={2}
                  maxW="85%"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  boxShadow={message.sender === 'user' ? 'sm' : 'none'}
                >
                  <Text fontSize="sm" lineHeight="1.5">{message.text}</Text>
                  <Text fontSize="xs" opacity={0.7} mt={1} textAlign="right">
                    {message.timestamp}
                  </Text>
                </MotionBox>
              ))}
              <div ref={messagesEndRef} />
            </Box>

            {/* Quick Questions */}
            <Box mb={4}>
              <Text fontSize="sm" fontWeight="medium" mb={2} color={textColor}>
                Quick Questions:
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {quickQuestions.map((qq, index) => (
                  <Tooltip key={index} label={qq.text} hasArrow>
                    <IconButton
                      aria-label={qq.text}
                      icon={qq.icon}
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const userMessage = {
                          id: Date.now() + index,
                          text: qq.text,
                          sender: 'user',
                          timestamp: new Date().toLocaleTimeString()
                        };
                        setMessages(prev => [...prev, userMessage]);
                        
                        setTimeout(() => {
                          const aiResponse = generateAIResponse(qq.question);
                          setMessages(prev => [...prev, aiResponse]);
                        }, 1000);
                      }}
                      colorScheme="blue"
                      _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                      transition="all 0.2s ease"
                    />
                  </Tooltip>
                ))}
              </HStack>
            </Box>

            {/* Input Area */}
            <HStack spacing={2}>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                size="sm"
                borderRadius="full"
                flex="1"
                bg={useColorModeValue('white', 'gray.800')}
                borderColor={borderColor}
                _placeholder={{ color: useColorModeValue('gray.500', 'gray.400') }}
                _focus={{ 
                  borderColor: 'blue.500', 
                  boxShadow: 'outline' 
                }}
              />
              <Button
                onClick={handleSendMessage}
                colorScheme="blue"
                size="sm"
                borderRadius="full"
                leftIcon={<FaPaperPlane />}
                isDisabled={!inputValue.trim()}
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                transition="all 0.2s ease"
              >
                Send
              </Button>
            </HStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
