import styled from "styled-components";
import TestimonyList from "components/aboutUsComponent/TestimonyList";
import ImageComponent from "components/imageComponents/ImageComponent";


const ImageWrapper = styled.div`
  max-width: 250px;
`;
function Testimony({ rating, comment, imgURL }) {
  return (
    <div>
      <ImageWrapper>
        <ImageComponent src={imgURL} />
      </ImageWrapper>
      <TestimonyList rating={rating} comment={comment} />
    </div>
  );
}

export default Testimony;
