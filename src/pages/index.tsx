import { Main } from "src/components/main";
import { MAIN_SECTIONS } from "src/constant";

import * as S from "./styled";

export default function Home() {
  return (
    <S.MainPageContainer>
      <Main.MainSection />
      <Main.HanowlSection records={MAIN_SECTIONS.HANOWL_RECORDS} />
      <Main.QnASection />
    </S.MainPageContainer>
  );
}
