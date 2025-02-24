
import { blurInAnimation, blurOutAnimation } from "@/components/Animations/blurAnimation";
import LetterGlitch from "@/components/Animations/LetterGlitch";
import StarsCanvas from "@/components/BackgroundStars/BackgroundStars";
import ButtonFilled from "@/components/Buttons/buttonFilled";
import ButtonOutlined from "@/components/Buttons/buttonOutlined";
import Navigation from "@/components/Navigation/navigation";
import AboutMe from "@/components/Pages/aboutme";
import LandingPage from "@/components/Pages/Landingpage";
import ProjectPage from "@/components/Pages/Projectpage";
import SingleProjectPage from "@/components/Pages/SingleProjectPage";
import Termi from "@/components/Terminal/Termi";
import { ProjectData } from "@/Data";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Home({ isMobile, isDesktop, isTV }) {
  const [isTermiActive, setIsTermiActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const projectSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const aboutmeSectionRef = useRef(null);
  const sectionsRef = useRef([]);
  const currentIndex = useRef(0); 
  let isThrottling = useRef(false); 

  useEffect(() => {
    function handleScroll(event) {
      if (isTermiActive) return;
  
      event.preventDefault(); 
 
      if (isThrottling.current) {
        return;
      }

      isThrottling.current = true;
      const sections = sectionsRef.current;

      setTimeout(() => {
        const direction = event.deltaY > 0 ? 1 : -1;
      
  
        if (direction > 0 && currentIndex.current < sections.length - 1) {
          currentIndex.current += 1;
        } else if (direction < 0 && currentIndex.current > 0) {
          currentIndex.current -= 1;
        }
  
        window.scrollTo({
          top: sections[currentIndex.current].offsetTop,
          behavior: "smooth",
        });
  
        isThrottling.current = false;
      }, 500); 
    }
    console.log(currentIndex);
  
    window.addEventListener("wheel", handleScroll, { passive: false });
 
    return () => window.removeEventListener("wheel", handleScroll);

  }, [isTermiActive, sectionsRef, isThrottling, currentIndex]); 
  


  useEffect(() => {
    if (isTermiActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isTermiActive]);

  function handleOpenTermi() {
    setIsMounted(!isMounted);
    if (!isTermiActive) {
      setIsTermiActive(true);
    }
  }

  function handleOpenNav() {
    setIsMounted(!isMounted);
    if (!isNavOpen) {
      setIsNavOpen(true);
    }
  }



  return (
    <StyledContentWrapper $istermiactive={isTermiActive} ref={homeSectionRef}>
      {isTermiActive && (
        <StyledTermiWrapper>
          <Termi
            setIsTermiActive={setIsTermiActive}
            isMobile={isMobile}
            isDesktop={isDesktop}
            isTV={isTV}
            handleOpenTermi={handleOpenTermi}
            isTermiActive={isTermiActive}
            isMounted={isMounted}
            setIsMounted={setIsMounted}
          />
        </StyledTermiWrapper>
      )}
       <div ref={(event) => (sectionsRef.current[0] = event)}>
        <StyledDiv 
        animationstate={isMounted ? "fadeIn" : "fadeOut"}
        $ismobile={isMobile}
        >
          
          <StyledNavigation
            isMobile={isMobile}
            isDesktop={isDesktop}
            isTV={isTV}
            projectSectionRef={projectSectionRef}
            homeSectionRef={homeSectionRef}
            aboutmeSectionRef={aboutmeSectionRef}
            handleOpenNav={handleOpenNav}
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            setIs
          />
        
            <LandingPage
              isMobile={isMobile}
              isDesktop={isDesktop}
              isTV={isTV}
              handleOpenTermi={handleOpenTermi}
              animationstate={isMounted ? "fadeIn" : "fadeOut"}
            />
          
        </StyledDiv>
      </div>
      <div ref={(event) => (sectionsRef.current[1] = event)}>
        <AboutMe aboutmeSectionRef={aboutmeSectionRef}/>
      </div>
      <div ref={(event) => (sectionsRef.current[2] = event)}>
        <ProjectPage
          isMobile={isMobile}
          isDesktop={isDesktop}
          isTV={isTV}
          projectSectionRef={projectSectionRef}
          projectData={ProjectData}
        />
      </div>
      <div ref={(event) => (sectionsRef.current[3] = event)}>
        <SingleProjectPage
          isMobile={isMobile}
          isDesktop={isDesktop}
          isTV={isTV}
          projectSectionRef={projectSectionRef}
          projectData={ProjectData}
        />
      </div>
      <StarsCanvas />
    </StyledContentWrapper>
  );
}

const StyledContentWrapper = styled.div`
  max-height: ${({ $istermiactive }) => ($istermiactive ? "100vh" : "100%")};
  overflow: hidden;
`;

const StyledDiv = styled.div`
  ${({ animationstate, $ismobile }) => $ismobile ? null  : animationstate === "fadeIn"  && blurInAnimation}
  ${({ animationstate, $ismobile  }) => $ismobile ? null :  animationstate === "fadeOut" && blurOutAnimation}
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  padding: 0 10% 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledTermiWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 100%;

    @media (min-width: 768px) {
    width: 50%;
    top: 50%;
  }
`;

const StyledNavigation = styled(Navigation)`
  position: absolute;
  top: 0;
`;
