import Image from "next/image";
import styled from "styled-components";
import { RiNextjsFill } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { ProjectData } from "@/Data";
import Laptop from "../3DModell/Laptop";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function SingleProjectPage({ isMobile, isDesktop, isTV }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const vieRef = useRef(null);
    const isInView = useInView(vieRef, { once: false });



    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? ProjectData.length - 1 : prevIndex - 1
        );
    };



    return (
        <StyledDiv 
          
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
        >
            <StyledArrowLeft onClick={handlePrev} />
            <AnimatePresence mode="wait"  >
                <StyledSection
                   
                    key={currentIndex}
                    gradient={ProjectData[currentIndex].gradient}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <StyledArticle
                        color={ProjectData[currentIndex].color}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <StyledHeadline>{ProjectData[currentIndex].title}</StyledHeadline>
                        <StyledParagraph>{ProjectData[currentIndex].fullDescription}</StyledParagraph>
                        <StyledIconWrapper>
                            <StyledNextJSIcon />
                            {ProjectData[currentIndex].techStack.map((icon, index) => (
                                <StyledIcon key={index} src={icon.icon} alt={icon.alt} width={100} height={100} />
                            ))}
                        </StyledIconWrapper>
                    </StyledArticle>
                    <StyledImage
                        ref={vieRef}
                        src={ProjectData[currentIndex].image}
                        alt={`Projektbild des Projektes ${ProjectData[currentIndex].title}`}
                        width={5000}
                        height={5000}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    />
                </StyledSection>
            </AnimatePresence>
            <StyledArrowRight onClick={handleNext} />
        </StyledDiv>
    );
}

const StyledDiv = styled(motion.div)`
    position: relative;

    @media (max-width: 768px) {
        height: 100vh;
    }
`;


const StyledArrowLeft = styled(FaArrowLeft)`
    position: absolute;
    left: 0rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: gray;
    }

    @media (min-width: 768px) {
        left: 2rem;
        font-size: 3rem;
    }
`;


const StyledArrowRight = styled(FaArrowRight)`
    position: absolute;
    right: 0rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: gray;
    }

    @media (min-width: 768px) {
        right: 2rem;
        font-size: 3rem;
    }
`;

const StyledSection = styled(motion.section)`
    height: 100%;
    width: 100%;
    background: ${({ gradient }) => gradient};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        min-height: 100vh;
    }
`;

const StyledArticle = styled(motion.article)`
    filter: drop-shadow(8px 7px 10px rgba(0, 0, 0, 0.5));
    width: 100%;
    height: 100%; 
    margin: auto;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;

    @media (min-width: 768px) {
        width: 40rem;
        padding: 3rem 4rem;
        justify-content: space-between;
        min-height: 100vh;
    }
`;

const StyledImage = styled(motion.img)`
    margin-top: 2rem; 
    margin-left: 2rem;
    width: 100%;
    height: 100%;


    @media (min-width: 768px) {
        width: 50%;
        height: 100%;

        object-fit: cover;
        object-position: center;
    }
`;

const StyledHeadline = styled.h1`
    color: #FFF;
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0;

    @media (min-width: 768px) {
        font-size: 4rem;
        width: 50%;
        height: 50%;
    }
`;

const StyledParagraph = styled.p`
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    align-self: center;
    margin-top: 0;
    flex-shrink: 0;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
`;

const StyledIconWrapper = styled.div`
    display: flex; 
    gap: 3rem; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem;
`;

const StyledNextJSIcon = styled(RiNextjsFill)`
    color: black;
    font-size: 2rem;
    transition: all 0.2s ease;

    &:hover {
        font-size: 5rem;
    }

    @media (min-width: 768px) {
        font-size: 4rem;
    }
`;

const StyledIcon = styled(Image)`
    width: 2rem;
    height: 2rem;
    transition: all 0.3s ease;

    &:hover {
        width: 5rem;
        height: 5rem;
    }

    @media (min-width: 768px) {
        width: 4rem;
        height: 4rem;
    }
`;