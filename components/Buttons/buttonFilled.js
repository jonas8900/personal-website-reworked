import styled from "styled-components";

export default function ButtonFilled({ children, className, onClick }) {
  return (
    <StyledButtonFilled className={className} onClick={onClick}>{children}</StyledButtonFilled>
  );
}

const StyledButtonFilled = styled.button`
  border-radius: 0.375rem;
  background: #12d700;
  border: 3px solid #12d700;
  color: #000;
  border: none;
  font-family: "DM Sans";
  font-size: 0.9375rem;
  padding: 0.7rem 2.6rem;
  font-weight: 700;
  letter-spacing: -0.04688rem;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover,
  &:active,
  &:active {
    background-color: rgb(97, 97, 97);
  }
`;
