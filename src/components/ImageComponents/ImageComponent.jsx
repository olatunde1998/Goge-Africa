import styled from "styled-components";

export const ImageStyle = styled.img`
  max-width: 100%;
  height: auto;
`;
export const AvatarImage = styled(ImageStyle)`
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

function ImageComponent({ src }) {
  return <ImageStyle src={src} alt="" />;
}

export default ImageComponent;
