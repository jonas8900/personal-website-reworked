import { createGlobalStyle } from "styled-components";




export default createGlobalStyle`
 *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Press Start 2P';
    src: url('/fonts/Press_Start_2P/PressStart2P-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Italic.ttf') format('truetype');
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Bold.ttf') format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Italic.ttf') format('truetype');
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'PT Mono';
    src: url('/fonts/PTMono-Regular.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/DM_Sans/static/DMSans_18pt-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'DM Sans';
   src: url('/fonts/DM_Sans/static/DMSans_18pt-Bold.ttf') format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'DM Sans';
   src: url('/fonts/DM_Sans/static/DMSans_18pt-Italic.ttf') format('truetype');
    font-style: italic;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/DM_Sans/static/DMSans_18pt-Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/DM_Sans/static/DMSans_18pt-Medium.ttf') format('truetype');
    font-weight: 500;
  }


  html {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
  }

    body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    color: #EDEDED;
    }

    :root {

    }

`;
