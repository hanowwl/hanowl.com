import Link from "next/link";

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

export const TEAM_TEXT_TO_ID: { [key: string]: TeamId } = {
  공통: "common",
  기능부: "tech",
  홍보부: "design",
  행사기획부: "event",
  안전부: "safety",
  총무부: "account",
  학예체육부: "exercise",
  도서부: "book",
  방송부: "broadcast",
};

export interface TeamSection {
  title: string;
  text?: React.ReactNode;
  list?: string[];
}

export interface TeamItem {
  id: Exclude<TeamId, "common">;
  name: string;
  sections: TeamSection[];
}

export const TEAM_LIST: TeamItem[] = [
  {
    id: "tech",
    name: TEAM_ID_TO_TEXT.tech,
    sections: [
      {
        title: `${TEAM_ID_TO_TEXT.tech} 소개`,
        text: (
          <>
            학생회 기능부는 주로 교내에서 사용할 서비스를 만들어요.
            <br />
            매년 운영되는 한세톤(해커톤), 한세어울림마당(축제) 등에서 사용될 서비스를 만들고
            배포/운영까지 담당해요.
            <br />
            여러 프로젝트에 참여하면서 기획/디자인/개발/운영 모든 단계에 참여하면서, 경험을 쌓을 수
            있어요.
            <br />
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <Link
                href="https://github.com/hanowwl"
                target="_blank"
                rel="noreferrer"
                style={{ color: "unset", fontWeight: 700, textDecoration: "none" }}
              >
                [ 기능부 역대 프로젝트 보기 ]
              </Link>
              <Link
                href="https://github.com/hansei-hanum/hanum-frontend"
                target="_blank"
                rel="noreferrer"
                style={{ color: "unset", fontWeight: 700, textDecoration: "none" }}
              >
                [ 기능부 한움 앱 레포 ]
              </Link>
              <Link
                href="https://github.com/hansei-team/hansei-team-qr-frontend"
                target="_blank"
                rel="noreferrer"
                style={{ color: "unset", fontWeight: 700, textDecoration: "none" }}
              >
                [ 2022 한세어울림마당 서비스 레포 ]
              </Link>
              <Link
                href="https://festival.hansei.team"
                target="_blank"
                rel="noreferrer"
                style={{ color: "unset", fontWeight: 700, textDecoration: "none" }}
              >
                [ 2022 한세어울림마당 서비스 ]
              </Link>
            </div>
            <br />
            <br />
            (여러분이 보고 계신 이 페이지도 기능부가 만들었답니다)
          </>
        ),
      },
      {
        title: "과제 안내",
        text: (
          <>
            기능부에서는 여러분의 실력을 확인하기 위해 과제를 제출 받고 있어요.
            <br />
            과제는 면접 합격 후에 공지될 예정이에요
          </>
        ),
      },
      {
        title: "인재상",
        list: [
          "프로젝트 참여에 적극으로 참여할 수 있는 분",
          "스터디/코드리뷰 등 부서 활동에 적극적으로 참여할 수 있는 분",
          "멘탈이 강한 분",
          "수다쟁이 환영",
        ],
      },
      {
        title: "우대사항",
        list: [
          "프론트엔드/백엔드 개발 경험이 있는 분",
          "직접 서비스 운영 및 배포를 진행해본 경험이 있는 분",
          "Git/Github 등을 사용하여 버전관리 경험을 해본 분",
          "React, React Native, Typescript 등을 사용하여 개발 경험이 있는 분",
          "Python, FastApi 등을 사용하여 개발 경험이 있는 분",
        ],
      },
    ],
  },
  {
    id: "exercise",
    name: TEAM_ID_TO_TEXT.exercise,
    sections: [
      {
        title: `${TEAM_ID_TO_TEXT.exercise} 소개`,
        text: (
          <>
            교내 체육대회 진행을 담당하며, 축제 및 교내 행사에서 주변 환경을 즐거운 분위기로
            조성해요.
          </>
        ),
      },
      {
        title: "인재상",
        list: ["성실하신 분", "운동을 좋아하시는 분"],
      },
      {
        title: "우대사항",
        list: ["중학교 학생회에 참여해 체육대회를 진행해보신 분", "교내 행사에 진심이신 분"],
      },
    ],
  },
  {
    id: "book",
    name: TEAM_ID_TO_TEXT.book,
    sections: [
      {
        title: `${TEAM_ID_TO_TEXT.book} 소개`,
        text: (
          <>
            도서부는 교내 도서관 관리를 담당하며, 다양한 전공 도서와 소설을 관리하고 있어요.
            <br />
            (TMI. 도서부를 담당하시는 선생님은 매우 멋지시고 친절하시답니다 !)
          </>
        ),
      },
      {
        title: "인재상",
        text: (
          <>
            우리 도서부에서는 책을 좋아하고 성실한 친구들을 기다리고 있어요.
            <br />
            이를 위해 도서 분류 번호를 외우고, 전공 도서의 종류를 잘 분류할 수 있는 능력이 필요해요.
            <br />
            또한, 도서관에서는 조용한 분위기를 유지해야 하기 때문에 말 수가 적은 조용한 친구들이
            활약할 수 있답니다.
            <br />
            <br />
            마지막으로, 저희 도서부에서는 선생님과 함께 열심히 일하며, 독서와 문화에 대한 관심을
            높이는 좋은 기회를 제공해요.
            <br />
            도서부에서 함께 일할 열정 넘치는 친구들의 지원을 기다리고 있어요 !
          </>
        ),
      },
    ],
  },
  {
    id: "account",
    name: TEAM_ID_TO_TEXT.account,
    sections: [
      {
        title: `${TEAM_ID_TO_TEXT.account} 소개`,
        text: (
          <>
            총무부는 주로 예산 편성이나 회의록 서기를 담당해요.
            <br />
            매년 운영하는 한세톤(교내 해커톤), 한세어울림마당(축제) 등에서 사용될 예산을 편성하는
            일을 해요.
            <br />
            대의원회의나 학생회 회의에서는 주로 회의록 서기를 담당하고 있어요.
          </>
        ),
      },
      {
        title: "인재상",
        list: [
          "워드나 엑셀 등 문서 작업을 잘 다룰 줄 아시는 분",
          "중학교에서 총무부나 그와 관련된 일을 해보신 분",
          "타자가 빠르신 분",
        ],
      },
    ],
  },
  {
    id: "event",
    name: TEAM_ID_TO_TEXT.event,
    sections: [
      {
        title: `${TEAM_ID_TO_TEXT.event} 소개`,
        text: (
          <>
            행사기획부는 학교에서 진행하는 행사를 맡고 있어요.
            <br />
            매년 학교에서 진행되는 행사 구조와 이벤트를 기획하는 담당해요.
            <br />
            전반적인 행사를 기획하며 진행하는 부서로써, 뿌듯함을 느낄 수 있어요.
            <br />
            행사기획부는 아이디어가 넘치고 자신이 펼처 나가고 싶어하는 것이 많은 친구을 기다리고
            있어요.
          </>
        ),
      },
      {
        title: "인재상",
        list: [
          "많은 의견을 적극적으로 제시하실 수 있는 분",
          "계획적인 생활 패턴을 갖고 계신 분",
          "아이디어가 넘쳐나시는 분",
        ],
      },
      {
        title: "우대사항",
        list: [
          "행사를 기획하고 운영해본 경험이 있으신 분",
          "계획하에 무언가를 해본 경험이 있으신 분",
        ],
      },
    ],
  },
  {
    id: "broadcast",
    name: TEAM_ID_TO_TEXT.broadcast,
    sections: [
      {
        title: `${TEAM_ID_TO_TEXT.broadcast} 소개`,
        text: (
          <>
            방송부는 점심 시간과 각종 교내 행사에서 방송을 담당해요.
            <br />
            매년 진행되는 한세톤, 한세어울림마당 등 교내 행사를 영상으로 기록하고,
            <br /> 무대의 조명 관리 및 음향 장비를 다루며 다양한 경험을 쌓을 수 있어요.
          </>
        ),
      },
      {
        title: "인재상",
        list: ["소통을 잘하시는 분", "책임감이 강한 분", "강한 멘탈을 가지고 계신 분"],
      },
      {
        title: "우대사항",
        list: ["이전에 방송장비를 다뤄본 적이 있는 분", "소통을 잘하시는 분"],
      },
    ],
  },
  {
    id: "design",
    name: TEAM_ID_TO_TEXT.design,
    sections: [
      {
        title: `${TEAM_ID_TO_TEXT.design} 소개`,
        text: (
          <>
            홍보부는 학생들의 창의적인 아이디어와 뛰어난 디자인 능력을 바탕으로,
            <br />
            학생회의 활동과 이벤트를 더욱 화려하고 매력적으로 만드는 역할을 해요.
            <br />
            <br />
            홍보부는 창의적인 아이디어를 가진 학생들이 모여, 다양한 활동과 이벤트를 홍보하며,
            <br />
            더욱 많은 학우들에게 알리는 역할을 해요.
            <br />
            <br />
            우리 홍보부에서는 학생회 홍보물, 현수막, 포스터 등을 제작하며,
            <br />
            학생회의 목표를 달성할 수 있는 다양한 아이디어를 고민하고 제안하고 있어요.
          </>
        ),
      },
      {
        title: "과제 안내",
        text: (
          <>
            홍보부에서는 여러분의 창의력을 확인하기 위해 과제를 제출 받고 있어요
            <br />
            홍보부 과제는 체육대회를 홍보하는 내용을 담고 있는 포스터를 만들고 제출하는 거랍니다
            <br />
            과제 진행 전, 아래 조건들을 꼭 지켜서 만들어주세요
            <br />
            <br />
            <ol start={1} style={{ listStyle: "decimal" }}>
              <li style={{ marginLeft: "2rem" }}>포스터 사이즈는 1080px x 1080px이에요</li>
              <li style={{ marginLeft: "2rem" }}>
                뉴스카드 안에 {"교내스포츠한마당"}이라는 글자가 꼭 들어가야해요
              </li>
            </ol>
          </>
        ),
      },
      { title: "모집 대상", list: ["교내 1-2학년 재학생"] },
      {
        title: "인재상",
        list: ["디자인을 할 줄 아시는 분", "선배와 부담없이 소통할 수 있으신 분"],
      },
      {
        title: "우대사항",
        list: ["디스코드를 할 줄 알고, 카톡을 볼 줄 아시는 분", "컴퓨터가 있으신 분"],
      },
    ],
  },
  {
    id: "safety",
    name: TEAM_ID_TO_TEXT.safety,
    sections: [
      {
        title: `${TEAM_ID_TO_TEXT.safety} 소개`,
        text: (
          <>
            안전부는 매년 운영되는 한세톤(교내 해커톤), 한세어울림마당(축제) 등의 행사에서
            <br />
            학생들을 통솔하고 이끄는 일을 하고 있어요.
            <br />
            또한, 교내 시설물을 관리/담당하는 역할을 맡고 있어요.
          </>
        ),
      },
      {
        title: "인재상",
        list: [
          "자신이 하는 일에 충실한 분",
          "자신이 맡은 일에 책임감이 강한 분",
          "뛰어난 리더쉽을 가지고 있는 분",
        ],
      },
    ],
  },
];
