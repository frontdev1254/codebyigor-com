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
      p={[4, 6, 8]} // padding responsivo
      alignItems="flex-start"
      spacing={8}
    >
      <Heading 
        as="h1" 
        id="projects-section" 
        fontSize={["2xl", "3xl", "4xl"]} 
        mb={4}
        textAlign={["center", "left"]} // centraliza no mobile
        width="100%"
      >
        {t("projectsSection.title")}
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} // 1 coluna no mobile, 2 no desktop
        gridGap={[4, 6, 8]}
        width="100%"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={t(project.title)}
            description={t(project.description)}
            imageSrc={project.getImageSrc()}
            seeMoreText={t("seeMore")}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;