import styled from "@emotion/styled";

export const SectionLayoutContainer = styled.section<{ height?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 4rem;
  padding: 4rem 0;
  height: ${({ height }) => (height ? `${height}` : "auto")};
`;

export const SectionLayoutTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 0.6rem;
`;
