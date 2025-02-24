import { keyframes, css } from "styled-components";


export const fadeIn = keyframes`
  0% {

    opacity: 0;
  }
  100% {

    opacity: 1;
  }
`;

export const fadeOut = keyframes`
    0% {

        opacity: 1;
    }
    100% {

        opacity: 0;
    }
`;

export const fadeInAnimation = css`
    animation: ${fadeIn} 0.5s ease forwards;
`;

export const fadeOutAnimation = css`
    animation: ${fadeOut} 0.5s ease forwards;
`;