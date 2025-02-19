import Link from "next/link";
import styled from "styled-components";
import BurgerMenu from "./burgermenu";
import { useState } from "react";

export default function Navigation({
  isMobile,
  isDesktop,
  isTV,
  projectSectionRef,
    homeSectionRef,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleScrollIntoView(ref) {
    if (ref?.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  return (
    <>
      {isMobile ? (
        <>
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && (
            <StyledMobileNav $isopen={isOpen}>
              <StyledMobileUl>
                <StyledLi>
                  <StyledLink 
                  type="button"
                  onClick={() => handleScrollIntoView(homeSectionRef)}
                  >Home</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink href="#">Skills</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink
                    type="button"
                    onClick={() => handleScrollIntoView(projectSectionRef)}>
                    Projekte
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink href="#">Lebenslauf</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink href="#">Kontakt</StyledLink>
                </StyledLi>
              </StyledMobileUl>
            </StyledMobileNav>
          )}
        </>
      ) : (
        <StyledNav>
          <StyledHeadline>Jonas Dally</StyledHeadline>
          <StyledUl>
            <StyledLi>
              <StyledLink 
                    type="button"
                    onClick={() => handleScrollIntoView(homeSectionRef)}
              >About</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink href="#">Skills</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink 
                type="button" 
                onClick={() => handleScrollIntoView(projectSectionRef)}
              >
                Projekte
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink href="#">Lebenslauf</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink href="#">Kontakt</StyledLink>
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
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  backdrop-filter: ${({ $isopen }) => ($isopen ? "blur(3px)" : "none")};
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
  position: relative;
  z-index: 100;
  padding: 0.6rem;
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

const StyledHeadline = styled.h1`
  font-size: 1.5rem;
`;
