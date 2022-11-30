import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) => (props.primary ? "white" : "#FF8A00")};
  color: ${(props) => (props.primary ? "#FF8A00" : "white")};
  
  background-color: "#FF8A00";
  color: "white";
  padding: 0.6rem 2rem;
  min-width: 120px;
  border-radius: 1.8rem;
  display: block;
  border: none;
  text-decoration: none;
  text-align: center;
`;
export const LargeButtonContainer = styled(ButtonContainer)`
  min-width: 26rem;
  padding: 1.3rem 2.2rem;
  border-radius: 1.6rem;
  @media (max-width: 750px) {
    min-width: 18rem;
  }
`;

function Button({ children }) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
export default Button;
