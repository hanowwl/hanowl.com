import { useEffect, useMemo, useState } from "react";

import { Container } from "src/components";
import { TeamIntroduce } from "src/components/teams";
import { TEAM_LIST } from "src/constant";
import { useQueryParams } from "src/hooks";

import * as S from "./styled";

export default function TeamPage() {
  const { teamId } = useQueryParams<{ teamId: string }>();

  const [isApp, setIsApp] = useState(false);

  const activeTeam = useMemo(() => TEAM_LIST.find((v) => v.id === teamId), [teamId]);

  useEffect(() => {
    if (window) {
      setIsApp(Boolean(window.isNativeApp));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamId]);

  return (
    <S.TeamContainer isApp={isApp}>
      <Container>
        <S.TeamIntroduceContainer>
          {activeTeam && <TeamIntroduce sections={activeTeam.sections} />}
        </S.TeamIntroduceContainer>
      </Container>
    </S.TeamContainer>
  );
}
