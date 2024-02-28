import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }
    
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }   
`;

export const Spinner = styled.svg<{ size: string; border: number; color: string }>`
  width: ${(props) => `${props.size}`};
  height: ${(props) => `${props.size}`};
  animation: ${rotate} 2s linear infinite;
  transform-origin: center center;

  circle {
    stroke-width: ${(props) => props.border};
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    stroke-linecap: round;
    stroke: ${(props) => props.color};
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
