import styled from "styled-components";

export default function PageFor3DModell() {
    return (
        <StyledWrapper>
            <StyledHeadline>3D Modell</StyledHeadline>
            <StyledHeadline>3D Modell</StyledHeadline>
            <StyledHeadline>3D Modell</StyledHeadline>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    position: relative; /* Falls das 3D-Modell positioniert ist */
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
`;


const StyledHeadline = styled.h1`
    color: #000;
    font-family: Poppins;
    font-size: 4rem;
    font-weight: 600;
    margin: 0;
    text-align: center;
`;
