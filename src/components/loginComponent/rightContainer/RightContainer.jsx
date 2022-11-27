import React from 'react'
import styled from 'styled-components';
import RightContent from 'components/loginComponent/rightContainer/RightContent';

const RightContainerWrapper = styled.div`
  border: 2px solid green;
  background-color: #FF8A00;
  height: 30vh;
  display: flex;
    flex-direction: row;
    align-items: flex-end;
  
  
  @media (min-width: 768px) {
    width: 50%;
    height: 100vh;
    
  }
`

function RightContainer() {
  return (
    <RightContainerWrapper>
      <RightContent />
    </RightContainerWrapper>
  )
}

export default RightContainer;