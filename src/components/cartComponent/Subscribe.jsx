import { Button } from "components/passwordComponent/ButtonComponent";
import { Input } from "components/signinComponent/InputComponent";
import { Typography } from "components/Typography";
import styled from "styled-components";

const SubscribeWrapper = styled.div`
  @media(min-width: 768px){
    display: flex;
    justify-content: center;
    padding: 50px;
}
`;
const SubscribeText = styled.div`
  padding-right: 10px;
 
`;

const SubscribeEmail =styled.div`
    padding: 20px;
    width: 300px;
    margin: 0 auto;
    @media(min-width: 768px){
        display: flex;
        width: 50%;
        
    }
    
`
const EmailInputWrapper = styled.div`
    @media(min-width:768px){
        width: 50%;
    }

`
const ButtonWrapper = styled.div`
    @media(min-width:768px){
        width: 40%;
    }


`

function Subscribe() {
  return (
    <SubscribeWrapper>
      <SubscribeText>
        <Typography
          style={{ textAlign: "left", marginLeft: "30px" }}
          variant="bodyMedium"
        >
          Subscribe To Our Newsletter
        </Typography>
        <Typography
          style={{ color: "#5C5C5C", textAlign: "left", marginLeft: "30px" }}
          variant="bodySmallFour"
        >
          Get exclusive discounts and latest news delivered to your inbox for
          free!
        </Typography>
      </SubscribeText>
      <SubscribeEmail>
        <EmailInputWrapper>
        <Input type="email" placeholder="Email"/>
        </EmailInputWrapper>
        <ButtonWrapper>
        <Button>Submit</Button>
        </ButtonWrapper>
      </SubscribeEmail>
    </SubscribeWrapper>
  );
}

export default Subscribe;
