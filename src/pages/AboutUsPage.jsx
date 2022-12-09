import AboutUsComponent from "components/aboutUsComponent/AboutUsComponent";
import styled from "styled-components";

const AboutUsPageWrapper = styled.div`
`

function AboutUsPage() {
  return (
    <AboutUsPageWrapper>
      <AboutUsComponent />
    </AboutUsPageWrapper>
  );
}

export default AboutUsPage;
