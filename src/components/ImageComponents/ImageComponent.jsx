import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const AvatarImage = styled(Image)`
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

function ImageComponent({ src }) {
  return <Image src={src} alt="" />;
}

export default ImageComponent;
