import { Typography } from "components/Typography";
import styled from "styled-components";

const HeroTextsContainer = styled.div`
  text-align: left;
  max-width: 320px;
  padding-left: 0.8rem;
  @media (min-width: 768px) {
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 5rem;
  }
`;

function HeroTexts({ title, subtitle }) {
  return (
    <HeroTextsContainer>
      <Typography variant="headingsMedium">{title}</Typography>
      <Typography variant="bodySmallFour">{subtitle}</Typography>
    </HeroTextsContainer>
  );
}

export default HeroTexts;
