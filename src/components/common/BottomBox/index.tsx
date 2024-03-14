import React, { SVGProps, useState } from "react";
import { isDesktop, isIOS } from "react-device-detect";

import Image from "next/image";
import { useRouter } from "next/router";

import { HanumPng } from "src/assets";
import { AppStoreUrl, PlayStoreUrl } from "src/constant";

import { AnimatePresence } from "framer-motion";

import * as S from "./styled";

export interface CloseIconProps extends SVGProps<SVGSVGElement> {}

const CloseIcon: React.FC<CloseIconProps> = ({ ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    {...props}
    viewBox="0 0 512 512"
    height="40px"
    width="40px"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "relative", bottom: "1.2rem", left: "1.2rem" }}
  >
    <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path>
  </svg>
);

export const BottomBox: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);
  const router = useRouter();

  const onBoxClick = () => {
    if (isDesktop) {
      return router.push("/poster");
    } else if (isIOS) {
      return router.push(AppStoreUrl, "_blank");
    } else {
      return router.push(PlayStoreUrl, "_blank");
    }
  };

  const onCloseBoxClick = () => {
    setIsClosed(true);
  };

  if (router.pathname === "/poster" || router.pathname === "/apply") return null;
  return (
    <AnimatePresence>
      {!isClosed && (
        <S.BottomBoxWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <S.BottomBoxContainer>
            <S.BottomBoxContentContainer onClick={onBoxClick}>
              <Image src={HanumPng} alt="한움" quality={100} />
              <S.BottomBoxTextContainer>
                <S.BottomBoxBoldText>학생회에 관심이 있으신가요?</S.BottomBoxBoldText>
                <S.BottomBoxText>
                  교내 통합 플랫폼 한움에서
                  <br />더 많은 정보를 확인하고 지원해보세요!
                </S.BottomBoxText>
              </S.BottomBoxTextContainer>
            </S.BottomBoxContentContainer>
            <CloseIcon onClick={onCloseBoxClick} />
          </S.BottomBoxContainer>
        </S.BottomBoxWrapper>
      )}
    </AnimatePresence>
  );
};
