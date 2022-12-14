import styled from "styled-components";
import { Typography } from "components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
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
  background-color: white;
  
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
        <SocialIconItem>
          <a href="www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </SocialIconItem>
        <SocialIconItem>
          <a href="www.facebook.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </SocialIconItem>
        <SocialIconItem>
          <a href="www.facebook.com">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </SocialIconItem>
        <SocialIconItem>
          <a href="www.facebook.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </SocialIconItem>
      </SocialIconWrapper>
    </SocialMediaWrapper>
  );
}

export default SocialMedia;
