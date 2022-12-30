import styled from "styled-components";
import HeroRedComponent from "components/heroRedComponents/HeroRedComponent";
import { PictureStyle } from "components/pictureComponent/PictureComponent";

const ProfessionalSupportContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
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

function ProfessionalSupportComponent({ title, subtitle, imgURL }) {
  return (
    <ProfessionalSupportContainer>
      <HeroRedComponent title={title} subtitle={subtitle} />
      <ImageContainer>
        <PictureStyle src={imgURL}/>
      </ImageContainer>
    </ProfessionalSupportContainer>
  );
}

export default ProfessionalSupportComponent;
