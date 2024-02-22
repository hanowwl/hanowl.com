import React from "react";

import * as S from "./styled";
import { Counter, CounterProps } from "../Counter";
import { Text } from "../Text";

export interface RecordCardProps {
  name: string;
  value: CounterProps;
}

export const RecordCard: React.FC<RecordCardProps> = ({ name, value }) => {
  return (
    <S.RecordCardContainer>
      <Text size={1.8} weight={500}>
        {name}
      </Text>
      <Text size={3} weight={600}>
        <Counter {...value} />
      </Text>
    </S.RecordCardContainer>
  );
};
