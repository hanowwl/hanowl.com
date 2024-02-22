import React from "react";

import Image, { StaticImageData } from "next/image";

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
          {images.map((image, j) => {
            return (
              <Image
                key={j}
                src={image}
                alt=""
                style={{
                  margin: "0 1.5rem 0 1.5rem",
                  borderRadius: "2rem",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                }}
                quality={100}
              />
            );
          })}
        </Ticker>
      ))}
    </S.ImageBannerContainer>
  );
};
