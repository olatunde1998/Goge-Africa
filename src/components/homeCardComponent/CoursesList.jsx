import { Typography } from "components/Typography";
import styled from "styled-components";

const CourseListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  @media (min-width: 768px) {
  padding-left: 24px;
  display: block;
  }
`;
const CourseBox = styled.div`
  padding: 4px;
  justify-content: center;
  @media (min-width: 768px) {
  padding: 12px;

    }
`;

function CoursesList() {
  return (
    <CourseListWrapper>
      <CourseBox>
        <Typography variant="bodySmallThree">All Courses</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="bodySmallThree">Web Development (2908)</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="bodySmallThree">Designs (11293)</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="bodySmallThree">Photography (2230)</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="bodySmallThree">3d Artist (9808)</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="bodySmallThree">Motion Graphics (8223)</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="bodySmallThree">UI/UX RoadMap (734)</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="bodySmallThree">Sound & Music (1223)</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="bodySmallThree">
          Digital Marketing (382)
        </Typography>
      </CourseBox>
    </CourseListWrapper>
  );
}

export default CoursesList;
