import styled from "styled-components";
// import ImageComponent from "../imageComponents/ImageComponent";
import HeroRedTexts from "./HeroRedText";

const HeroContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

function HeroRedComponent({ title, subtitle, imgURL }) {
  return (
    <HeroContainer>
      <HeroRedTexts title={title} subtitle={subtitle} />
      <ImageContainer>
        {/* <ImageComponent src={imgURL} /> */}
      </ImageContainer>
    </HeroContainer>
  );
}

export default HeroRedComponent;
