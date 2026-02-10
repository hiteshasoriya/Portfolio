import { ChakraProvider, Box, useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import './App.css';
import PhotoIllustrationsCarousel from './components/PhotoIllustrationsCarousel';

function App() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.body.classList.toggle('dark-theme', colorMode === 'dark');
  }, [colorMode]);

  return (
    <ChakraProvider>
      <Box as="main" minH="100vh">
        <Navbar />
        <Box>
          <HeroSection />
          <ServicesSection />
          <TechStackSection />
          <ProjectsSection />
          <PhotoIllustrationsCarousel />
          <ContactSection />
          <Footer />
        </Box>
        <AIAssistant />
      </Box>
    </ChakraProvider>
  );
}

export default App;
