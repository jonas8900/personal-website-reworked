import styled from "styled-components";


export default function ButtonOutlined({ children, className }) {
  return <StyledButtonOutlined className={className}s>{children}</StyledButtonOutlined>;
}

const StyledButtonOutlined = styled.button`
    border-radius: 0.375rem;
    border: 3px solid #12D700;  /* Statt outline */
    background: transparent;
    color: #ffffff;
    font-family: "DM Sans";
    font-size: 0.9375rem;
    padding: calc(0.70rem - 3px) calc(2.6rem - 3px); 
    font-weight: 700;
    letter-spacing: -0.04688rem;
    transition: all 0.2s;
    cursor: pointer;
    box-sizing: border-box; /* Sicherstellen, dass die Border innerhalb bleibt */

    &:hover {
        background-color: rgb(97, 97, 97);
        border: 3px solid rgb(97, 97, 97);
        color: #000;
    }
`;
