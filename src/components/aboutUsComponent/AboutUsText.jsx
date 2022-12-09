import { Typography } from "components/Typography";
import styled from "styled-components";
import Button from "components/buttonComponent/Button";

const AboutTextsContainer = styled.div`
  text-align: left;
  max-width: 420px;
  padding-left: 0.8rem;
  @media (min-width: 768px) {
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 5rem;
  }
`;

function AboutTexts({ title, subtitle }) {
  return (
    <AboutTextsContainer>
      <Typography variant="headingsMedium">{title}</Typography>
      <Typography variant="bodySmallThree">{subtitle}</Typography>
      <Button>Say Hello</Button>
    </AboutTextsContainer>
  );
}

export default AboutTexts;
