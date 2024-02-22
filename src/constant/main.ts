import { HanowlSectionProps } from "src/components/main/HanowlSection";

export const MAIN_SECTIONS = {
  HANOWL_RECORDS: [
    {
      name: "누적 참여 학생",
      value: { from: 0, to: 29, suffix: "년" },
    },
    {
      name: "매년 진행 행사 수",
      value: { from: 0, to: 4, suffix: "건 +" },
    },
    {
      name: "전체 학생회 인원",
      value: { from: 0, to: 29, suffix: "명" },
    },
    {
      name: "한움 이용자 수",
      value: { from: 0, to: 120, suffix: "명 +" },
    },
  ] as HanowlSectionProps["records"],
};
