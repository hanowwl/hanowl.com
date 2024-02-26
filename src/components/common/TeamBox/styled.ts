import Image from "next/image";

import { colors } from "src/styles";

import styled from "@emotion/styled";

export const TeamBox = styled.div`
  background-color: ${colors.card};
  padding: 1.4rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  @media screen and (max-width: 767px) {
    row-gap: 0.4rem;
    padding: 1.6rem;
  }
`;

export const TeamBoxLinkIcon = styled(Image)`
  float: right;
  width: 2rem;
  height: 2rem;
`;
export const TeamBoxIcon = styled(Image)`
  width: 4.6rem;
  height: 4.6rem;
  @media screen and (max-width: 767px) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;
