import styled from "styled-components";
import { useEffect } from "react";
import { connect } from "react-redux";
import OrderList from "./OrderList";
import { fetchSuccessOrder } from "redux/actions/successfulOrderAction";


const OrderComponentListWrapper = styled.div`
`;

function SuccessfulOrderListDashboard({dispatch, successDatas, loading, hasError}) {
    
  useEffect(() => {
    dispatch(fetchSuccessOrder())
  }, [dispatch])
  
  if(loading) return <p>Loading Courses ......</p>
  if(hasError)return<p>Unable to get the courses</p>
  return (
    <OrderComponentListWrapper>
      {successDatas &&
        successDatas.data &&
        successDatas.data.map((successData, idx) => {
          const {attributes: {imageUrl: {data: {attributes: {url}}}}} = successData
          console.log(successData.attributes.category);
          return (
            <OrderList
              key={idx}
              imgURL={`http://localhost:1337${url}`}
              courseName={successData.attributes.order_details}
              category={successData.attributes.category}
              status={successData.attributes.status}
              teacher={successData.attributes.teacher}
              date={successData.attributes.date}
            />
          );
        })}
    </OrderComponentListWrapper>
  );
}

const mapStateToProps = (state) => ({
  successDatas: state.successfulData.successfulData,
  loading: state.successfulData.loading,
  hasError: state.successfulData.hasError,
})

export default connect(mapStateToProps)(SuccessfulOrderListDashboard) ;






