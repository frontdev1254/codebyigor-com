import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { LanguageProvider } from './context/LanguageContext'; // Caminho correto
import Header from "./components/Header"; 
import LandingSection from "./components/LandingSection"; 
import ProjectsSection from "./components/ProjectsSection";
import Web3ProjectsSection from "./components/Web3ProjectsSection"; // Importando o novo componente
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer"; 
import { AlertProvider } from "./context/alertContext"; 
import Alert from "./components/Alert"; 

function App() { 
  return ( 
    <ChakraProvider> 
      <LanguageProvider>
        <AlertProvider> 
          <main> 
            <Header /> 
            <LandingSection /> 
            <ProjectsSection />
            <Web3ProjectsSection /> {/* Adicionando a nova seção de projetos Web3 */}
            <ContactMeSection /> 
            <Footer /> 
            <Alert /> 
          </main> 
        </AlertProvider>
      </LanguageProvider> 
    </ChakraProvider>
  ); 
} 

export default App;