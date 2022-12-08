import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "components/buttonComponent/Button";

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & button:first-child {
    margin-right: 1rem;
  }
`;

function NavigationBtn() {
  return (
    <NavButtonContainer>
      <Link to="/contributor" style={{ textDecoration: "none" }}>
        <Button>Be a Contributor</Button>
      </Link>
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <Button>Login</Button>
      </Link>
    </NavButtonContainer>
  );
}

export default NavigationBtn;
