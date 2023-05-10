import styled from "styled-components";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "redux/actions/CoursesAction";
import CartCard from "components/cartComponent/CartCard";


const CartCardComponentListWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
   
  }
`;

function CartCardComponentList({dispatch, coursesData, loading, hasError}) {
  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])
  
  if(loading) return <p>Loading Courses ......</p>
  if(hasError)return<p>Unable to get the courses</p>
  return (
    <CartCardComponentListWrapper>
    
      {coursesData &&
        coursesData.data &&
        coursesData.data.map((course, idx) => {
          const {attributes: {imageUrl: {data: {attributes: {url}}}}} = course
          console.log(course.attributes.name);
          return (
            <CartCard
              key={idx}
              // imgURL={`http://localhost:1337${url}`}
              // imgURL={`https://goge-africaa-backend.onrender.com${url}`}
              imgURL={`https://goge-africa-backend.onrender.com${url}`}
              // imgURL={`https://goge-africa-backend-production.up.railway.app${url}`}
              courseName={course.attributes.name}
            />
          );
        })}
    </CartCardComponentListWrapper>
  );
}


const mapStateToProps = (state) => ({
  coursesData: state.courses.courses,
  loading: state.courses.loading,
  hasError: state.courses.hasError,
});

export default connect(mapStateToProps)(CartCardComponentList) ;
























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
