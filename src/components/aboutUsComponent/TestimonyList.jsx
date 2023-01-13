import styled from "styled-components";
import { Typography } from "components/Typography";

const TestimonyListWrapper = styled.div`
  max-width: 150px;
`;

function TestimonyList({ rating, comment }) {
  return (
    <TestimonyListWrapper>
      <Typography variant="headingsMedium" style={{lineHeight:"2px"}}>{rating}</Typography>
      <Typography variant="bodySmallFour" style={{textAlign:"center"}}>{comment}</Typography>
    </TestimonyListWrapper>
  );
}

export default TestimonyList;
