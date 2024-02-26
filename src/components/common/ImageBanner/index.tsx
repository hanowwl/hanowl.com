import React from "react";

import { StaticImageData } from "next/image";

import Ticker from "framer-motion-ticker";

import * as S from "./styled";

export interface ImageBannerProps {
  imageGroups: StaticImageData[][];
}

export const ImageBanner: React.FC<ImageBannerProps> = ({ imageGroups }) => {
  return (
    <S.ImageBannerContainer>
      {imageGroups.map((images, i) => (
        <Ticker key={i} direction={i % 2 === 0 ? -1 : 1} duration={34} isPlaying>
          {images.map((image, j) => (
            <S.Image key={j * i} src={image} />
          ))}
        </Ticker>
      ))}
    </S.ImageBannerContainer>
  );
};
