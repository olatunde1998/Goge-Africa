import React from 'react'
import styled from 'styled-components';
import { Typography } from 'components/Typography';
import ButtonComponent from 'components/loginComponent/leftContainer/ButtonComponent';
import ImageComponent from '../rightContainer/ImageComponent';
import InputFieldComponent from 'components/inputFieldComponents/InputFieldComponents';
import {Link} from "react-router-dom";

const LeftContentWrapper = styled.div`
    border: 2px solid red;
    margin-right: auto;
    margin-left: auto;
    
    @media (min-width: 768px) {
        max-width: 30vw;
        margin-top: 150px;

      }
`

function LeftContent() {
  return (
    <LeftContentWrapper>
        <ImageComponent src="assets/img/Logo.png"/>
        <InputFieldComponent placeholder="Full Name"/>
        <InputFieldComponent placeholder="Password"/>
        
        <Typography>Sign in to your account to continue</Typography>  
        <Typography variant="bodyMedium"> Don't have an account? Sign Up</Typography>
       <Link to="blog">  <ButtonComponent /></Link>
    </LeftContentWrapper>
  )
}

export default LeftContent;