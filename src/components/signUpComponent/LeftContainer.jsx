import styled from "styled-components";
import { Image } from "components/imageComponents/ImageComponent";
import SignUpForm from "components/signUpComponent/SignUpForm";

const LeftContentWrapper = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    margin-top: auto;
    padding: 0px;
    margin-bottom: auto;
  }
`;
const FormHeading = styled.div`
  color: grey;
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const ImageWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`;

function LeftContainer() {
  return (
    <LeftContentWrapper>
      <ImageWrapper>
        <Image src="/assets/img/Logo.png" />
      </ImageWrapper>
      <FormHeading>Sign in to your account to continue</FormHeading>
      <SignUpForm />
    </LeftContentWrapper>
  );
}

export default LeftContainer;
