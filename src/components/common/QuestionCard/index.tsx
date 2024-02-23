import React, { useEffect, useRef, useState } from "react";

import { QnAIdType } from "src/components/main/QnASection";

import * as S from "./styled";
import { Text } from "../Text";

export interface QuestionCardProps {
  question: string;
  answer: React.ReactNode[];
  id: QnAIdType;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, answer, id }) => {
  const [isQuestionClosed, setIsQuestionClosed] = useState<boolean>(true);
  const answerUlRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const answerElement = answerUlRef.current;
    if (!answerElement) return;

    const { scrollHeight } = answerElement;
    answerElement.style.height = isQuestionClosed ? "0" : `${scrollHeight}px`;
    answerElement.style.visibility = isQuestionClosed ? "hidden" : "visible";
    if (isQuestionClosed) {
      setTimeout(() => {
        answerElement.style.position = "absolute";
      }, 80);
    } else {
      answerElement.style.position = "relative";
    }
  }, [isQuestionClosed]);

  useEffect(() => {
    setIsQuestionClosed(true);
  }, [id]);

  return (
    <S.QuestionCard onClick={() => setIsQuestionClosed((prev) => !prev)}>
      <Text size={2} weight={700}>
        {question}
      </Text>
      <S.QuestionCardList ref={answerUlRef}>
        {answer.map((item, index) => (
          <li key={index}>
            <Text size={1.8} style={{ lineHeight: 1.5 }}>
              {item}
            </Text>
          </li>
        ))}
      </S.QuestionCardList>
    </S.QuestionCard>
  );
};
