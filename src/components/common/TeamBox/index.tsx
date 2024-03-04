import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";

import { TEAM_ID_TO_TEXT, TEAM_TEXT_TO_ID } from "src/constant";
import { useCheckAppStore } from "src/store";

import * as I from "src/assets";
import * as S from "./styled";
import { Text } from "../Text";

export interface TeamBoxCustomProps {
  team: (typeof TEAM_ID_TO_TEXT)[keyof typeof TEAM_ID_TO_TEXT];
  description: React.ReactNode;
  icon: StaticImageData;
}

export type TeamBoxProps = TeamBoxCustomProps & React.HTMLAttributes<HTMLDivElement>;

export const TeamBox: React.FC<TeamBoxProps> = ({ team, icon, description, ...props }) => {
  const { isApp } = useCheckAppStore();
  const route = useRouter();

  const onClick = () => {
    if (window.ReactNativeWebView && isApp) {
      window.ReactNativeWebView.postMessage(TEAM_TEXT_TO_ID[team]);
    } else {
      route.push(`/teams/${TEAM_TEXT_TO_ID[team]}`);
    }
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) return;

    let animationFrameId: number;
    const stars: { x: number; y: number; size: number; speed: number }[] = [];

    const createStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 3,
        speed: Math.random() * 2 + 1,
      };
    };

    const initStars = () => {
      for (let i = 0; i < 50; i++) {
        stars.push(createStar());
      }
    };

    const updateStars = () => {
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y + star.size);
        ctx.lineTo(star.x + star.size, star.y);
        ctx.lineTo(star.x, star.y - star.size);
        ctx.lineTo(star.x - star.size, star.y);
        ctx.closePath();
        ctx.fill();
      });
    };

    const animate = () => {
      updateStars();
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    if (team === "기능부") {
      initStars();
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [team]);

  return (
    <S.TeamBox {...props} onClick={onClick} style={{ position: "relative" }}>
      {team === "기능부" && (
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", width: "96%", height: "90%" }}
        ></canvas>
      )}
      <S.TeamBoxIcon src={icon} alt={team} quality={100} />
      <Text size={1.8}>{team}</Text>
      <Text size={2.4} weight={700}>
        {description}
        <S.TeamBoxLinkIcon src={I.ArrowIcon} alt={team} quality={100} />
      </Text>
    </S.TeamBox>
  );
};
