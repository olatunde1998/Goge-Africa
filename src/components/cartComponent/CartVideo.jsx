import { Image } from "components/imageComponents/ImageComponent";
import { Typography } from "components/Typography";
import styled from "styled-components";

const CartVideoWrapper = styled.div`

`;
const VideoBox = styled.div`
`;
const CartVideoSetting = styled.div`
  border: 2px solid red;
  background-color: #ff8a00;
`;
const CartVideoSettingBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  margin: 0 auto;
  padding: 0 10px 0 10px;
`;

function CartVideo() {
  return (
    <CartVideoWrapper>
      <CartVideoSetting>
        <VideoBox>
          <Image src="assets/img/art-of-growing-image1.png" alt="" />
        </VideoBox>

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
