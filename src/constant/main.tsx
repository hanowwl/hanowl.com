import { HANOWL_IMAGES } from "src/assets";
import * as I from "src/assets";
import { ImageBannerProps } from "src/components/common/ImageBanner";
import { HanowlSectionProps } from "src/components/main/HanowlSection";
import { IntroDeptSectionProps } from "src/components/main/IntroDeptSection";
import { QnASectionProps } from "src/components/main/QnASection";

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

  IMAGES: [HANOWL_IMAGES.slice(0, 5), HANOWL_IMAGES.slice(6)] as ImageBannerProps["imageGroups"],
  INTRO_DEPT: [
    {
      text: "기능부",
      icon: I.TechIcon,
      introFirst: "교내 소프트웨어를",
      introSecond: "만들고 싶다면?",
    },
    {
      text: "홍보부",
      icon: I.DesignIcon,
      introFirst: "학생회와 관련된 디자인을",
      introSecond: "하고 싶다면?",
    },
    {
      text: "행사기획부",
      icon: I.EventIcon,
      introFirst: "학교 행사를",
      introSecond: "기획하고 싶다면?",
    },
    {
      text: "안전부",
      icon: I.SafetyIcon,
      introFirst: "여러 행사에서 학생들의",
      introSecond: "안전을 지키고 싶다면?",
    },
    {
      text: "총무부",
      icon: I.AccountIcon,
      introFirst: "각종 예산안과 회계록을",
      introSecond: "작성하고 싶다면?",
    },
    {
      text: "방송부",
      icon: I.BoardCastIcon,
      introFirst: "방송실 기계를 조작하고",
      introSecond: "방송을 진행하고 싶으면?",
    },
    {
      text: "학예체육부",
      icon: I.ExerciseIcon,
      introFirst: "체육대회를 직접",
      introSecond: "총괄 진행하고 싶으면?",
    },
    {
      text: "도서부",
      icon: I.BookIcon,
      introFirst: "깔끔한 도서관을 위해",
      introSecond: "관리하고 싶으면?",
    },
  ] as IntroDeptSectionProps["IntroList"],
  EVENTS: [
    {
      title: [
        <>
          참가자들의
          <br />
          열정을 북돋습니다
        </>,
      ],
      events: `한세톤 운영`,
      background_img: I.eventPng.Event1Png,
    },
    {
      title: [
        <>
          즐거운 축제를
          <br />
          더욱 즐겁게 만듭니다
        </>,
      ],
      events: `한세어울림한마당 운영`,
      background_img: I.eventPng.Event2Png,
    },
    {
      title: [
        <>
          학생들의
          <br />
          생활을 편리하게 만듭니다
        </>,
      ],
      events: `교내 통합 플랫폼 앱 ‘한움’ 개발`,
      background_img: I.eventPng.Event3Png,
    },
  ],

  QUESTIONS: [
    {
      text: "공통 질문",
      id: "common",
      icon: I.CommonIcon,
      list: [
        {
          question: "여러 동아리를 하고 있는데 학생회에 지원해도 될까요?",
          answer: ["동아리와 무관한 체제로 학생회가 운영되기에 지원하셔도 괜찮아요."],
        },
        {
          question: "어떤 성격의 구성원을 원하시나요?",
          answer: [
            "학생회는 항상 적극적으로 의견을 내고 적극적으로 황동으로 하는 활발한 구성원이 필요해요.",
          ],
        },
        {
          question: "학생회 같은 활동을 해본적이 없는데 괜찮을까요?",
          answer: [
            "저희 학생회는 경험이 부족하더라도 열심히 배우려는 자세를 중요시 하기 때문에 괜찮습니다.",
          ],
        },
      ],
    },
    {
      text: "기능부",
      id: "tech",
      icon: I.TechIcon,
      list: [
        {
          question: "다른 전공동아리와 중복 지원 가능한가요?",
          answer: [
            <>
              학생회와 동아리는 별도로 운영되기에 지원은 가능하지만, 기능부 활동이 어려울 정도로
              동아리에 많이 가입되어 있다면 지원이 어려워요.
              <br />
              본인의 시간을 기능부에 쓰는 데 지장이 없다면, 지원이 가능해요.
            </>,
          ],
        },
        {
          question: "기능부에서는 어떤 걸 만드나요?",
          answer: [
            <>
              학생들의 생활을 돕는 교내 통합 플랫폼 앱, “한움”을 주로 개발해요.
              <br />
              이외에도 한세톤 웹 페이지, 어울림한마당 웹 페이지 등 교내 행사에 필요한 다양한
              소프트웨어의 개발을 진행하고 있어요.
            </>,
          ],
        },
        {
          question: "개발 능력이 어느 정도여야 하나요?",
          answer: [
            <>
              Frontend: TypeScript에 대한 기본적인 이해와, <br className="mobile-only" />
              React에 대한 기본적인 이해가 필요해요.
            </>,
            <>
              Backend: Python의 기본 문법에 더불어 class에 대한 이해와,
              <br className="mobile-only" />
              FastAPI / Flask 프레임워크에 대한 기본적인 이해가 필요해요.
            </>,
          ],
        },
        {
          question: "기능부만의 특별한 합류 절차가 있다는데요?",
          answer: [
            <>
              교내 학생들을 위한 퀄리티 있는 소프트웨어를 제작해야 할 책임이 있는 기능부는 특성상,
              그 무엇보다 개발 능력이 중요해요. <br /> 이러한 개발 능력을 평가하기 위해, 학생회 임원
              1차 면접 이후 내드린 과제를 해결하고 해당 과제에 대한 질문과 응답을 하는 2차
              과제전형과 2차 면접이 있어요.
            </>,
          ],
        },
        {
          question: "기능부에서 개발에 사용하는 기술 스택이 어떻게 되나요?",
          answer: [
            <>
              Frontend 부서에서는 기본적으로 언어는 TypeScript,
              <br className="mobile-only" />
              프레임워크는 React-Native, React를 사용하고 있어요.
            </>,
            <>
              Backend 부서에서는 기본적으로 언어는 Python,
              <br className="mobile-only" />
              프레임워크는 FastAPI (주력) / Flask를 사용하고,
              <br className="mobile-only" />
              데이터베이스는 MariaDB (MySQL)을 사용하고 있어요.
            </>,
          ],
        },
        {
          question: "과제전형 평가 기준이 어떻게 되나요?",
          answer: [
            <>
              지원자님 본인이 전부 이해하고 직접 작성한 코드인지를 가장 중요하게 보고 있어요. 이를
              위해 2차 기술 인터뷰를 진행하는 거에요.
              <br />
              본인이 전부 이해 및 작성한 코드가 맞다고 판단되면, 전반적인 코드의 완성도와 요구사항
              구현도 등을 평가해요.
            </>,
          ],
        },
        {
          question: "앱은 만들어 본 적도 없는데, 괜찮나요?",
          answer: [
            <>
              Frontend에서 사용하는 React-Native는 React와 상당히 유사한 구조를 갖춰, 합격 후
              공부하시면 빠르게 학습하실 수 있을 거에요. <br />
              이외에 앱을 만드는 데 필요한 지식들은, 친절한 선배가 모두 자세히 가르쳐 줄 예정이니
              걱정하지 말고 지원해 주세요.
            </>,
            "Backend는 앱과 웹의 차이가 없다고 봐도 무방해요.",
          ],
        },
      ],
    },
    {
      text: "홍보부",
      id: "design",
      icon: I.DesignIcon,
      list: [
        {
          question: "홍보부에서는 디자인할 때, 어떤 프로그램을 주로 사용하나요?",
          answer: ["포토샵과 피그마를 주로 사용하고 있어요"],
        },
        {
          question: "홍보부에서는 주로 무슨 일을 하나요?",
          answer: [
            "학생회와 관련된 디자인을 주로 맡고 있어요 (포스터, 스티커, 현수막, 미니간판, 명찰 등)",
          ],
        },
      ],
    },
    {
      text: "행사기획부",
      id: "event",
      icon: I.EventIcon,
      list: [
        {
          question: "꼭 기획해본 경험이 있어야 하나요?",
          answer: ["경험이 부족하다면 열심히 배우려는 자세가 중요해요."],
        },
        {
          question: "행기부에 들어가면 무슨 일을 하나요?",
          answer: ["행기부는 학교 행사를 기획하고 일정을 조절하는 역할을 하고 있어요."],
        },
      ],
    },
    {
      text: "안전부",
      id: "safety",
      icon: I.SafetyIcon,
      list: [
        {
          question: "교내 시설물을 관리, 담당한다고 하는데 부담이 있지않을까요?",
          answer: ["전혀 부담 갖지않아도 된다고 생각하며, 편하게 활동하면 되어요"],
        },
        {
          question:
            "여러 행사에서 학생들을 통솔하고 이끈다고 하는데 학생들을 통솔하고 이끄는데에 힘든 점은 없을까요?",
          answer: [
            "대부분의 학생들이 학생회의 지시를 잘 따라주며 협조해주기에 큰 힘든 점은 많이 없어요. 특별한 경우가 아니라면 힘든 점은 많이 없을거라 생각해요.",
          ],
        },
      ],
    },
    {
      text: "총무부",
      id: "account",
      icon: I.AccountIcon,
      list: [
        {
          question: "총무부는 엑셀을 잘해야만 들어올 수 있나요?",
          answer: ["엑셀과 한글은 우대사항이며 잘해야만 들어오는 수 있는 건 아니에요."],
        },
        {
          question: "타자 속도가 꼭 빨라야만 하나요?",
          answer: [
            "총무부는 문서작성과 관련된 일을 많이 하기 때문에 빠르면 좋지만 꼭 빠를 필요는 없어요",
          ],
        },
      ],
    },
    {
      text: "방송부",
      id: "broadcast",
      icon: I.BoardCastIcon,
      list: [
        {
          question: "방송부는 방송 장비를 다 알고있어야 하나요?",
          answer: ["방송 장비에 대한 지식은 우대 사항이며, 몰라도 상관 없어요"],
        },
      ],
    },
    {
      text: "학예체육부",
      id: "exercise",
      icon: I.ExerciseIcon,
      list: [
        {
          question: "학예체육부는 운동에 관심 있어야만 들어갈 수 있나요?",
          answer: ["운동과 상관없이 적극적이고 활동적인 분이라면 누구나 들어올 수 있어요."],
        },
        {
          question: "코로나 상황으로 체육 대회가 처음인데 괜찮을까요?",
          answer: ["처음이여도 멋진 선배들이 도와줄 거에요!"],
        },
      ],
    },
    {
      text: "도서부",
      id: "book",
      icon: I.BookIcon,
      list: [
        {
          question: "도서부에서는 언제 활동을 진행하나요?",
          answer: ["아직 정해진 것은 없지만 주로 점심시간에 활동할 예정입니다."],
        },
        {
          question: "도서부에서는 어떤 성격의 구성원들이 활동하고 있나요?",
          answer: ["친절하고 야사시한 선배들이 기다리고 있으니 많은 지원 부탁드려요"],
        },
      ],
    },
  ] as QnASectionProps["qnaList"],
};
