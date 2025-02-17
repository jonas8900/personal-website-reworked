// pages/index.js

import FadeContent from '@/components/Animations/Blur';
import LetterGlitch from '@/components/Animations/LetterGlitch';
import StarsCanvas from '@/components/BackgroundStars/BackgroundStars';
import ButtonFilled from '@/components/Buttons/buttonFilled';
import ButtonOutlined from '@/components/Buttons/buttonOutlined';
import Navigation from '@/components/Navigation/navigation';
import Termi from '@/components/Terminal/Termi';
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

export default function Home({isMobile, isDesktop, isTV}) {
  const [isTermiActive, setIsTermiActive] = useState(false);
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  const projectSectionRef = useRef(null);



  return (
    <>
    <StyledDiv>
      <Navigation 
         isMobile={isMobile} 
         isDesktop={isDesktop} 
         isTV={isTV}
         projectSectionRef={projectSectionRef}
      />
      {isTermiActive && (
        <StyledTermiWrapper>
            <Termi setIsTermiActive={setIsTermiActive}/>
        </StyledTermiWrapper>
      )}
      <HeaderContentWrapper>
        <Header>
          <h1>Jonas Dally</h1>
          {isMobile ? (
            <StyledSecondAnimatedHeadline
              sequence={[
        
                'Frontend Developer',
                10000, 
                'Web Developer',
                10000,
              ]}
              wrapper="div"
              speed={50}
              
              cursor={false}
              repeat={Infinity}
            /> 
          ):(
              <StyledSecondAnimatedHeadline
                sequence={[
                 
                  'Frontend Developer',
                  10000,
                  'Web Developer',
                  10000,
                ]}
                wrapper="div"
                speed={50}
              
                cursor={false}
                repeat={Infinity}
              />
            )}
         
          <p>Warum einfach wenn man auch mich haben kann? Lorem upson dorol lorem derem serum dolar mared interad damaro.</p>
          <ButtonFilled>
             Hilfe
          </ButtonFilled>
          <StyledOutlinedButton >
            Mehr
          </StyledOutlinedButton>
        </Header>
        <ActivateTermi 
          onMouseEnter={() => setIsGlitchActive(true)} 
          onMouseLeave={() => setIsGlitchActive(false)}  
          onClick={() => setIsTermiActive(!isTermiActive)}
          >
            {isGlitchActive ? (
              <>
                <LetterGlitch glitchSpeed={20}/>  
                <p>Aktiviere Terminal</p>
              </>
            ) : (
                <StyledButton>
                  Aktiviere Terminal
                </StyledButton>
            )}

        </ActivateTermi>
      </HeaderContentWrapper>
      </StyledDiv>
      <ProjectContent ref={projectSectionRef}>
        <h2>Projekte</h2>
      </ProjectContent>
      <StarsCanvas />
     </>

  );
}

const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    padding: 0 10% 0 10%;

`;

const StyledTermiWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`;

//Landing Page
const HeaderContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 8rem;
    gap: 10rem;
    position: relative;
    z-index: 10;

    @media (min-width: 768px) {
      flex-direction: row;
      width: 100%;
      display: flex;

      justify-content: space-between;
      align-items: center;
      margin-top: 12rem;
      position: relative;
      z-index: 10;
    }
`;

const Header = styled.div`
  width: 100%;

  h1 {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Poppins';
    color: #12D700;
    text-shadow: 0px 8px 31px #12D700;
  }

  h2 {
    color: #12D700;
    font-family: "Press Start 2P";
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: -0.0875rem;
  }

  p {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 1rem;
    width: 90%;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    width: 60%;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
      width: 70%;
      margin-bottom: 3rem;
    }
  }
`;


const StyledSecondAnimatedHeadline = styled(TypeAnimation)`
  color: #12D700 !important;
  font-family: "Press Start 2P" !important;
  font-size: 1.2rem !important;
  font-weight: 400 !important;
  min-height: 2rem;
  letter-spacing: -0.0875rem !important;

  @media (min-width: 768px) { 
    font-size: 3rem !important;
    min-height: 4rem;
  }
`;



//Projects

const ProjectContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #12D700;
    font-size: 3rem;
  }
`;

const ActivateTermi = styled.span`

    width: 30%;
    height: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;


    p {
        position: absolute;
        top: 50%;
        transform: translateY(-100%);
        width: 100%;
        text-align: center;
    }


`;

const StyledButton = styled(ButtonFilled)`



    z-index: 10;

`;

const StyledOutlinedButton = styled(ButtonOutlined)`
    margin-left: 1rem;
 `;

