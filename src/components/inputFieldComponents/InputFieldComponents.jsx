import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  height: ${(props) => (props.heighty ? "200px" : "20px")};
  border: 1px solid grey;
  width: 16rem;
  padding: 18px;
  height: "20px";
  border-radius: 18px;
  margin-bottom: 0.4rem;
  text-align: left;
  @media (min-width: 768px) {
    width: 24rem;
  }
`;

function InputFieldComponent({ placeholder }) {
  return (
    <div>
      <Input placeholder={placeholder} />
    </div>
  );
}

export default InputFieldComponent;
