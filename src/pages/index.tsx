import { useEffect, useRef } from "react";

import { Main } from "src/components/main";
import { MAIN_SECTIONS } from "src/constant";
import { useCheckAppStore } from "src/store";

import * as S from "./styled";

export default function Home() {
  const teamsRef = useRef<HTMLElement>(null);
  const { isApp } = useCheckAppStore();

  const onScroll = () => {
    if (teamsRef.current) {
      const height = teamsRef.current.clientHeight;
      const { top } = teamsRef.current.getBoundingClientRect();
      if (top < -(height / 4.5)) {
        teamsRef.current.style.scrollSnapAlign = "end";
      } else {
        teamsRef.current.style.scrollSnapAlign = "start";
      }
    }
  };

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(null);
    }
  }, []);

  return (
    <S.MainPageContainer isApp={isApp} onScroll={onScroll}>
      <Main.MainSection />
      <Main.HanowlSection records={MAIN_SECTIONS.HANOWL_RECORDS} />
      <Main.EventSection events={MAIN_SECTIONS.EVENTS} />
      <section ref={teamsRef}>
        <Main.TeamsSection teams={MAIN_SECTIONS.TEAMS_LIST} />
      </section>
      <Main.QnASection qnaList={MAIN_SECTIONS.QUESTIONS} />
    </S.MainPageContainer>
  );
}
