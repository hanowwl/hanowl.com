import React, { useMemo, useState } from "react";

import { StaticImageData } from "next/image";

import { QuestionButton } from "src/components/common";
import { SectionLayout } from "src/components/layouts";

import * as S from "./styled";

export type QnAIdType =
  | "common"
  | "tech"
  | "design"
  | "event"
  | "safety"
  | "account"
  | "broadcast"
  | "exercise"
  | "book";

export interface QnAItem {
  question: string;
  answer: string[] | React.ReactNode[];
}

export interface QnAMenuItem {
  text: string;
  id: QnAIdType;
  icon: StaticImageData;
  list: QnAItem[];
}

export interface QnASectionProps {
  qnaList: QnAMenuItem[];
}

export const QnASection: React.FC<QnASectionProps> = ({ qnaList }) => {
  const [isSelected, setIsSelected] = useState<QnAIdType>(qnaList[0].id);
  const questions = useMemo(() => qnaList.find((v) => v.id === isSelected), [qnaList, isSelected]);

  console.log(isSelected);

  const handleSelect = (id: QnAIdType) => {
    setIsSelected(id);
  };

  return (
    <SectionLayout subTitle="자주 묻는 질문" title={`학생회에 대해\n궁금한 점이있으신가요?`}>
      <S.QnASectionButtonContainer>
        {qnaList.map(({ text, icon, id }, index) => (
          <QuestionButton
            key={index}
            text={text}
            icon={icon}
            isSelected={isSelected === id}
            onClick={() => handleSelect(id)}
          />
        ))}
      </S.QnASectionButtonContainer>
    </SectionLayout>
  );
};
