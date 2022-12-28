import { Typography } from "components/Typography";
import styled from "styled-components";
import { Image } from "../imageComponents/ImageComponent";

const RightContainerWrapper = styled.div`
  border: 2px solid green;
  background-color: #c4c4c4;
  margin-top: 150px;
  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0px;
  }
`;
const ImageWrapper = styled.div`
  width: 100px;
  margin: 0 auto;
`;
const DescriptionWrapper = styled.div`
  max-width: 300px;
  padding-bottom: 20px;
  margin: 0 auto;
`;
const PrevNextWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;
  margin: 0 auto;
`;

function RightContainer() {
  return (
    <RightContainerWrapper>
      <ImageWrapper>
        <Image src="assets/img/light-img.png" />
      </ImageWrapper>
      <DescriptionWrapper>
        <Typography variant="bodySmallTwo">
          Voluptate id deserunt mollit incididunt sint labore eiusmod. Elit
          officia ex velit velit est mollit.
        </Typography>
      </DescriptionWrapper>
      <PrevNextWrapper>
        <Image src="assets/img/prev-next.png" />
      </PrevNextWrapper>
    </RightContainerWrapper>
  );
}

export default RightContainer;
