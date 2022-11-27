import React from "react";
import AdvertDetails from "components/advertComponents/AdvertDetails";
import AdvertImage from "assets/img/advertImages.png";
import ImageComponent from "components/loginComponent/rightContainer/ImageComponent";
import styled from "styled-components";

const AdvertContainer = styled.div`
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

function AdvertComponent() {
  return (
    <AdvertContainer>
      <AdvertDetails />
      <ImageContainer>
        <ImageComponent src={AdvertImage} />
      </ImageContainer>
    </AdvertContainer>
  );
}

export default AdvertComponent;
