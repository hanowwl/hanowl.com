import React from "react";

import { RecordCard, RecordCardProps } from "src/components/common/RecordCard";
import { Container, SectionLayout } from "src/components/layouts";

import * as S from "./styled";

export interface HanowlSectionProps {
  records: RecordCardProps[];
}

export const HanowlSection: React.FC<HanowlSectionProps> = ({ records }) => {
  return (
    <SectionLayout
      subTitle="학생회 활동"
      title={`학생회가\n 만들어낸 새로운 모습`}
      height="100vh"
      fullWidth
    >
      <Container>
        <S.HanowlSectionRecordContainer>
          {records.map(({ name, value }) => (
            <RecordCard key={name} name={name} value={value} />
          ))}
        </S.HanowlSectionRecordContainer>
      </Container>
      <div>
        <h1>dkd rlahfld~~</h1>
      </div>
    </SectionLayout>
  );
};
