import { StaticImageData } from "next/image";

import * as S from "./styled";
import { Text } from "../Text";

export interface EventCardProps {
  title: React.ReactNode;
  events: string;
  background_img: StaticImageData;
}

export const EventCard: React.FC<EventCardProps> = ({ title, events, background_img }) => {
  return (
    <S.EventCard src={background_img}>
      <Text size={2.8} weight={600}>
        {title}
      </Text>
      <Text size={1.8} weight={300}>
        {events}
      </Text>
    </S.EventCard>
  );
};
