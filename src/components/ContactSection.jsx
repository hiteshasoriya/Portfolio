import React, { useRef, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Link,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Icon } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const toast = useToast();
  const [isSending, setIsSending] = useState(false);

  const sectionBg = useColorModeValue("gray.50", "gray.900");

  // ENV variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
  const REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Send email to YOU (admin)
    emailjs
      .sendForm(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(() => {
        // Auto-reply to USER
        return emailjs.sendForm(
          SERVICE_ID,
          REPLY_TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );
      })
      .then(() => {
        toast({
          position: "top-right",
          title: "Message sent successfully!",
          description: "I'll get back to you shortly.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        formRef.current.reset();
      })
      .catch(() => {
        toast({
          position: "top-right",
          title: "Something went wrong",
          description: "Please try again later.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <Box as="section" bg={sectionBg} py={20} px={4} id="contact">
      <Box maxW="6xl" mx="auto">
        <Heading textAlign="center" mb={12} fontWeight="bold">
          Get In Touch
        </Heading>

        <HStack
          align="start"
          spacing={12}
          flexDir={{ base: "column", md: "row" }}
        >
          {/* Contact Info */}
          <Box flex={1}>
            <VStack align="start" spacing={4}>
              <Text color="gray.600">
                Feel free to reach out for collaborations or project inquiries.
              </Text>

              <HStack>
                <Icon as={FaEnvelope} color="blue.500" />
                <Text fontWeight={600}>hiteshasoriya10@gmail.com</Text>
              </HStack>

              <HStack>
                <Icon as={FaGithub} color="blue.500" />
                <Link href="https://github.com/hiteshasoriya" isExternal>
                  github.com/hiteshasoriya
                </Link>
              </HStack>

              <HStack>
                <Icon as={FaLinkedin} color="blue.500" />
                <Link
                  href="https://linkedin.com/in/hitesh-asoriya"
                  isExternal
                >
                  linkedin.com/in/hitesh-asoriya
                </Link>
              </HStack>

              <HStack>
                <Icon as={FaXTwitter} color="blue.500" />
                <Link href="https://x.com/hiteshasoriya" isExternal>
                  x.com/hiteshasoriya
                </Link>
              </HStack>
            </VStack>
          </Box>

          {/* Form */}
          <Box flex={1}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input name="name" placeholder="Your name" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input name="email" type="email" placeholder="Your email" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input name="subject" placeholder="Subject" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea name="message" rows={5} />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="full"
                  isLoading={isSending}
                  loadingText="Sending..."
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default ContactSection;
