import { useState } from "react";
import styled from "styled-components";

export default function BurgerMenu({ isNavOpen, setIsNavOpen, handleOpenNav }) {

    

    
    return (
        <BurgerMenuWrapper onClick={() => setIsNavOpen(!isNavOpen)}>
            <StyledLine $isopen={isNavOpen} position="top" />
            {!isNavOpen && <StyledLine $isopen={isNavOpen} position="middle" />}
            <StyledLine $isopen={isNavOpen} position="bottom" />
        </BurgerMenuWrapper>
    );
}

const BurgerMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    position: fixed;
    right: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    height: 1.2rem;
    z-index: 9999;
`;

const StyledLine = styled.div`
    width: 2rem;
    height: 3px;
    background-color: white;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;

    ${({ position, $isopen }) => position === "top" && $isopen && `
        transform: translateY(8px) rotate(45deg);
    `}

    ${({ position, $isopen }) => position === "bottom" && $isopen && `
        transform: translateY(-8px) rotate(-45deg);
    `}

    ${({ position }) => position === "middle" && `
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
    `}

    ${({ position, $isopen }) => position === "middle" && $isopen && `
        opacity: 0;
    `}
`;

