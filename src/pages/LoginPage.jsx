import React from 'react'
import styled from 'styled-components';
import LeftContainer from 'components/loginComponent/leftContainer/LeftContainer';
import RightContainer from 'components/loginComponent/rightContainer/RightContainer';

const LoginWrapper = styled.div`
  border: 2px solid purple;
  height: 100vh;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
  
`

function LoginPage() {
  return (
    <LoginWrapper>
        <LeftContainer />
        <RightContainer />
    </LoginWrapper>
  )
}

export default LoginPage;