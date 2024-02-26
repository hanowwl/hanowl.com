import { EventSection } from "./EventSection";
import { HanowlSection } from "./HanowlSection";
import { TeamsSection } from "./TeamsSection";
import { MainSection } from "./MainSection";
import { QnASection } from "./QnASection";

export const Main = Object.assign(
  {},
  { MainSection, HanowlSection, QnASection, IntroDeptSection: TeamsSection, EventSection },
);
