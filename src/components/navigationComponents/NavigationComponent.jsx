import React from "react";
import styled from "styled-components";
import NavigationImg from "./NavigationImage";
import NavigationList from "components/navigationComponents/NavigationList";
import NavigationBtn from "components/navigationComponents/NavigationBtn";

const NavComponentWrapper = styled.div`
@media (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  max-width: 1440px;
  margin: 0 auto;
  & div:nth-child(2){
    flex-grow: 1;
  }
}
`

const NavComponentContainer = styled.div`
@media (min-width: 768px) {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
}
`

function NavigationComponent() {
  return (
    <NavComponentContainer>
      <NavComponentWrapper>
        <NavigationImg/>
        <NavigationList />
        <NavigationBtn/>
      </NavComponentWrapper>
    </NavComponentContainer>
  )
}

export default NavigationComponent;