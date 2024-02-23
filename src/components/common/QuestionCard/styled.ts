import { colors } from "src/styles";

import styled from "@emotion/styled";

export const QuestionCard = styled.div<{ closed: boolean }>`
  width: 100%;
  padding: 1.6rem;
  background-color: ${colors.qnaCard};
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.4rem;
  border-radius: 1.2rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding-bottom: ${({ closed }) => (closed ? "0" : "1.6rem")};
`;

export const QuestionCardList = styled.ul`
  overflow: hidden;
  list-style: inside;
  list-style-position: outside;
  & > li {
    margin-left: 2.2rem;
  }
  row-gap: 1rem;
  transition: height 200ms;
`;
