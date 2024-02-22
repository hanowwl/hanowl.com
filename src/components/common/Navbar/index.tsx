import React, { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import * as S from "./styled";
import { Text } from "../Text";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const initialAnimation = { backgroundColor: "transparent", backdropFilter: "blur(0px)" };
  const animateAnimation = {
    backgroundColor: isScrolled ? "rgba(0,0,0,0.3)" : "transparent",
    backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
  };
  const exitAnimation = { backgroundColor: "transparent", backdropFilter: "blur(0px)" };
  const transitionAnimation = { duration: 0.4 };

  return (
    <AnimatePresence>
      <S.NavbarContainer
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={transitionAnimation}
      >
        <S.NavbarInnerContainer>
          <Text size={2.8} weight={700}>
            HANOWL
          </Text>
          <S.NavbarLinkText href={"/teams"}>부서소개</S.NavbarLinkText>
        </S.NavbarInnerContainer>
      </S.NavbarContainer>
    </AnimatePresence>
  );
};
