import { Typography } from "components/Typography";
import styled from "styled-components";
// import { ImageStyle } from "../imageComponents/ImageComponent";

const RightContainerWrapper = styled.div`
// background-color: #c4c4c4;
background-image: url("/assets/img/wes-hicks-4-EeTnaC1S4-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
display: none;
@media (min-width: 768px) {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
        {/* <ImageStyle src="assets/img/light-img.png" /> */}
      </ImageWrapper>
      <DescriptionWrapper>
        <Typography variant="bodySmallTwo">
          Voluptate id deserunt mollit incididunt sint labore eiusmod. Elit
          officia ex velit velit est mollit.
        </Typography>
      </DescriptionWrapper>
      <PrevNextWrapper>
        {/* <ImageStyle src="assets/img/prev-next.png" /> */}
      </PrevNextWrapper>
    </RightContainerWrapper>
  );
}

export default RightContainer;
