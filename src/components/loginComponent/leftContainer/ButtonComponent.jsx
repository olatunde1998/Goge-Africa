import React from "react";

import styled from "styled-components";

const ButtonContainer = styled.button`
    border: 2px solid green;
    width: 100%;
    border-radius: 5px;
    padding: 15px;
    color: white;
    background-color: #FF8A00;
`

function ButtonComponent() {
  return (
    <div>
        <ButtonContainer>Sign in</ButtonContainer>
    </div>
  )
}

export default ButtonComponent;