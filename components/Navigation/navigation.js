import styled from "styled-components";
import BurgerMenu from "./burgermenu";


export default function Navigation({
    isMobile,
    isDesktop,
    isTV,
    projectSectionRef,
    homeSectionRef,
    handleOpenNav,
    isNavOpen,
    setIsNavOpen,
    className,
    aboutmeSectionRef,
    timelineSectionRef,
    singleProjectSectionRef,
    currentIndex,
    setCurrentIndex,
    goToProjectClicked,
}) {

  function handleScrollIntoView(ref, index) {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
      setIsNavOpen(false);

     
      setCurrentIndex(index);  
    }
  }


  return (
    < >
      {isMobile ? (
        <>
          <BurgerMenu isNavOpen={isNavOpen} handleOpenNav={handleOpenNav} setIsNavOpen={setIsNavOpen} />
          {isNavOpen && (
            <StyledMobileNav $isopen={isNavOpen}>
              <StyledMobileUl>
                <StyledLi>
                  <StyledLink 
                  type="button"
                  onClick={() => handleScrollIntoView(homeSectionRef, 0)}
                  >Start</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink 
                  type="button"
                  onClick={() => handleScrollIntoView(aboutmeSectionRef, 1)}
                  >About Me</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink
                    type="button"
                    onClick={() => handleScrollIntoView(projectSectionRef, 2)}>
                    Projekte
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink 
                  type="button"
                  onClick={() => handleScrollIntoView(timelineSectionRef, 3)}
                  >Timeline</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledDownload href="/pdf/Jonas-Dally-Lebenslauf.pdf" download="Jonas-Dally-Lebenslauf">Lebenslauf</StyledDownload>
                </StyledLi>
              </StyledMobileUl>
            </StyledMobileNav>
          )}
        </>
      ) : (
        <StyledNav className={className}>
          <StyledHeadline>Jonas Dally</StyledHeadline>
          <StyledUl>
            <StyledLi>
              <StyledLink 
                    type="button"
                    onClick={() => handleScrollIntoView(homeSectionRef, 0)}
              >Start</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink 
                    type="button"
                    onClick={() => handleScrollIntoView(aboutmeSectionRef, 1)}
              >About me</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink 
                type="button" 
                onClick={() => handleScrollIntoView(projectSectionRef, 2)}
              >
                Projekte
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink 
                type="button" 
                onClick={() => handleScrollIntoView(timelineSectionRef, 3)}
              >
                Timeline
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledDownload href="/pdf/Jonas-Dally-Lebenslauf.pdf" download="Jonas-Dally-Lebenslauf">Lebenslauf</StyledDownload>
            </StyledLi>
          </StyledUl>
        </StyledNav>
      )}
    </>
  );
}

const StyledMobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  z-index: 999;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  backdrop-filter: blur(1px);
`;

const StyledMobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  gap: 1rem;
  position: absolute;
  background-color: black;
  width: 100%;
  padding: 2rem;
  top: 0;
  z-index: 20;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  width: 100%;
  z-index: 100;
  padding: 0 10% 0 10%;
  z-index: 100;
  backdrop-filter: blur(1px);
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

const StyledLi = styled.li`
  border-right: 1px solid #ededed;
  margin-right: 2rem;
  padding-right: 2rem;
`;

const StyledLink = styled.button`
  color: #ededed;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover,
  &:active {
    color: #12d700;
    text-shadow: 3px 4px 7.8px rgba(199, 199, 199, 0.4);
  }
`;

const StyledDownload = styled.a`
  color: #ededed;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover,
  &:active {
    color: #12d700;
    text-shadow: 3px 4px 7.8px rgba(199, 199, 199, 0.4);
  }
`;

const StyledHeadline = styled.h1`
  font-size: 1.5rem;

`;
