import { Button } from "components/passwordComponent/ButtonComponent";
import { Typography } from "components/Typography";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SuccessfulOrderListDashboard from "components/coursesDashboard/SuccessOrderListDashboard"

const OrderDashboardWrapper = styled.div`
  margin-bottom: 100px;
`;
const OrderDashboardBox = styled.div`
  max-width: 900px;
  background-color: #fff7df;
  margin: 0 auto;
  margin-top: 70px;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
`;
const OrderHeading = styled.div`
  max-width: 500px;
  margin: 5px auto;
  justify-content: center;
  display: flex;
  justify-content: center;
`;
const FreePremium = styled.div`
  max-width: 500px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
`;
const OrderHeadingWrapper = styled.div`
  background: white;
  padding: 10px;
  display: flex;
  margin-bottom: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  justify-content: space-between;
`;

const OrderImageAvatar = styled.div`
  display: flex;
  max-width: 250px;
`
const OrderHeadingInfo = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
`;

const ButtonWrapper = styled.div`
  max-width: 160px;
  margin: 50px auto;
`

function OrderDashboard() {
  return (
    <OrderDashboardWrapper>
      <OrderDashboardBox>
        <OrderHeading>
          <Typography variant="bodySmallThree">All Orders</Typography>
        </OrderHeading>
        <FreePremium>
          <Typography variant="bodySmallThree">All Orders</Typography>
          <Typography variant="bodySmallThree">Successful Orders</Typography>
          <Typography variant="bodySmallThree">Cancelled Orders</Typography>
        </FreePremium>
        
        <OrderHeadingWrapper>
          <OrderImageAvatar>
          <Link to="/settings" style={{ textDecoration: "none" }}><Typography variant="bodySmallThree">Order Details</Typography></Link>
          </OrderImageAvatar>
          <OrderHeadingInfo>
            <Typography variant="bodySmallThree">Category</Typography>
            <Typography variant="bodySmallThree">Status</Typography>
            <Typography variant="bodySmallThree">Teacher</Typography>
            <Typography variant="bodySmallThree">Date</Typography>
          </OrderHeadingInfo>
        </OrderHeadingWrapper>
        <SuccessfulOrderListDashboard/>
        
        <ButtonWrapper>
      
        <Button>View More</Button>
        </ButtonWrapper>
      </OrderDashboardBox>
    </OrderDashboardWrapper>
  );
}

export default OrderDashboard;
