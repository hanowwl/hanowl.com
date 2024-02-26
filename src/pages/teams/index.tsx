import { useEffect } from "react";

import { useRouter } from "next/router";

import { TEAM_LIST } from "src/constant";

export default function TeamIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.push(`/teams/${TEAM_LIST[0].id}`);
  }, [router]);
}
