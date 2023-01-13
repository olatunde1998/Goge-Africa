import styled from "styled-components";
import TestimonyList from "components/aboutUsComponent/TestimonyList";

const TestimonyWrapper = styled.div`
  margin-right: 20px;
`
function Testimony({ rating, comment }) {
  return (
    <TestimonyWrapper>
      <TestimonyList rating={rating} comment={comment} />
    </TestimonyWrapper>
  );
}

export default Testimony;
