import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { GiThreeFriends } from "react-icons/gi";
import { BsBrowserEdge } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { PiPottedPlantFill } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { useEffect, useRef } from "react";

export default function Timeline({isMobile, isDesktop, isTV, timelineSectionRef}) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false });
    

    return (
        <TimeLineContentWrapper 
        initial={{ opacity: 0, y: 0 }} 
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        ref={timelineSectionRef}
        >
            
            <StyledArticle 
                
            >
                <h1 ref={ref}>Timeline</h1>
                <StartButton>Start</StartButton>
                <TimeLine>
                    {isMobile ? (
                    <>
                        <TimeLineSection>
                            <Year>2023</Year>
                            <StyledLine $top="0rem" $left 
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.2, duration: 0.4 }}
                            />
                            <StyledDescriptionDiv $top="-50%" $left="-300%" $right="150%"
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                <h2>Friends</h2>
                                <GiThreeFriends />
                                <p>Eine Webapp, um mit Freunden abzustimmen und Treffen zu organisieren.</p>
                            </StyledDescriptionDiv>

                            <StyledLine $top="8rem" $right 
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            />
                            <StyledDescriptionDiv $top="calc(-50% + 6.5rem)" $right="-300%" $left="150%"
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                <h2>Company website</h2>
                                <BsBrowserEdge />
                                <p>Eine Website für ein Unternehmen mit Bewerbungsprozess und Adminbereich.</p>
                            </StyledDescriptionDiv>
                            
                        </TimeLineSection>
                        <TimeLineSection>
                            <Year>2024</Year>
                            <StyledLine $top="0rem" $right 
                                 initial={{ y: 50, opacity: 0 }}
                                 animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                 transition={{ delay: 0.2, duration: 0.4 }}
                            />
                            <StyledDescriptionDiv $top="-50%" $right="-300%" $left="150%"
                                 initial={{ y: 50, opacity: 0 }}
                                 animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                 transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                <h2>Personal Website</h2>
                                <BsBrowserEdge />
                                <p>Eine erste Website um meine bisherigen Projekte vorzustellen.</p>
                            </StyledDescriptionDiv>

                            <StyledLine $top="2rem" $left 
                                 initial={{ y: 50, opacity: 0 }}
                                 animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                 transition={{ delay: 0.3, duration: 0.4 }}
                            />
                            <StyledDescriptionDiv $top="calc(-50% + 2rem)" $left="-300%" $right="150%"
                                 initial={{ y: 50, opacity: 0 }}
                                 animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                 transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                <h2>Camerashop</h2>
                                <FaCamera />
                                <p>Ein Shop indem es möglich sein soll, Videotechnik für einen Zeitraum auszuleihen.</p>
                            </StyledDescriptionDiv>

                            <StyledLine $top="12rem" $right 
                                 initial={{ y: 50, opacity: 0 }}
                                 animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                 transition={{ delay: 0.4, duration: 0.4 }}
                            />
                            <StyledDescriptionDiv $top="calc(-50% + 12rem)" $right="-300%" $left="150%"
                                 initial={{ y: 50, opacity: 0 }}
                                 animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                 transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                <h2>Dreamgame</h2>
                                <IoLogoGameControllerA />
                                <p>Eine Webapp, um die neusten spiele anzuzeigen und ein Tinder-ähnliches Match-System.</p>
                            </StyledDescriptionDiv>

                            <StyledLine $top="16rem" $left
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            />
                            <StyledDescriptionDiv $top="calc(-50% + 16rem)" $left="-300%" $right="150%"
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <h2>Plan-T</h2>
                                <PiPottedPlantFill />
                                <p>Eine Fullstack Webapp mit QR-Code-System für die Pflanzenpflege.</p>
                            </StyledDescriptionDiv>
                        </TimeLineSection>
                        <TimeLineSection>
                            <Year>2025</Year>
                            <StyledLine $top="0" $right 
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            />
                            <StyledDescriptionDiv $top="calc(-50%)" $right="-300%" $left="150%"
                                  initial={{ y: 50, opacity: 0 }}
                                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                  transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                <h2>Jumpa</h2>
                                <PiPottedPlantFill />
                                <p>Eine Webapp für den Gastronomiebereich, um schnell Personal oder Jobs zu finden.</p>
                            </StyledDescriptionDiv>

                            <StyledLine $top="4rem" $left 
                                  initial={{ y: 50, opacity: 0 }}
                                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                  transition={{ delay: 0.7, duration: 0.4 }}
                            />
                            <StyledDescriptionDiv $top="calc(-50% + 4rem)" $left="-300%" $right="150%"
                                  initial={{ y: 50, opacity: 0 }}
                                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                  transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                <h2>Portfolio Website</h2>
                                <AiOutlineProduct />
                                <p>Meine eigene Portfolio-Website, um meine Projekte zu präsentieren.</p>
                            </StyledDescriptionDiv>
                        </TimeLineSection>
                    </>
                    ) : (
                    <>
                        <TimeLineSection
                             
                        >
                            <Year>2023</Year>
                            <TimeLineProjectWrapper $left="10rem" $bottom="4rem"
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                <StyledDescriptionDesktopDiv >
                                    <h2>Friends</h2>
                                    <GiThreeFriends />
                                    <p>Eine Webapp, um mit Freunden abzustimmen und Treffen zu organisieren.</p>
                                </StyledDescriptionDesktopDiv>
                                <StyledDesktopLine />
                            </TimeLineProjectWrapper>

                            <TimeLineProjectWrapper $left="14rem" $top="4rem"
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                <StyledDesktopLine/>
                                <StyledDescriptionDesktopDiv >
                                    <h2>Company website</h2>
                                    <BsBrowserEdge />
                                    <p>Eine Website für ein Unternehmen mit Bewerbungsprozess und Adminbereich.</p>
                                </StyledDescriptionDesktopDiv>
                            </TimeLineProjectWrapper>
                            
                        </TimeLineSection>
                        <TimeLineSection>
                            <Year>2024</Year>
                            <TimeLineProjectWrapper $left="0rem" $bottom="4rem"
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                
                                <StyledDescriptionDesktopDiv>
                                    <h2>Personal Website</h2>
                                    <BsBrowserEdge />
                                    <p>Eine erste Website um meine bisherigen Projekte vorzustellen.</p>
                                </StyledDescriptionDesktopDiv>
                                <StyledDesktopLine />
                            </TimeLineProjectWrapper>

                            <TimeLineProjectWrapper $left="1rem" $top="4rem"
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                <StyledDesktopLine />
                                <StyledDescriptionDesktopDiv>
                                    <h2>Camerashop</h2>
                                    <FaCamera />
                                    <p>Ein Shop indem es möglich sein soll, Videotechnik für einen Zeitraum auszuleihen.</p>
                                </StyledDescriptionDesktopDiv>
                            </TimeLineProjectWrapper>

                            <TimeLineProjectWrapper $left="12rem" $bottom="4rem"
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.5, duration: 0.4 }}
                            >                            
                               
                                <StyledDescriptionDesktopDiv >
                                    <h2>Dreamgame</h2>
                                    <IoLogoGameControllerA />
                                    <p>Eine Webapp, um die neusten spiele anzuzeigen und ein Tinder-ähnliches Match-System.</p>
                                </StyledDescriptionDesktopDiv>
                                <StyledDesktopLine />
                            </TimeLineProjectWrapper>

                            <TimeLineProjectWrapper $left="20rem" $top="4rem"
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                <StyledDesktopLine />
                                <StyledDescriptionDesktopDiv>
                                    <h2>Plan-T</h2>
                                    <PiPottedPlantFill />
                                    <p>Eine Fullstack Webapp mit QR-Code-System für die Pflanzenpflege.</p>
                                </StyledDescriptionDesktopDiv>
                            </TimeLineProjectWrapper>
                        </TimeLineSection>
                        <TimeLineSection>
                            <Year>2025</Year>
                            <TimeLineProjectWrapper $left="0rem" $bottom="4rem"
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.7, duration: 0.4 }}
                            >
                        
                                <StyledDescriptionDesktopDiv>
                                    <h2>Jumpa</h2>
                                    <PiPottedPlantFill />
                                    <p>Eine Webapp für den Gastronomiebereich, um schnell Personal oder Jobs zu finden.</p>
                                </StyledDescriptionDesktopDiv>
                                <StyledDesktopLine/>
                            </TimeLineProjectWrapper>

                            <TimeLineProjectWrapper $left="2rem" $top="4rem"
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                   transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                <StyledDesktopLine />
                                <StyledDescriptionDesktopDiv >
                                    <h2>Portfolio Website</h2>
                                    <AiOutlineProduct />
                                    <p>Meine eigene Portfolio-Website, um meine Projekte zu präsentieren.</p>
                                </StyledDescriptionDesktopDiv>
                            </TimeLineProjectWrapper>
                        </TimeLineSection>
                    </>
                    )}
                </TimeLine>
            </StyledArticle>
        </TimeLineContentWrapper>
    );
}

