import styled from "styled-components";
import LeftContainer from "components/passwordComponent/LeftContainer";
import RightContainer from "components/passwordComponent/RightContainer";

const PasswordWrapper = styled.div`
  background-color: #fff7df;

  @media (min-width: 768px) {
    display: flex;
    height: 100vh;
  }
`;

function PasswordComponent() {
  return (
    <PasswordWrapper>
      <LeftContainer />
      <RightContainer />
    </PasswordWrapper>
  );
}

export default PasswordComponent;
