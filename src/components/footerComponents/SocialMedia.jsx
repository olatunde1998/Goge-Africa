import React from "react";
import styled from "styled-components";
import { Typography } from "components/Typography";
import ImageComponent from "components/ImageComponents/ImageComponent";

const SocialMediaWrapper = styled.div``;
const ImageWrapper = styled.div`
  width: 150px;
`;

const SocialIconItem = styled.div`
  vertical-align: center;
  height: 20px;
  width: 1.5rem;
  margin-right: 20px;
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
        <ImageComponent src={`${process.env.PUBLIC_URL}/assets/img/Logo.png`} />
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
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/assets/img/facebook.png`}
          />
        </SocialIconItem>
        <SocialIconItem>
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/assets/img/twitter.png`}
          />
        </SocialIconItem>
        <SocialIconItem>
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/assets/img/youtube.png`}
          />
        </SocialIconItem>
        <SocialIconItem>
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/assets/img/linkdin.png`}
          />
        </SocialIconItem>
      </SocialIconWrapper>
    </SocialMediaWrapper>
  );
}

export default SocialMedia;
