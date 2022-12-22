import React from "react";
import styled from "styled-components";
import { Typography } from "components/Typography";
import CartCardComponentList from "components/cartComponent/CartCardComponentList";

const SimilarCoursesWrapper = styled.div`
`;

function SimilarCourses() {
  return (
    <SimilarCoursesWrapper>
      <Typography
        style={{  color: "#ff8a00", textAlign:"left" , marginLeft: "30px" }}
        variant="bodySmallFour"
      >
        Similar Courses
      </Typography>
      <CartCardComponentList/>
    </SimilarCoursesWrapper>
  );
}

export default SimilarCourses;
