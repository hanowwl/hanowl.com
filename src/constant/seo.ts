import { DefaultSeoProps } from "next-seo";

export const DEFAULT_SEO: DefaultSeoProps = {
  title: "HANOWL | 학생회 한울",
  description: "한세사이버보안고등학교 학생회 한울 사이트를 지금 만나보세요!",
  canonical: "https://recruit.hanum.us",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://recruit.hanum.us",
    title: "HANOWL | 학생회 한울",
    description: "한세사이버보안고등학교 학생회 한울 사이트를 지금 만나보세요!",
    siteName: "HANOWL | 학생회 한울",
    images: [
      {
        url: "/static/og_thumbnail.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  additionalMetaTags: [
    {
      property: "keywords",
      content: "한세, 한세고, 한세사이버보안고등학교, 한울, 한움, 한세 한울, HANOWL, 한세 도우미",
    },
  ],
};
