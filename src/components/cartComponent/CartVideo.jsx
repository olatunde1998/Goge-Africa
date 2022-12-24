import { Typography } from "components/Typography";
import styled from "styled-components";
import ReactPlayer from "react-player";

const CartVideoWrapper = styled.div`
  background-color: white;
`;
const VideoBox = styled.div`
  height: 600px;
  margin-top: 0px;
  padding: 0px;
  max-width: 1200px;
  margin: 0 auto;

`;
const CartVideoSetting = styled.div`
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
          <ReactPlayer  width="100%" height="100%"controls url="https://youtu.be/TtDGbDFHbGs"/>
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
