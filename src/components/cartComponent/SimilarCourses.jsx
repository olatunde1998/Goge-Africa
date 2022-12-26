import styled from "styled-components";
import { Typography } from "components/Typography";
import CartCardComponentList from "components/cartComponent/CartCardComponentList";

const SimilarCoursesWrapper = styled.div``;
const SimilarCoursesBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function SimilarCourses() {
  return (
    <SimilarCoursesWrapper>
      <SimilarCoursesBox>
        <Typography
          style={{ color: "#ff8a00", textAlign: "left", marginLeft: "100px" }}
          variant="bodySmallFour"
        >
          Similar Courses
        </Typography>
        <CartCardComponentList />
      </SimilarCoursesBox>
    </SimilarCoursesWrapper>
  );
}

export default SimilarCourses;
