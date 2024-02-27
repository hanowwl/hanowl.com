/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useRouter } from "next/router";

import { useRedirectApp } from "src/hooks";

export default function ApplyPage() {
  const { redirectApp } = useRedirectApp();

  const router = useRouter();

  useEffect(() => {
    redirectApp();
    router.push("/");
  }, [router]);
}
