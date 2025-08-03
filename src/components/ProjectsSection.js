import React from "react";
import { useTranslation } from "react-i18next";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "projectsSpace.title",
    description: "projectsSpace.description",
    getImageSrc: () => require("../images/photo1.jpeg"),
    link: "https://www.xfolio.com.br"
  },
  {
    title: "projectsScroll.title",
    description: "projectsScroll.description",
    getImageSrc: () => require("../images/photo2.jpeg"),
    link: "https://t.me/portalLPcrypto"
  },
  {
    title: "photoGallery.title",
    description: "photoGallery.description",
    getImageSrc: () => require("../images/photo3.png"),
  },
  {
    title: "eventPlanner.title",
    description: "eventPlanner.description",
    getImageSrc: () => require("../images/photo4.png"),
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <FullScreenSection
      backgroundColor="#1D1D1F"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        {t("projectsSection.title")}
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        alignItems="flex-start" // Alinhamento à esquerda dos cards
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={t(project.title)}
            description={t(project.description)}
            imageSrc={project.getImageSrc()}
            seeMoreText={t("seeMore")} // Passando a tradução para o Card
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;