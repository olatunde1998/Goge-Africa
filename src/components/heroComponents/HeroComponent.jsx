import HeroTexts from "components/heroComponents/HeroText";
import { PictureStyle } from "components/pictureComponent/PictureComponent";
import styled from "styled-components";

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
        <PictureStyle src={imgURL}/>
      </ImageContainer>
    </HeroContainer>
  );
}

export default HeroComponent;
