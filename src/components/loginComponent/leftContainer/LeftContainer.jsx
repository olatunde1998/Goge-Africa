import React from 'react'
import styled from 'styled-components';


import LeftContent from './LeftContent';

const LeftWrapper = styled.div`
  border: 2px solid blue;
  background-color: #FFF7DF;
  height: 70vh;
  padding: 0px 30px 0px 30px;

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
    text-align: center;

  }
`
function LeftContainer() {
  return (
    <LeftWrapper>
      <LeftContent />
    </LeftWrapper>
  )
}

export default LeftContainer;