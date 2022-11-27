import React from 'react'
import styled from 'styled-components';

const InputField = styled.input`
    border: 2px solid red;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;


`
const InputWrapper = styled.div`
  border: 2px solid black;
  width: 100%
`

function InputComponent() {
  return <InputWrapper>
    <InputField  width='100px'/>
    </InputWrapper>
  
}

export default InputComponent