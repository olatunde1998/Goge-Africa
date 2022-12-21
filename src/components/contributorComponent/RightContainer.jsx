import { Typography } from "components/Typography";
import styled from "styled-components";
import { Image } from "components/imageComponents/ImageComponent";

const RightContainerWrapper = styled.div`
  background-color: #c4c4c4;
  display: none;

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
const RightContainerBox = styled.div`
`
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
      <RightContainerBox>
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
      </RightContainerBox>
    </RightContainerWrapper>
  );
}

export default RightContainer;
