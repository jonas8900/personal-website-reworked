import { keyframes, css } from "styled-components";


export const blurIn = keyframes`
  0% {

    filter: blur(0);
  }
  100% {

    filter: blur(4px);
  }
`;

export const blurOut = keyframes`
    0% {

        filter: blur(4px);
    }
    100% {

        filter: blur(0);
    }
`;

export const blurInAnimation = css`
    animation: ${blurIn} 0.5s ease forwards;
`;

export const blurOutAnimation = css`
    animation: ${blurOut} 0.5s ease forwards;
`;