import styled from "styled-components";

export const Input = styled.input`
  width: 97%;
  padding: 20px 0px 20px 10px;
  border-radius: 20px;
  margin-top: 3px;
  margin-bottom: 5px;
  border: 0.5px solid grey;
  background-color: white;
`;
const InputComponentWrapper = styled.div``;

function InputComponent() {
  return (
    <InputComponentWrapper>
      <Input />
    </InputComponentWrapper>
  );
}

export default InputComponent;
