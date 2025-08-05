import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * FullScreenSection: um container vertical full screen,
 * com suporte a cores escuras e responsividade.
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      w="100%" // garante largura total
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack
        w="100%" // garante largura total interna também
        maxW="1280px" // limite de largura
        minH="100vh" // altura da tela
        px={[4, 6, 8]} // padding horizontal responsivo (mobile → desktop)
        py={[6, 8, 10]} // padding vertical responsivo
        spacing={8}
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;