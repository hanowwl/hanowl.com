import { EventCard } from "src/components/common";
import { useFadeInScroll } from "src/components/hooks";
import { SectionLayout } from "src/components/layouts";
import { MAIN_SECTIONS } from "src/constant/main";

import * as S from "./styled";

export const EventSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();
  return (
    <SectionLayout
      subTitle="학생회 활동"
      title={`학생회가\n 만들어낸 새로운 모습`}
      hadFadeInAnimation
    >
      <S.EventSectionWrapper {...fadeInScroll({ delay: 0.2 })}>
        <S.EventSectionContentContainer>
          {MAIN_SECTIONS.EVENTS.map(({ title, events, background_img }, i) => (
            <EventCard
              key={i}
              title={title}
              events={events}
              background_img={background_img}
            ></EventCard>
          ))}
        </S.EventSectionContentContainer>
      </S.EventSectionWrapper>
    </SectionLayout>
  );
};
