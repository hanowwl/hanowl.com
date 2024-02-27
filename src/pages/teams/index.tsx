import { useEffect } from "react";

import { useRouter } from "next/router";

import { TEAM_LIST } from "src/constant";
import { useQueryParams } from "src/hooks";

export default function TeamsIndex() {
  const { teamId } = useQueryParams<{ teamId: string }>();

  const route = useRouter();

  useEffect(() => {
    if (!teamId) {
      TEAM_LIST.findIndex((v) => v.id === teamId) === -1 && route.push(`/teams/${TEAM_LIST[0].id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamId]);
}
