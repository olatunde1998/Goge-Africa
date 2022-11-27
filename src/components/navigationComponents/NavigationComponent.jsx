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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    & div:nth-child(2){
      flex-grow: 1;
    }
  }
`

function NavigationComponent() {
  return (
    <NavComponentWrapper>
        <NavigationImg/>
        <NavigationList />
        <NavigationBtn/>
    </NavComponentWrapper>
  )
}

export default NavigationComponent;