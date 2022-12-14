import styled from "styled-components";
import HeroRedComponent from "components/heroRedComponents/HeroRedComponent";
import { PictureStyle } from "components/pictureComponent/PictureComponent";

const CreativeTeam = styled.div`
  background-color: #FFF7DF;
  padding-top: 50px;
  padding-bottom: 50px;
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

function CreativeTeamComponent({ title, subtitle, imgURL }) {
  return (
    <CreativeTeam>
      <HeroRedComponent title={title} subtitle={subtitle} />
      <ImageContainer>
        <PictureStyle src={imgURL}/>
      </ImageContainer>
    </CreativeTeam>
  );
}

export default CreativeTeamComponent;
