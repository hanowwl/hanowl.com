/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { isIOS } from "react-device-detect";

import { useRouter } from "next/router";

import { AppStoreUrl, PlayStoreUrl } from "src/constant";

export default function ApplyPage() {
  const router = useRouter();

  useEffect(() => {
    if (isIOS) {
      router.push(AppStoreUrl, "_blank");
    } else {
      router.push(PlayStoreUrl, "_blank");
    }
    router.push("/");
  }, [router]);
}
