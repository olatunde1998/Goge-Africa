import styled from "styled-components";
import LeftContainer from "./LeftContainer";
import RightContainer from "components/signinComponent/RightContainer";

const SignWrapper = styled.div`
  background-color: #fff7df;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
`;

function SigninComponent() {
  return (
    <SignWrapper>
      <LeftContainer />
      <RightContainer />
    </SignWrapper>
  );
}

export default SigninComponent;
