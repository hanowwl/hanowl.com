import React, { useEffect, useState } from "react";

import * as S from "./styled";
import { Spinner } from "../Spinner";

export interface SuspenseFallbackProps {
  messages?: string[];
  messageInterval?: number;
}

export const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({
  messages = ["데이터를 불러오고 있어요", "잠시만 기다려주세요"],
  messageInterval = 3000,
}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= messages.length - 1) return 0;
        return prev + 1;
      });
    }, messageInterval);

    return () => clearInterval(interval);
  }, [messages, messageInterval]);

  return (
    <S.PageContainer>
      <S.LoadingTextContainer>
        <Spinner size="4rem" border={5} />
        <S.LoadingText>{messages[index]}</S.LoadingText>
      </S.LoadingTextContainer>
    </S.PageContainer>
  );
};
