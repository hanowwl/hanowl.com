import React from "react";

import { Text } from "src/components/common";
import { TeamSection } from "src/constant";
import { colors } from "src/styles";

import * as S from "./styled";

interface TeamIntroduceProps {
  sections: TeamSection[];
}

export const TeamIntroduce: React.FC<TeamIntroduceProps> = ({ sections }) => {
  return (
    <S.TeamIntroduceContainer>
      {sections.map(({ title, text, list }) => {
        return (
          <section key={title}>
            <S.SectionTitle>{title}</S.SectionTitle>

            {text && <S.SectionDescription>{text}</S.SectionDescription>}
            {list && (
              <S.SectionListUl>
                {list.map((item, i) => (
                  <Text size={1.6} key={i} color={colors.gray}>
                    {item}
                  </Text>
                ))}
              </S.SectionListUl>
            )}
          </section>
        );
      })}
    </S.TeamIntroduceContainer>
  );
};
