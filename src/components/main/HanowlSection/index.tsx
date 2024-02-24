import React from "react";

import { ImageBanner } from "src/components/common";
import { RecordCard, RecordCardProps } from "src/components/common/";
import { Container, SectionLayout } from "src/components/layouts";
import { MAIN_SECTIONS } from "src/constant";

import * as S from "./styled";

export interface HanowlSectionProps {
  records: RecordCardProps[];
}

export const HanowlSection: React.FC<HanowlSectionProps> = ({ records }) => {
  return (
    <SectionLayout subTitle="학생회 활동" title={`학생회가\n 만들어낸 새로운 모습`} fullWidth>
      <S.HanowlSectionContainer>
        <Container>
          <S.HanowlSectionRecordContainer>
            {records.map(({ name, value }) => (
              <RecordCard key={name} name={name} value={value} />
            ))}
          </S.HanowlSectionRecordContainer>
        </Container>
        <ImageBanner imageGroups={MAIN_SECTIONS.IMAGES} />
      </S.HanowlSectionContainer>
    </SectionLayout>
  );
};
