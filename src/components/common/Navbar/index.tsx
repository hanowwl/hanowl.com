import React, { useEffect, useState } from "react";

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

  const onTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.NavbarContainer isScrolled={isScrolled}>
      <S.NavbarInnerContainer>
        <Text size={2.8} weight={700} onClick={onTitleClick}>
          HANOWL
        </Text>
        <S.NavbarLinkText href={"/teams"}>부서소개</S.NavbarLinkText>
      </S.NavbarInnerContainer>
    </S.NavbarContainer>
  );
};
