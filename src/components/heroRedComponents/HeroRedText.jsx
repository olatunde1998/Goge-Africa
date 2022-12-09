import { Typography } from "components/Typography";
import styled from "styled-components";

const HeroTextsContainer = styled.div`
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

function HeroRedTexts({ title, subtitle }) {
  return (
    <HeroTextsContainer>
      <Typography variant="headings">{title}</Typography>
      <Typography variant="bodySmallThree">{subtitle}</Typography>
    </HeroTextsContainer>
  );
}

export default HeroRedTexts;
