import styled from "styled-components";
import Card from "components/homeCardComponent/Card";
// import axios from "axios";
// import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "redux/actions/CoursesAction";


const CardComponentListWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 820px;
  }
`;

function CardComponentList({dispatch, coursesData, loading, hasError}) {
  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])
  
  if(loading) return <p>Loading Courses ......</p>
  if(hasError)return<p>Unable to get the courses</p>
  return (
    <CardComponentListWrapper>
      {coursesData &&
        coursesData.data &&
        coursesData.data.map((course, idx) => {
          const {attributes: {imageUrl: {data: {attributes: {url}}}}} = course
          console.log(course.attributes.name);
          return (
            <Card
              key={idx}
              imgURL={`https://goge-africa-backend.onrender.com/${url}`}
              courseName={course.attributes.name}
            />
            // http://localhost:1337
          );
        })}
    </CardComponentListWrapper>
  );
}


const mapStateToProps = (state) => ({
  coursesData: state.courses.courses,
  loading: state.courses.loading,
  hasError: state.courses.hasError,
});

export default connect(mapStateToProps)(CardComponentList) ;
























// function CardComponentList() {
//   function courseData() {
//     axios
//       .get("http://localhost:1337/api/courses/?populate=*")
//       .then((response) => {
//         console.log(response.data);
//         setCourses(response.data);
//       });
//   }
//   const [courses, setCourses] = useState({});
//   useEffect(() => {
//     courseData();
//   }, []);
//   return (
//     <CardComponentListWrapper>
//       {courses &&
//         courses.data &&
//         courses.data.map((course, idx) => {
//           const {attributes: {imageUrl: {data: {attributes: {url}}}}} = course
//           console.log(course.attributes.name);
//           return (
//             <Card
//               key={idx}
//               imgURL={`http://localhost:1337${url}`}
//               courseName={course.attributes.name}
//             />
//           );
//         })}
//     </CardComponentListWrapper>
//   );
// }



// export default CardComponentList;
