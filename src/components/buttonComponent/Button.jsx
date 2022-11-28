import styled from "styled-components";

export const ButtonContainer = styled.button`

background: ${props => props.primary ? "white" : "#FF8A00"};
  color: ${props => props.primary ? "#FF8A00" : "white"};

  background-color: "#FF8A00";
  color: "white";
  padding: 0.6rem 2rem;
  min-width: 120px;
  border-radius: 2rem;
  display: block;
  border: none;
  text-decoration: none;
  text-align: center;
`;

function Button({ children }) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
export default Button;
