import styled from "styled-components";
import ImageComponent from "components/imageComponents/ImageComponent";
import HeroRedComponent from "components/heroRedComponents/HeroRedComponent";

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
        <ImageComponent src={imgURL} />
      </ImageContainer>
      <HeroRedComponent title={title} subtitle={subtitle} />
    </CollaborationContainer>
  );
}

export default CollaborationComponent;
