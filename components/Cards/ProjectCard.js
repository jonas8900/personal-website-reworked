import styled from "styled-components";
import { useRef } from "react";
  


export default function ProjectCard({ headline, icon: Icon, description, onClick }) {
 const divRef = useRef(null);
 const spotlightColor = "rgba(255, 255, 255, 0.25)";

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
      };



  return (


        <StyledSection
            ref={divRef}
            onMouseMove={handleMouseMove}
            spotlightColor={spotlightColor}
        >
            <StyledHeadlineWrapper>
                <StyledIcon as={Icon} />
                <h3>{headline}</h3>
            </StyledHeadlineWrapper>
            <StyledParagraph>
                {description}
            </StyledParagraph>
            <StyledButton onClick={onClick}>zum Projekt</StyledButton>
        </StyledSection>

  );
}




const StyledSection = styled.section`
    padding: 2rem;
    background-color: #161616;
    border-radius: 20px;
    box-shadow: 7px 10px 20px 0px rgba(116, 116, 116, 0.15);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-around;
    height: 100%;
    min-height: 18rem;
    width: 100%;


    position: relative;
    overflow: hidden;
    --mouse-x: 50%;
    --mouse-y: 50%;
    --spotlight-color: ${({ spotlightColor }) => spotlightColor};

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%);
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
    }

    &:hover::before,
    &:focus-within::before {
        opacity: 0.6;
    }


    @media (min-width: 768px) {
        min-width: 25rem;
        min-height: 20rem;
        max-width: 25rem;
    }

    @media (min-width: 2000px) {
        min-width: 27rem;
        min-height: 22rem;
        max-width: 27rem;
    }

`;

const StyledHeadlineWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;



    h3 {
        color: #FFF;
        font-family: "DM Sans";
        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing: -0.05rem;
        margin: 0 auto 0 0;

        @media (min-width: 768px) {
            font-size: 2rem;
        }

        @media (min-width: 2000px) {
            font-size: 2.25rem;
        }

    }


`;

const StyledParagraph = styled.p`
    margin: 1rem 0 1rem 0;
    color: #9D9D9D;
    font-family: "DM Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (min-width: 768px) {
        font-size: 1.1rem;
    }

    @media (min-width: 2000x) {
        font-size: 1.2rem;
    }

`;

const StyledIcon = styled.svg`
    width: 2.625rem;
    height: 2.6875rem;
    fill: white;

    @media (min-width: 768px) {
        width: 3.125rem;
        height: 3.125rem;
    }
`;

const StyledButton = styled.button`
    border-radius: 0.875rem;
    background: linear-gradient(180deg, #484848 0%, #161616 100%);
    background-size: 200% 200%;
    background-position: 100% 100%; 
    border: none; 
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: white;
    font-size: 1rem;
    font-family: "DM Sans";
    cursor: pointer;
    transition: background-position 0.5s ease; 
    align-self: flex-end;

    &:hover, &:active {
        background-position: 0% 0%; 
    }

    @media (min-width: 768px) {
        padding: 0.6rem 1.2rem 0.6rem 1.2rem;
        font-size: 1.1rem;
    }

    @media (min-width: 2000px) {
        padding: 0.6rem 1.2rem 0.6rem 1.2rem;
        font-size: 1.2rem;
    }
`;
