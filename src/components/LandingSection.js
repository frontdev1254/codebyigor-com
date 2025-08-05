import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import { useTranslation } from 'react-i18next'; 
import profileImage from '../images/Igor Profile.jpeg'; 

const LandingSection = () => {
  const { t } = useTranslation();

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={[8, 12, 16]} px={[4, 6, 0]}>
        <VStack spacing={[2, 4]} alignItems="center">
          <Avatar
            src={profileImage}
            size={["xl", "2xl"]} // menor no mobile
            name="Igor Souza"
          />
          <Heading 
            as="h4" 
            fontSize={["md", "lg", "xl"]} 
            textAlign="center"
          >
            {t("greeting")}
          </Heading>
        </VStack>

        <VStack spacing={[3, 4]} textAlign="center">
          <Heading 
            as="h1" 
            fontSize={["2xl", "3xl", "4xl"]} 
            noOfLines={[2, 1]}
          >
            {t("bio1")}
          </Heading>
          <Heading 
            as="h1" 
            fontSize={["2xl", "3xl", "4xl"]} 
            noOfLines={[2, 1]}
          >
            {t("bio2")}
          </Heading>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;