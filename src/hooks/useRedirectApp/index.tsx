import { isIOS } from "react-device-detect";

import { useRouter } from "next/router";

import { AppStoreUrl, PlayStoreUrl } from "src/constant";

export const useRedirectApp = () => {
  const router = useRouter();

  const exeDeepLink = () => {
    const url = "hanum://SelectTeam";
    location.href = url;
  };

  const checkInstallApp = () => {
    function clearTimers() {
      clearInterval(check);
      clearTimeout(timer);
    }

    function isHideWeb() {
      if (document.hidden) {
        clearTimers();
      }
    }
    const check = setInterval(isHideWeb, 200);

    const timer = setTimeout(function () {
      redirectStore();
    }, 8000);
  };

  const redirectStore = () => {
    if (isIOS) {
      router.push(AppStoreUrl, "_blank");
    } else {
      router.push(PlayStoreUrl, "_blank");
    }
  };

  const redirectApp = () => {
    exeDeepLink();
    checkInstallApp();
  };

  return { redirectApp };
};
