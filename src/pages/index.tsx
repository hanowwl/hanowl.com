import { Main } from "src/components/main";
import { MAIN_SECTIONS } from "src/constant";

export default function Home() {
  return (
    <main>
      <Main.MainSection />
      <Main.HanowlSection records={MAIN_SECTIONS.HANOWL_RECORDS} />
    </main>
  );
}
