import styled from "styled-components";
import HeroRedComponent from "components/heroRedComponents/HeroRedComponent";
import { PictureStyle } from "components/pictureComponent/PictureComponent";

const CollaborationContainer = styled.div`
display: flex;
flex-direction: column-reverse;
margin-top: 50px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
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
        <PictureStyle src={imgURL}/>
      </ImageContainer>
      <HeroRedComponent title={title} subtitle={subtitle} />
    </CollaborationContainer>
  );
}

export default CollaborationComponent;
