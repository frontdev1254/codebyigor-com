import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; // Importando o hook do i18n

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:codebyigor@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/frontdev1254",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/codebyigor",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@codebyigor",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/24202124/codebyigor?tab=profile",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const { i18n, t } = useTranslation(); // Hook do i18n para tradução

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Função para alternar idioma
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon} size="2x" key={url} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>
                {t("projects")}
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                {t("contact")}
              </a>
              {/* Botão de troca de idioma */}
              <Button
                size="sm"
                backgroundColor="#2A4365"  // Cor de fundo do botão
                color="white"  // Cor do texto do botão
                onClick={toggleLanguage}
                _hover={{
                  backgroundColor: "#2b4f7c", // Cor de fundo ao passar o mouse
                }}
              >
                {i18n.language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
              </Button>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;