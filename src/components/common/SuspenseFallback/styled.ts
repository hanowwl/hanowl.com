import { colors } from "src/styles";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const pulse = keyframes`
    0% {
        opacity: 0;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const LoadingText = styled.p`
  margin-top: 1.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.text};
  animation: ${pulse} 3s infinite;
`;
