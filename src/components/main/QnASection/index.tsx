import React, { useMemo, useState } from "react";

import { StaticImageData } from "next/image";

import { QnATeamButton, QuestionCard, QuestionCardProps } from "src/components/common";
import { SectionLayout } from "src/components/layouts";
import { TEAM_ID_TO_TEXT, TeamId } from "src/constant";
import { useFadeInScroll } from "src/hooks";
import { useCheckAppStore } from "src/store";

import * as S from "./styled";

export interface QnAMenuItem {
  team: (typeof TEAM_ID_TO_TEXT)[keyof typeof TEAM_ID_TO_TEXT];
  id: TeamId;
  icon: StaticImageData;
  list: QuestionCardProps[];
}

export interface QnASectionProps {
  qnaList: QnAMenuItem[];
}

export const QnASection: React.FC<QnASectionProps> = ({ qnaList }) => {
  const { isApp } = useCheckAppStore();
  const { fadeInScroll } = useFadeInScroll();

  const [isSelected, setIsSelected] = useState<TeamId>(qnaList[0].id);
  const questions = useMemo(() => qnaList.find((v) => v.id === isSelected), [qnaList, isSelected]);

  const handleSelect = (id: TeamId) => {
    setIsSelected(id);
  };

  return (
    <SectionLayout
      subTitle="자주 묻는 질문"
      title={`학생회에 대해\n궁금한 점이 있으신가요?`}
      fullWidth
      style={{ height: "100vh", overflow: "hidden", flex: 1 }}
    >
      <S.QnASectionContainer>
        <S.QnASectionTeamContainer {...fadeInScroll({ delay: 0.2 })}>
          {qnaList.map(({ team: text, icon, id }, index) => (
            <QnATeamButton
              key={index}
              team={text}
              icon={icon}
              isSelected={isSelected === id}
              onClick={() => handleSelect(id)}
            />
          ))}
        </S.QnASectionTeamContainer>
        <S.QnASectionCardContainer {...fadeInScroll({ delay: 0.4 })} isApp={isApp}>
          {questions &&
            questions.list.map((props, index) => (
              <QuestionCard key={index} {...props} id={isSelected} />
            ))}
        </S.QnASectionCardContainer>
      </S.QnASectionContainer>
    </SectionLayout>
  );
};
