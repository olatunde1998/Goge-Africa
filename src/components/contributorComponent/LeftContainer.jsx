import styled from "styled-components";
import ContributorForm from "components/contributorComponent/ContributorForm";
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
        <PictureStyle src="/assets/img/Logo.png"/>
      </ImageWrapper>
      <FormHeading>
        {/* <Typography variant="bodySmallThree"> */}
        Sign in to your account to continue
        {/* </Typography> */}
      </FormHeading>
      <ContributorForm />
    </LeftContentWrapper>
  );
}

export default LeftContainer;
