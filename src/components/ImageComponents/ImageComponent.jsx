import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const AvatarImage = styled(Image)`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

function ImageComponent({ src }) {
  return <Image src={src} />;
}

export default ImageComponent;
