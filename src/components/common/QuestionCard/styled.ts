import { colors } from "src/styles";

import styled from "@emotion/styled";

export const QuestionCard = styled.div`
  width: 100%;
  padding: 1.6rem;
  background-color: ${colors.qnaCard};
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.4rem;
  border-radius: 1.2rem;
  position: relative;
`;

export const QuestionCardList = styled.ul`
  position: absolute;
  overflow: hidden;
  list-style: inside;
  list-style-position: outside;
  & > li {
    margin-left: 2.2rem;
  }
  row-gap: 1rem;
  transition: height 150ms;
`;
