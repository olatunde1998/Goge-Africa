import styled from "styled-components";
// import { ImageStyle } from "../imageComponents/ImageComponent";
import SigninForm from "components/signinComponent/SigninForm";
import { PictureStyle } from "components/pictureComponent/PictureComponent";

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
        {/* <ImageStyle src="/goge-africa/assets/img/Logo.png" /> */}
        <PictureStyle src="/assets/img/Logo.png"/>
      </ImageWrapper>
      <FormHeading>Sign in to your account to continue</FormHeading>
      <SigninForm />
    </LeftContentWrapper>
  );
}

export default LeftContainer;
