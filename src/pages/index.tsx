import { useEffect } from "react";

import { Main } from "src/components/main";
import { MAIN_SECTIONS } from "src/constant";
import { useCheckAppStore } from "src/store";

import * as S from "./styled";

export default function Home() {
  const { isApp } = useCheckAppStore();

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(null);
    }
  }, []);

  return (
    <S.MainPageContainer isApp={isApp}>
      <Main.MainSection />
      <Main.HanowlSection records={MAIN_SECTIONS.HANOWL_RECORDS} />
      <Main.EventSection events={MAIN_SECTIONS.EVENTS} />
      <Main.IntroDeptSection teams={MAIN_SECTIONS.TEAMS_LIST} />
      <Main.QnASection qnaList={MAIN_SECTIONS.QUESTIONS} />
    </S.MainPageContainer>
  );
}
