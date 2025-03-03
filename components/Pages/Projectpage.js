import Image from "next/image";
import styled from "styled-components";
import { ProjectData } from "@/Data";
import ProjectCard from "../Cards/ProjectCard";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


export default function ProjectPage({  projectSectionRef, setProjectPageIndex, setGoToProjectClicked }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });


  function handleChangePages(index) {
    setProjectPageIndex(index);
    setGoToProjectClicked(true);
  }

  return (
      <ProjectContent 
        initial={{ opacity: 0, y: 0 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.4 }}
        ref={projectSectionRef}
      >

        <ProjectHeadlineWrapper 
        
        >
            <h2  >Projekte</h2>
            <Image src="/images/plants.jpg" alt="Projektbild" width={4900} height={4900} loading='lazy'/>
        </ProjectHeadlineWrapper>
        <ProjectCards
          ref={ref}
          initial={{ y: 0, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }} 

        >
        {ProjectData.map((project, index) => (
            <ProjectCard 
                key={project.id}
                headline={project.title}
                icon={project.icon}
                description={project.description}
                onClick={() => handleChangePages(index)}
            />
        ))}
        </ProjectCards>   
    </ProjectContent>
  );
}



//Projects

const ProjectContent = styled(motion.section)`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-top: 4rem;

    @media  (min-width: 768px) {
        padding-top: 0;

    }
`;

const ProjectHeadlineWrapper = styled(motion.div)`
  position: relative;

  max-height: 6rem;
  background: linear-gradient(89deg,rgb(0, 0, 0) 100%,rgb(61, 61, 61) 100%);
  /* box-shadow: 3px 4px 72.5px 2px rgba(116, 116, 116, 0.2); */
  @media  (min-width: 768px) {
      max-height: 8rem;
    }

  h2 {
    position: absolute;
    font-family: 'Poppins';
    font-size: 2rem;
    color: white;
    margin-left: 1rem;
    margin-top: 1rem;
    z-index: 100;
    @media  (min-width: 768px) {
      margin-left: 10%;
      margin-top: 2rem;
      font-size: 3rem;
    }

  }

  img {
    width: 100%;
    height: auto;
    max-height: 6rem;
    object-fit: cover;
    opacity: 0.4;

    @media  (min-width: 768px) {
      max-height: 8rem;
    }
  }

`;


const ProjectCards = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 4rem auto 4rem auto;
  padding-left: 1rem;
  padding-right: 1rem;


  @media  (min-width: 768px) {
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: space-around;
    align-items: center;
    width: fit-content;
    margin: 1rem auto;
    gap: 4rem;
  }

  @media (min-width: 2000px) {
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: space-around;
    align-items: center;
    width: fit-content;
    margin: 8rem auto;
    gap: 8rem;
  }

`;