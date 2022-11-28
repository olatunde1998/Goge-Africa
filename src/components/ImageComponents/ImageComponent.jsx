import React from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

function ImageComponent({ src }) {
  return <Image src={src} />;
}

export default ImageComponent;
