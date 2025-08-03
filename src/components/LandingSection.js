import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import { useTranslation } from 'react-i18next'; // Importando o hook de tradução
import profileImage from '../images/Igor Profile.jpeg'; // Importando a imagem local

const LandingSection = () => {
  const { t } = useTranslation(); // Inicializando o hook para traduções

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={16}>
        <VStack spacing={4} alignItems="center">
          <Avatar
            src={profileImage} // Usando a imagem importada
            size="2xl"
            name="Your Name"
          />
          <Heading as="h4" size="md" noOfLines={1}>
            {t("greeting")} {/* Substituindo por chave de tradução */}
          </Heading>
        </VStack>
        <VStack spacing={6}>
          <Heading as="h1" size="3xl" noOfLines={1}>
            {t("bio1")} {/* Substituindo por chave de tradução */}
          </Heading>
          <Heading as="h1" size="3xl" noOfLines={1}>
            {t("bio2")} {/* Substituindo por chave de tradução */}
          </Heading>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;