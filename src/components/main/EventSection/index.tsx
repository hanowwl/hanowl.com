import { Text } from "src/components/common";
import { useFadeInScroll } from "src/components/hooks";
import { SectionLayout } from "src/components/layouts";
import { Container } from "src/components/layouts";
import { MAIN_SECTIONS } from "src/constant/main";

import * as S from "./styled";

export const EventSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();
  return (
    <SectionLayout
      subTitle="학생회 활동"
      title={`학생회가\n 만들어낸 새로운 모습`}
      fullWidth
      hadFadeInAnimation
    >
      <S.EventSectionContainer {...fadeInScroll({ delay: 0.2 })}>
        <Container>
          <S.EventSectionContentContainer>
            {MAIN_SECTIONS.EVENTS.map(({ title, events, background_img }, i) => (
              <S.EventSectionContent key={i} src={background_img}>
                <Text size={2.6} weight={600}>
                  {title}
                </Text>
                <br />
                <Text size={1.8} weight={300}>
                  {events}
                </Text>
              </S.EventSectionContent>
            ))}
          </S.EventSectionContentContainer>
        </Container>
      </S.EventSectionContainer>
    </SectionLayout>
  );
};
