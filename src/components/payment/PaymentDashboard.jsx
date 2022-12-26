import { Button } from "components/passwordComponent/ButtonComponent";
import { Typography } from "components/Typography";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PaymentOption from "./PaymentOption";

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

const FreePremium = styled.div`
  max-width: 500px;
  margin: 5px auto;
  display: flex;
  justify-content: center;
`;
const OrderHeadingWrapper = styled.div`
  padding: 10px;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const OrderImageAvatar = styled.div`
  display: flex;
  max-width: 250px;
`;
const OrderHeadingInfo = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
`;

const ButtonWrapper = styled.div`
  max-width: 160px;
  margin: 50px auto;
`;

function OrderDashboard() {
  return (
    <OrderDashboardWrapper>
      <OrderDashboardBox>
        
        <FreePremium>
          <Typography variant="bodySmallThree">Select Your Delivery Information</Typography>
          <Typography style={{marginLeft: "20px"}}variant="bodySmallThree">70%</Typography>
        </FreePremium>

        <OrderHeadingWrapper>
          <OrderImageAvatar>
            <Link to="/settings" style={{ textDecoration: "none" }}>
              <Typography variant="bodySmallThree">
                Product Name & Details
              </Typography>
            </Link>
          </OrderImageAvatar>
          <OrderHeadingInfo>
            <Typography variant="bodySmallThree">Quantity</Typography>
            <Typography variant="bodySmallThree">Price</Typography>
            <Typography variant="bodySmallThree">Delivery Details</Typography>
            <Typography variant="bodySmallThree">Date</Typography>
          </OrderHeadingInfo>
        </OrderHeadingWrapper>
        <PaymentOption
          imgURL="assets/img/card-image2.png"
          courseName="Become a guru in 3d modelling"
          moduleNumber="Modules 11"
          year="22/12/22"
          price="#8000/ 2pieces"
        />

        <ButtonWrapper>
          <Button>View More</Button>
        </ButtonWrapper>
      </OrderDashboardBox>
    </OrderDashboardWrapper>
  );
}

export default OrderDashboard;
