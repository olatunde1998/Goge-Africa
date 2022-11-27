import React from 'react';
import styled from 'styled-components';
import { Typography } from 'components/Typography';
import ImageComponent from 'components/ImageComponents/ImageComponent';
// import GogeLogo from "assets/img/Logo.png"

const ImageWrapper = styled.div`
    // border: 2px solid;
    width: 80px;
`

function SocialMedia() {
  return (
    <div>
        <ImageWrapper>
            <ImageComponent src={`${process.env.PUBLIC_URL}/assets/img/Logo.png`}/>
        </ImageWrapper>
        <Typography variant ="footerSmall"> Semaj Africa is an online education<br/> that 
            delivers video courses<br/> programs and resources
        </Typography>
    </div>
    
  )
}

export default SocialMedia;