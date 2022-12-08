import styled from "styled-components";

export const Input = styled.input`
  height: ${(props) => (props.heighty ? "200px" : "20px")};
  border: 1px solid grey;
  width: 16rem;
  padding: 18px;
  height: "20px";
  border-radius: 24px;
  margin-bottom: 0.4rem;
  text-align: left;
  @media (min-width: 768px) {
    max-width: ${(props) => (props.widthy ? "18rem" : "24rem")};
    margin-right: 20px;
    width: 85%;
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
