import styled from "styled-components";
// import ImageComponent from "../imageComponents/ImageComponent";
import HeroRedComponent from "components/heroRedComponents/HeroRedComponent";
import { PictureStyle } from "components/pictureComponent/PictureComponent";

const CollaborationContainer = styled.div`
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

function CollaborationComponent({ title, subtitle, imgURL }) {
  return (
    <CollaborationContainer>
      <ImageContainer>
        {/* <ImageComponent src={imgURL} /> */}
        <PictureStyle src={imgURL}/>
      </ImageContainer>
      <HeroRedComponent title={title} subtitle={subtitle} />
    </CollaborationContainer>
  );
}

export default CollaborationComponent;
