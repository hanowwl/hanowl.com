import React, { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/router";

import { Container, Text } from "src/components";
import { TeamIntroduce } from "src/components/teams";
import { TEAM_LIST } from "src/constant";
import { useQueryParams } from "src/hooks";

import * as S from "./styled";

export default function TeamPage() {
  const route = useRouter();
  const { teamId } = useQueryParams<{ teamId: string }>();

  const [isLoading, setIsLoading] = useState(true);

  const activeTeam = useMemo(() => TEAM_LIST.find((v) => v.id === teamId), [teamId]);

  useEffect(() => {
    setIsLoading(false);
    TEAM_LIST.findIndex((v) => v.id === teamId) === -1 && route.push(`/teams/${TEAM_LIST[0].id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamId]);

  console.log(!isLoading && teamId === TEAM_LIST[0].id);
  return (
    <S.TeamContainer>
      <Container>
        <S.TeamTitleContainer>
          <Text size={3.6} weight={700}>
            현재 모집 중인 부문
          </Text>
          <S.TeamDescription>
            알찬 학교 생활을 보내고 싶나요? 선/후배들과 친해지고 싶나요?
            <br />
            인싸가 되고 싶나요? 그럼 드루와 드루와
          </S.TeamDescription>
        </S.TeamTitleContainer>
        <S.TeamIntroduceContainer>
          <S.TeamList>
            {TEAM_LIST.map(({ id, name }) => (
              <S.TeamItem
                key={id}
                onClick={() => route.push(`/teams/${id}`)}
                isActive={!isLoading && teamId === id}
              >
                {name}
              </S.TeamItem>
            ))}
          </S.TeamList>
          {activeTeam && <TeamIntroduce sections={activeTeam.sections} />}
        </S.TeamIntroduceContainer>
      </Container>
    </S.TeamContainer>
  );
}
