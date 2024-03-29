import { colors } from "src/styles";

import styled from "@emotion/styled";

export const TeamIntroduceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  & > section:not(:last-child) {
    margin-bottom: 2.8rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const SectionDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.gray};

  @media screen and (max-width: 720px) {
    br {
      content: "";
    }

    br:after {
      content: " ";
    }
  }
`;

export const SectionListUl = styled.ul`
  margin-left: 2rem;
  list-style: inside !important;
`;

export const SectionListItem = styled.li`
  color: ${colors.gray};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
`;
