import React from 'react'
import styled from 'styled-components';
import Description from 'components/loginComponent/rightContainer/Description'
import ImageComponent from 'components/loginComponent/rightContainer/ImageComponent';
import NextBtn from 'assets/img/next.png';
import PreviousBtn from "assets/img/prev.png";


const RightContentWrapper = styled.div`
    border: 2px solid green;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;

`

const ImageContainer = styled.div`
    // border: 2px solid red;
`

function RightContent() {
  return (
    <RightContentWrapper>
        <ImageComponent />
        <Description />
        <ImageContainer>
            <ImageComponent src={PreviousBtn}/>
            <ImageComponent src={NextBtn}/>
        </ImageContainer>
        
    </RightContentWrapper>
  )
}

export default RightContent;