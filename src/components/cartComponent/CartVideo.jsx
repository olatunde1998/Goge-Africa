import { Typography } from "components/Typography";
import styled from "styled-components";

const CartVideoWrapper = styled.div`
  border: 2px solid green;
`;
const CartVideoSetting = styled.div`
  border: 2px solid red;
  background-color: #ff8a00;
  margin-top: 500px;
 
`;
const CartVideoSettingBox = styled.div`
display: flex;
  justify-content: space-between;
  max-width: 550px;
  margin: 0 auto;

`

function CartVideo() {
  return (
    <CartVideoWrapper>
      CartVideo
      <CartVideoSetting>
      <CartVideoSettingBox>
        <Typography variant="bodySmallFour">Overview</Typography>
        <Typography variant="bodySmallFour">Transcript</Typography>
        <Typography variant="bodySmallFour">Offline Package</Typography>
        <Typography variant="bodySmallFour">Exercise Files</Typography>
      </CartVideoSettingBox>


      </CartVideoSetting>
    </CartVideoWrapper>
  );
}

export default CartVideo;