const TimeLineContentWrapper = styled(motion.section)`
    width: 100%;
    height: 100vh; 
    padding-top: 4rem;
    overflow: hidden; 


    @media (min-width: 768px) {
        padding-top: 0;
    }
`;

const StyledArticle = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;


    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #FFF;
        padding: 0;
        margin-left: 0rem;
    }

    @media (min-width: 768px) {
        position: relative;
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;


        h1 {
            font-size: 4rem;
            margin-left: 10%;
            position: absolute;
            top: 5%;
            left: 5%;
        }
        


    
    }


`;

const TimeLineProjectWrapper = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    position: absolute;
    top: ${({ $top }) => $top};
    left: ${({ $left }) => $left};
    bottom: ${({ $bottom }) => $bottom};


    `;

const StartButton = styled(motion.div)`
    max-width: 1rem;
    max-height: 1rem;
    border-radius: 100%;
    background-color: #05ff00;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
    filter: drop-shadow(8px 7px 15.4px rgba(0, 0, 0, 0.35));
    z-index: 100;

    padding: 3rem;
    margin: 0;


    @media (min-width: 768px) {

    }
`;

const TimeLine = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
    gap: 8rem;
    overflow-y: scroll;
    scrollbar-width: none;
    height: calc(100vh - 6rem);
    background: linear-gradient(90deg, #808082 0%, #50514F 100%);
    background-size: 4rem 100%; 
    background-position: center; 
    background-repeat: no-repeat; 

    @media (min-width: 768px) {
        gap: 10rem;
        flex-direction: row;    
        background-size: 100% 4rem;
        background-position: center; 
        overflow-x: scroll;
        justify-self: center;
        align-self: center;
        margin: 0 0 0 -2rem;
        padding: 0;
        max-width: 80%;
    }
`;

const TimeLineSection = styled(motion.div)`
    position: relative;
    margin-bottom: 10rem;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5rem;
        align-items: center;
        margin: auto;
        
    }
