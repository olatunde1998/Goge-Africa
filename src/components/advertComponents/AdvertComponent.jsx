import React from "react";
import AdvertDetails from "components/advertComponents/AdvertDetails";
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
        <ImageComponent src={`${process.env.PUBLIC_URL}/assets/img/advertImages.png`} />
      </ImageContainer>
    </AdvertContainer>
  );
}

export default AdvertComponent;
