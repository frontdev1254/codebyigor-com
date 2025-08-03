import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, seeMoreText, link }) => {
  const Wrapper = ({ children }) =>
    link ? (
      <Box
        as="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        w="100%"
        _hover={{ textDecoration: "none" }}
      >
        {children}
      </Box>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <VStack
        color="black"
        backgroundColor="white"
        cursor={link ? "pointer" : "default"}
        borderRadius="xl"
        transition="transform 0.2s"
        _hover={link ? { transform: "scale(1.02)" } : {}}
        overflow="hidden"
        w="100%"
      >
        <Image src={imageSrc} alt={title} borderTopRadius="xl" w="100%" />
        <VStack spacing={4} p={4} alignItems="flex-start" w="100%">
          <HStack justifyContent="space-between" alignItems="center" w="100%">
            <Heading as="h3" size="md">
              {title}
            </Heading>
          </HStack>
          <Text color="#64748b" fontSize="lg">
            {description}
          </Text>
          <HStack spacing={2} alignItems="center">
            <Text>{seeMoreText}</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </Wrapper>
  );
};

export default Card;