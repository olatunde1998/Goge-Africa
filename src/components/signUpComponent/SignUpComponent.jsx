import styled from "styled-components";
import LeftContainer from "./LeftContainer";
import RightContainer from "components/signinComponent/RightContainer";

const SignWrapper = styled.div`
  background-color: #fff7df;

  @media (min-width: 768px) {
    display: flex;
    height: 100vh;
  }
`;

function SignUpComponent() {
  return (
    <SignWrapper>
      <LeftContainer />
      <RightContainer />
    </SignWrapper>
  );
}

export default SignUpComponent;
