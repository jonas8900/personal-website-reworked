import Image from "next/image";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TiltedCard from "../Animations/SpecialCard";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function AboutMe({ aboutmeSectionRef }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      if (animationKey === 0) {
        setAnimationKey(1);
      } else {
        setAnimationKey(0);
      }
    }
  }, [isInView]);

  return (
    <StyledBlackBackground ref={aboutmeSectionRef}>
      <StyledBackground>
        <StyledContentWrapper>
          <StyledTextContainer
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}>
            <StyledIconWrapper
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}>
              <StyledLink href="https://github.com/jonas8900">
                <StyledGithubIcon />
              </StyledLink>
              <StyledLink href="https://www.linkedin.com/in/jonas-dally/">
                <StyledLinkedInIcon />
              </StyledLink>
            </StyledIconWrapper>
            <StyledHeadline>About me</StyledHeadline>
            <div ref={ref}>
              {isInView && (
                <StyledText
                  key={animationKey}
                  sequence={[
                    1000,
                    "Ich arbeite am liebsten mit modernen Web-Technologien wie Next.js und React - vor allem dann, wenn Frontend und Backend sauber zusammenspielen.",
                    1000,
                    "Ich arbeite am liebsten mit modernen Web-Technologien wie Next.js und React - vor allem dann, wenn Frontend und Backend sauber zusammenspielen.\n" +
                      "Im Job bin ich allerdings stark in einer bestehenden PHP-, Less- und Smarty-Codebase unterwegs.",
                    1000,
                    "Ich arbeite am liebsten mit modernen Web-Technologien wie Next.js und React - vor allem dann, wenn Frontend und Backend sauber zusammenspielen.\n" +
                      "Im Job bin ich allerdings stark in einer bestehenden PHP-, Less- und Smarty-Codebase unterwegs.\n" +
                      "Gerade dort habe ich gelernt, pragmatische Lösungen zu bauen und mit gewachsenem Code umzugehen.",
                    1000,
                    "Ich arbeite am liebsten mit modernen Web-Technologien wie Next.js und React - vor allem dann, wenn Frontend und Backend sauber zusammenspielen.\n" +
                      "Im Job bin ich allerdings stark in einer bestehenden PHP-, Less- und Smarty-Codebase unterwegs.\n" +
                      "Gerade dort habe ich gelernt, pragmatische Lösungen zu bauen und mit gewachsenem Code umzugehen.\n" +
                      "Performance, Wartbarkeit und saubere Strukturen sind mir dabei besonders wichtig geworden.",
                    1000,
                    "Ich arbeite am liebsten mit modernen Web-Technologien wie Next.js und React - vor allem dann, wenn Frontend und Backend sauber zusammenspielen.\n" +
                      "Im Job bin ich allerdings stark in einer bestehenden PHP-, Less- und Smarty-Codebase unterwegs.\n" +
                      "Gerade dort habe ich gelernt, pragmatische Lösungen zu bauen und mit gewachsenem Code umzugehen.\n" +
                      "Performance, Wartbarkeit und saubere Strukturen sind mir dabei besonders wichtig geworden.\n" +
                      "Parallel entwickle ich eigene Projekte, in denen ich neue Ideen ausprobiere und Dinge bewusst besser mache.",
                    1000,
                    "Ich arbeite am liebsten mit modernen Web-Technologien wie Next.js und React - vor allem dann, wenn Frontend und Backend sauber zusammenspielen.\n" +
                      "Im Job bin ich allerdings stark in einer bestehenden PHP-, Less- und Smarty-Codebase unterwegs.\n" +
                      "Gerade dort habe ich gelernt, pragmatische Lösungen zu bauen und mit gewachsenem Code umzugehen.\n" +
                      "Performance, Wartbarkeit und saubere Strukturen sind mir dabei besonders wichtig geworden.\n" +
                      "Parallel entwickle ich eigene Projekte, in denen ich neue Ideen ausprobiere und Dinge bewusst besser mache.\n" +
                      "Programmieren ist für mich kein reines Abarbeiten von Aufgaben sondern echtes Interesse daran, wie gute Software entsteht.",
                    3000,
                  ]}
                  speed={80}
                  omitDeletionAnimation={true}
                  style={{
                    fontSize: "1em",
                    display: "block",
                    minHeight: "200px",
                    whiteSpace: "pre-line",
                  }}
                  repeat={0}
                />
              )}
            </div>
          </StyledTextContainer>
          <StyledImageWrapper
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}>
            <TitleCardStyled
              imageSrc="/images/aboutme.webp"
              altText="Jonas Dally - Web Developer"
              captionText="Jonas Dally - Web Developer"
              containerHeight="27rem"
              containerWidth="40rem"
              imageHeight="27rem"
              imageWidth="40rem"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <StyledCardParagraph>
                  Jonas Dally - Web Developer
                </StyledCardParagraph>
              }
            />
          </StyledImageWrapper>
        </StyledContentWrapper>
      </StyledBackground>
    </StyledBlackBackground>
  );
}

const StyledBlackBackground = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const StyledBackground = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const TitleCardStyled = styled(TiltedCard)`
  @media (max-width: 768px) {
    width: 100%;
    max-height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      height: 100%;
    }

    p {
      font-size: 1rem;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledContentWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    width: auto;
    justify-content: auto;
    align-items: flex-start;
    flex-direction: row;
    gap: 6rem;
  }
`;

const StyledIconWrapper = styled(motion.div)`
  position: absolute;
  top: -7rem;
  left: 0;
  background: rgba(123, 123, 123, 0.3);
  box-shadow: 8px 7px 10px 0px rgba(24, 24, 24, 0.25);
  width: 20rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    top: -7rem;
  }
`;

const StyledTextContainer = styled(motion.div)`
  position: relative;
  background: rgba(123, 123, 123, 0.3);
  box-shadow: 8px 7px 10px 0px rgba(24, 24, 24, 0.25);
  width: 25rem;
  height: 20rem;
  display: flex;
  flex-direction: column;

  color: #fff;

  @media (min-width: 768px) {
    width: 36rem;
    height: 30rem;
    padding: 2rem;
  }
`;

const StyledImageWrapper = styled(motion.div)`
  background: rgba(123, 123, 123, 0.3);
  box-shadow: 8px 7px 10px 0px rgba(24, 24, 24, 0.25);
  width: 100%;
  height: 100%;
  max-height: 20rem;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 45rem;
    height: 30rem;
    max-width: 45rem;
    max-height: 30rem;
    align-items: center;
  }
`;

const StyledHeadline = styled.h1`
  text-decoration: underline;
  text-decoration-color: #05ff00;
  font-size: 1.75rem;
  font-weight: 700;
  padding-left: 2rem;
  text-decoration-thickness: 0.2rem;
`;

const StyledText = styled(TypeAnimation)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0rem;
  font-size: 14px !important;

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1.125rem;
  }
`;

const StyledCardParagraph = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-left: 1rem;
  margin-top: 0.5rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const StyledGithubIcon = styled(FaGithub)`
  color: #12d700;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    width: 4rem;
    height: 4rem;
  }
`;

const StyledLink = styled.a`
  width: 4rem;
  height: 4rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLinkedInIcon = styled(FaLinkedin)`
  color: #12d700;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    width: 4rem;
    height: 4rem;
  }
`;
