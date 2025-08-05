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
import { useTranslation } from "react-i18next";

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
  const { i18n, t } = useTranslation();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) return;

      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      zIndex={999}
    >
      <Box color="white" maxW="1280px" mx="auto" px={{ base: 4, md: 8 }}>
        <Box
          py={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="nowrap"
          overflowX="auto"
          gap={{ base: 2, md: 6 }}
        >
          {/* Social icons - left */}
          <HStack spacing={{ base: 3, md: 6 }} flexShrink={0}>
            {socials.map(({ icon, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="lg" />
              </a>
            ))}
          </HStack>

          {/* Navigation links - right */}
          <HStack spacing={{ base: 3, md: 6 }} flexShrink={0}>
            <a href="#projects" onClick={handleClick("projects")}>
              {t("projects")}
            </a>
            <a href="#contactme" onClick={handleClick("contactme")}>
              {t("contact")}
            </a>
            <Button
              size="sm"
              backgroundColor="#2A4365"
              color="white"
              onClick={toggleLanguage}
              _hover={{ backgroundColor: "#2b4f7c" }}
            >
              {i18n.language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;