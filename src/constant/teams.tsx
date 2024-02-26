export type TeamId =
  | "common"
  | "tech"
  | "design"
  | "event"
  | "safety"
  | "account"
  | "broadcast"
  | "exercise"
  | "book";

export const TEAM_ID_TO_TEXT: { [key in TeamId]: string } = {
  common: "공통",
  tech: "기능부",
  design: "홍보부",
  event: "행사기획부",
  safety: "안전부",
  account: "총무부",
  exercise: "학예체육부",
  book: "도서부",
  broadcast: "방송부",
};
