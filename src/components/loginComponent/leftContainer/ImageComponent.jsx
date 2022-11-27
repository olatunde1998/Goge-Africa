import React from "react";
import styled from "styled-components";
// import BrandLogo from "assets/img/Logo.png"

const ImageWrapper = styled.img`
    max-width: 100%;
    height: auto;
    border: 2px solid red;
    width: 250px;
`;

function ImageComponent(){
    return(
        <ImageWrapper src={`${process.env.PUBLIC_URL}/Logo.png`} alt="company logo"/>
    )
}

export default ImageComponent;