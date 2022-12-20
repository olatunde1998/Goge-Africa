import styled from "styled-components";
import { Typography } from "components/Typography";

const TestimonyListWrapper = styled.div`
  max-width: 150px;
`;

function TestimonyList({ rating, comment }) {
  return (
    <TestimonyListWrapper>
      <Typography variant="headingsMedium">{rating}</Typography>
      <Typography variant="bodySmallFour">{comment}</Typography>
    </TestimonyListWrapper>
  );
}

export default TestimonyList;
