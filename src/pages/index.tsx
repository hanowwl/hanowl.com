import { useEffect, useRef, useState } from "react";

import { Main } from "src/components/main";
import { MAIN_SECTIONS } from "src/constant";

import * as S from "./styled";

export default function Home() {
  const [isEnd, setIsEnd] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      if (container.scrollHeight - container.scrollTop === container.clientHeight) {
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }
    };

    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(null);
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: false });
    }
    return () => {
      container && container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.MainPageContainer isEnd={isEnd} ref={containerRef}>
      <Main.MainSection />
      <Main.HanowlSection records={MAIN_SECTIONS.HANOWL_RECORDS} />
      <Main.EventSection events={MAIN_SECTIONS.EVENTS} />
      <Main.IntroDeptSection teams={MAIN_SECTIONS.TEAMS_LIST} />
      <Main.QnASection qnaList={MAIN_SECTIONS.QUESTIONS} />
    </S.MainPageContainer>
  );
}
