import styled from "styled-components";

const TextAreaContainer = styled.div`
  margin-top: 20px;
`;

function FormTextArea() {
  return (
    <TextAreaContainer>
      <textarea rows="10" cols="80">
        Your Comments
      </textarea>
    </TextAreaContainer>
  );
}

export default FormTextArea;
