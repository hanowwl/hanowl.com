import { EventCard, EventCardProps } from "src/components/common";
import { SectionLayout } from "src/components/layouts";
import { useFadeInScroll } from "src/hooks";

import * as S from "./styled";

export interface EventSectionProps {
  events: EventCardProps[];
}

export const EventSection: React.FC<EventSectionProps> = ({ events }) => {
  const { fadeInScroll } = useFadeInScroll();

  return (
    <SectionLayout
      subTitle="학생회 활동"
      title={`학생회는 오늘도\n 학생의 생활을 책임집니다.`}
      fullWidth
      style={{ maxHeight: "100vh" }}
    >
      <S.EventSectionContentContainer {...fadeInScroll({ delay: 0.2 })}>
        {events.map((props, i) => (
          <EventCard key={i} {...props} />
        ))}
      </S.EventSectionContentContainer>
    </SectionLayout>
  );
};
