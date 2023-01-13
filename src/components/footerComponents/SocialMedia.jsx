import styled from "styled-components";
import { Typography } from "components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook } from 'react-icons/fa';
import {
  // faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { PictureStyle } from "components/pictureComponent/PictureComponent";

const SocialMediaWrapper = styled.div``;
const ImageWrapper = styled.div`
  width: 150px;
`;

const SocialIconItem = styled.div`
  vertical-align: center;
  height: 20px;
  width: 1.5rem;
  margin-right: 20px;
  // background-color: white;
  // border: 2px solid red;
  border-radius: 40px;
  // padding: 8px;
  padding-left: 8px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 12px;

  align-items: center;
  vertical-align: middle;
  
`;
const SocialIconWrapper = styled.div`
  display: flex;
  max-width: 300px;
  margin-bottom: 1.5rem;
`;
const SocialDetails = styled.div`
  max-width: 300px;
`;

function SocialMedia() {
  return (
    <SocialMediaWrapper>
      <ImageWrapper>
        <PictureStyle src="assets/img/Logo.png"/>
      </ImageWrapper>
      <SocialDetails>
        <Typography variant="footerSmall">
          {" "}
          Semaj Africa is an online education that delivers video courses
          programs and resources
        </Typography>
      </SocialDetails>
      <SocialIconWrapper>
        <SocialIconItem style={{backgroundColor: "white"}}>
          <a href="www.facebook.com">
            {/* <FontAwesomeIcon icon={faFacebook} /> */}
            <FaFacebook style={{fontSize: "28px", color: "blue"}}/>
          </a>
        </SocialIconItem>
        <SocialIconItem style={{backgroundColor: "skyblue"}}>
          <a href="www.facebook.com">
            <FontAwesomeIcon icon={faTwitter} style={{fontSize: "24px", color:"white"}} />
          </a>
        </SocialIconItem>
        <SocialIconItem style={{backgroundColor: "red"}}>
          <a href="www.facebook.com">
            <FontAwesomeIcon icon={faYoutube} style={{fontSize: "24px", color: "white"}} />
          </a>
        </SocialIconItem>
        <SocialIconItem style={{backgroundColor: "blue"}}>
          <a href="www.facebook.com">
            <FontAwesomeIcon icon={faLinkedin} style={{fontSize: "24px", color:"white"}} />
          </a>
        </SocialIconItem>
      </SocialIconWrapper>
    </SocialMediaWrapper>
  );
}

export default SocialMedia;
