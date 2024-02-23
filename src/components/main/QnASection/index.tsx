import React, { useMemo, useState } from "react";

import { StaticImageData } from "next/image";

import { QnATeamButton } from "src/components/common";
import { QuestionCard, QuestionCardProps } from "src/components/common/QuestionCard";
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

export interface QnAMenuItem {
  text: string;
  id: QnAIdType;
  icon: StaticImageData;
  list: QuestionCardProps[];
}

export interface QnASectionProps {
  qnaList: QnAMenuItem[];
}

export const QnASection: React.FC<QnASectionProps> = ({ qnaList }) => {
  const [isSelected, setIsSelected] = useState<QnAIdType>(qnaList[0].id);
  const questions = useMemo(() => qnaList.find((v) => v.id === isSelected), [qnaList, isSelected]);

  const handleSelect = (id: QnAIdType) => {
    setIsSelected(id);
  };

  return (
    <SectionLayout subTitle="자주 묻는 질문" title={`학생회에 대해\n궁금한 점이있으신가요?`}>
      <S.QnASectionContainer>
        <S.QnASectionTeamContainer>
          {qnaList.map(({ text, icon, id }, index) => (
            <QnATeamButton
              key={index}
              text={text}
              icon={icon}
              isSelected={isSelected === id}
              onClick={() => handleSelect(id)}
            />
          ))}
        </S.QnASectionTeamContainer>
        <S.QnASectionCardContainer>
          {questions &&
            questions.list.map((props, index) => (
              <QuestionCard key={index} {...props} id={isSelected} />
            ))}
        </S.QnASectionCardContainer>
      </S.QnASectionContainer>
    </SectionLayout>
  );
};
