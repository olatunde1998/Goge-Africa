import Card from "components/cardComponentList/Card";
import styled from "styled-components";
// import axios from "axios";
// import { useState } from "react";
import { useEffect } from "react";
import { fetchBlogs } from "redux/actions/blogAction";
import { connect } from "react-redux";


const CardComponentListWrapper = styled.div`
  margin: 5rem 0;
`;

const bgColors = ["primary", "secondary", "tertiary"];

function CardComponentList({ dispatch, loading, blogsData, hasError }) {
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  console.log(blogsData, "============kiii")
  if(loading) return <p>Loading blogs .......</p>
  if(hasError) return<p> Unable to display blogs !!!</p>
  return (
          <CardComponentListWrapper>
            {blogsData && blogsData.data &&
              blogsData.data.map((blogData, idx) => {
                const bgIndex = idx % bgColors.length;
                const {attributes: {imageUrl: {data: {attributes: {url}}}}} = blogData
    
                return (
                  <Card
                    key={idx}
                    // imgURL={`http://localhost:1337${url}`}
                    imgURL={`https://goge-africa-backend-production.up.railway.app${url}`}
                    // imgURL={`https://goge-africa-backend.onrender.com${url}`}
                    author={blogData.attributes.author}
                    description={blogData.attributes.content}
                    date={blogData.attributes.date}
                    headings={blogData.attributes.title}
                    bg={bgColors[bgIndex]}
                  />
                );
              })}
          </CardComponentListWrapper>
        );
  
}
const mapStateToProps = (state) => ({
  blogsData: state.blogs.blogs,
  loading: state.blogs.loading,
  hasError: state.blogs.hasError,
});

export default connect(mapStateToProps)(CardComponentList);























// function CardComponentList() {
//   function strapiData(){
//     axios.get("http://localhost:1337/api/blog-articles/?populate=*")
//       .then((response)=>{
//         console.log(response.data)
//         setBlogDatas(response.data)
//       })
//   }
//   const [blogDatas, setBlogDatas] = useState({})
//  useEffect(()=>{
//   strapiData();
//  },[])

//     return (
//       <CardComponentListWrapper>
//         {blogDatas && blogDatas.data &&
//           blogDatas.data.map((blogData, idx) => {
//             const bgIndex = idx % bgColors.length;
//             const {attributes: {imageUrl: {data: {attributes: {url}}}}} = blogData

//             return (
//               <Card
//                 key={idx}
//                 imgURL={`http://localhost:1337${url}`}
//                 author={blogData.attributes.author}
//                 description={blogData.attributes.content}
//                 date={blogData.attributes.date}
//                 headings={blogData.attributes.title}
//                 bg={bgColors[bgIndex]}
//               />
//             );
//           })}
//       </CardComponentListWrapper>
//     );
//   }

// export default CardComponentList;

// function CardComponentList({ dummyData }) {

//   return (
//     <CardComponentListWrapper>
//       {dummyData &&
//         dummyData.map((cardData, idx) => {
//           const bgIndex = idx % bgColors.length;
//           return (
//             <Card
//               key={idx}
//               imgURL={cardData.imgURL}
//               description={cardData.description}
//               date={cardData.date}
//               headings={cardData.headings}
//               bg={bgColors[bgIndex]}
//             />
//           );
//         })}
//     </CardComponentListWrapper>
//   );
// }

// export default CardComponentList;
