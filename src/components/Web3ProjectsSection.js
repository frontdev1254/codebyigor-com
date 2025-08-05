import React from "react";
import { useTranslation } from "react-i18next";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const web3Projects = [
  {
    title: "web3Project1.title",
    description: "web3Project1.description",
    getImageSrc: () => require("../images/web3photo1.jpg"),
    url: "https://github.com/seuusuario/projeto-web3-1"
  },
  {
    title: "web3Project2.title",
    description: "web3Project2.description",
    getImageSrc: () => require("../images/web3photo2.jpg"),
    url: "https://github.com/seuusuario/projeto-web3-2"
  },
];

const Web3ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <FullScreenSection
      backgroundColor="#1D1D1F"
      isDarkBackground
      p={[4, 6, 8]} // padding responsivo
      alignItems="flex-start"
      spacing={8}
    >
      <Heading
        as="h1"
        id="web3-projects-section"
        fontSize={["2xl", "3xl", "4xl"]}
        mb={4}
        textAlign={["center", "left"]} // centraliza no mobile
        width="100%"
      >
        {t("Web 3 Projects")}
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} // 1 coluna no mobile, 2 no desktop
        gridGap={[4, 6, 8]}
        width="100%"
      >
        {web3Projects.map((project) => (
          <Card
            key={project.title}
            title={t(project.title)}
            description={t(project.description)}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Web3ProjectsSection;