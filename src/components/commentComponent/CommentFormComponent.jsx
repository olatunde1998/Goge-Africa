import { Input } from "components/inputFieldComponents/InputFieldComponents";
import { Typography } from "components/Typography";
import styled from "styled-components";
import Button from "components/buttonComponent/Button";
import FormTextArea from "components/formTextArea/FormTextArea";

const CommentFormComponentWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;
`;
const InputFieldWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
  }
`;
const CommentForm = styled.div``;
const MessageWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
  }
`;
const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

function CommentFormComponent() {
  return (
    <CommentFormComponentWrapper>
      <CommentForm>
        <Typography variant="headingNormal">Leave A Comment</Typography>
        <Typography variant="bodySmallThree">
          Your email address will not be published. Required mail are marked*
        </Typography>
        <InputFieldWrapper>
          <Input widthy placeholder="Name" />
          <Input widthy placeholder="Email" />
        </InputFieldWrapper>
        <MessageWrapper>
          <FormTextArea />
        </MessageWrapper>
        <ButtonWrapper>
          <Button>Send</Button>
        </ButtonWrapper>
      </CommentForm>
    </CommentFormComponentWrapper>
  );
}

export default CommentFormComponent;