`;

const StyledDescriptionDiv = styled(motion.div)`
    position: absolute;
    top: ${({ $top }) => $top};
    left: ${({ $left }) => $left};
    right: ${({ $right }) => $right};

    max-width: 10rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
   

    h2 {
        font-size: 1rem;
        font-weight: 700;
        color: #FFF;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    p {
        font-size: 0.8rem;
        color: #FFF;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    svg {
        font-size: 2rem;
        color: #FFF;
    }


`;

const StyledDescriptionDesktopDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    min-width: 10rem;
    h2 {
        font-size: 1rem;
        font-weight: 700;
        color: #FFF;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    p {
        font-size: 0.8rem;
        color: #FFF;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    svg {
        font-size: 2rem;
        color: #FFF;
    }

`;




const StyledLine = styled.div`
    width: 1.875rem;
    height: 0.125rem;
    background: #05FF00;
    box-shadow: 0px 0px 6px 0px #05FF00;
    position: absolute;
    top: ${({ $top }) => $top};
    left: ${({ $left }) => ($left ? "-2.1rem" : "auto")};
    right: ${({ $right }) => ($right ? "-2.1rem" : "auto")};

`;


const StyledDesktopLine = styled.div`
    width: 0.125rem;
    height: 3rem;
    background: #05FF00;
    box-shadow: 0px 0px 6px 0px #05FF00;

`;

const Year = styled(motion.p)`
    font-size: 1.5rem;
    font-weight: 700;
    color: #FFF;
    rotate: 90deg;

    @media (min-width: 768px) {
        rotate: 0deg;
        font-size: 2rem;
        margin-left: 1rem;
        position: absolute;
        
    }
`;