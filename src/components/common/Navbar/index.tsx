import React from "react";

import { useRouter } from "next/router";

import * as S from "./styled";
import { Text } from "../Text";

export const Navbar: React.FC = () => {
  const router = useRouter();

  const onTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/");
  };

  return (
    <S.NavbarContainer>
      <S.NavbarInnerContainer>
        <Text size={2.8} weight={700} onClick={onTitleClick}>
          HANOWL
        </Text>
        <S.NavbarLinkTextBox>
          <S.NavbarLinkText href={"/teams"}>부서소개</S.NavbarLinkText>
          <S.NavbarLinkText
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSe3Z0wijuu-unboh6bisdrQkAEiQo4axVYQ-4MWkxY5-vGBmA/viewform?usp=header"
            }
          >
            지원하기
          </S.NavbarLinkText>
        </S.NavbarLinkTextBox>
      </S.NavbarInnerContainer>
    </S.NavbarContainer>
  );
};
