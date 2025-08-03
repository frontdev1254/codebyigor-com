import React from "react";
import { useTranslation } from "react-i18next";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const web3Projects = [
  {
    title: "web3Project1.title", // Chave de tradução para o título
    description: "web3Project1.description", // Chave de tradução para a descrição
    getImageSrc: () => require("../images/web3photo1.jpg"), // Imagem para o projeto Web3
    url: "https://github.com/seuusuario/projeto-web3-1" // URL para o projeto no GitHub
  },
  {
    title: "web3Project2.title",
    description: "web3Project2.description",
    getImageSrc: () => require("../images/web3photo2.jpg"),
    url: "https://github.com/seuusuario/projeto-web3-2"
  },
];

const Web3ProjectsSection = () => {
  const { t } = useTranslation(); // Usando o hook de tradução
  
  return (
    <FullScreenSection
      backgroundColor="#1D1D1F"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="web3-projects-section">
        {t("Web 3 Projects")} {/* Título da seção de projetos Web3 */}
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        alignItems="flex-start" // Alinhamento à esquerda dos cards
      >
        {web3Projects.map((project) => (
          <Card
            key={project.title}
            title={t(project.title)} // Título traduzido
            description={t(project.description)} // Descrição traduzida
            url={project.url} // URL do projeto no GitHub
            imageSrc={project.getImageSrc()} // Imagem do projeto
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Web3ProjectsSection;