import styled from "styled-components";
// import ImageComponent from "../imageComponents/ImageComponent";
import HeroComponent from "components/heroComponents/HeroComponent";
import { PictureStyle } from "components/pictureComponent/PictureComponent";

const LetBuildContainer = styled.div`
  background-color: #FFC000;
  padding-top: 50px;
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

function LetBuildComponent({ title, subtitle}) {
  return (
    <LetBuildContainer>
      <HeroComponent title={title} subtitle={subtitle} />
      <ImageContainer>
        {/* <ImageComponent src={imgURL} /> */}
        <PictureStyle src="/assets/img/let-build-image.png"/>
      </ImageContainer>
    </LetBuildContainer>
  );
}

export default LetBuildComponent;
