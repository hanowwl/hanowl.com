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

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <S.MainPageContainer isEnd={isEnd} ref={containerRef}>
      <Main.MainSection />
      <Main.HanowlSection records={MAIN_SECTIONS.HANOWL_RECORDS} />
      <Main.QnASection qnaList={MAIN_SECTIONS.QUESTIONS} />
    </S.MainPageContainer>
  );
}
