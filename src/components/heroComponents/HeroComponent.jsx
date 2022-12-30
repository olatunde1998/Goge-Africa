import HeroTexts from "components/heroComponents/HeroText";
import styled from "styled-components";
// import ImageComponent from "../imageComponents/ImageComponent";

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

function HeroComponent({ title, subtitle, imgURL }) {
  return (
    <HeroContainer>
      <HeroTexts title={title} subtitle={subtitle} />
      <ImageContainer>
        {/* <ImageComponent src={imgURL} /> */}
      </ImageContainer>
    </HeroContainer>
  );
}

export default HeroComponent;
