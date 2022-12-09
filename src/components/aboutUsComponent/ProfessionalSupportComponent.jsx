import styled from "styled-components";
import ImageComponent from "components/imageComponents/ImageComponent";
import HeroRedComponent from "components/heroRedComponents/HeroRedComponent";

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
        <ImageComponent src={imgURL} />
      </ImageContainer>
    </ProfessionalSupportContainer>
  );
}

export default ProfessionalSupportComponent;