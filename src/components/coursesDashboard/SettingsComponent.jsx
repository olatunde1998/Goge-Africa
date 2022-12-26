import styled from "styled-components";
import { AvatarImage } from "components/imageComponents/ImageComponent";
import { Typography } from "components/Typography";
import SettingForm from "components/coursesDashboard/SettingsForm";

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
  display: flex;
  justify-content: center;
`;
const FreePremium = styled.div`
  max-width: 500px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
`;
const AvatarImageWrapper = styled.div`
  border: 2px solid grey;
  max-width: 50px;
  margin: 0 auto;
  border-radius: 50%;
  background: white;
`;

function SettingsComponent() {
  return (
    <OrderDashboardWrapper>
      <OrderDashboardBox>
        <OrderHeading>
          <Typography variant="bodySmallThree">All Orders</Typography>
        </OrderHeading>
        <FreePremium>
          <Typography variant="bodySmallThree">Basic Information</Typography>
          <Typography variant="bodySmallThree">Card Information</Typography>
          <Typography variant="bodySmallThree">Announcement</Typography>
        </FreePremium>
        <AvatarImageWrapper>
          <AvatarImage src="assets/img/card-image1.png" />
        </AvatarImageWrapper>
        <SettingForm />
      </OrderDashboardBox>
    </OrderDashboardWrapper>
  );
}

export default SettingsComponent;
