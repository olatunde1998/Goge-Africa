import styled from 'styled-components'
import NavigationComponent from 'components/navigationComponents/NavigationComponent'
import HeroRedComponent from 'components/heroRedComponents/HeroRedComponent';
import { Typography } from "components/Typography";
import FooterComponent from "components/footerComponents/FooterComponent";
import InputFieldComponent, {
  Input,
} from "components/inputFieldComponents/InputFieldComponents";
import { LargeButtonContainer } from "components/buttonComponent/Button";




const MessageFormContainer = styled.div`
  text-align: center;
  padding: 5rem 0 10rem 0;
`;
const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
const LetTalkWrapper = styled.div`
  padding: 0 20px 0 2rem;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0rem;
    max-width: 24rem;
  }
`;
const InputWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

function ContactUsComponent() {
  return (
    <div>
      <NavigationComponent />
      <HeroRedComponent
        title="24hrs On Deck Customer Support"
        subtitle="We are at your call. We serve you always."
        imgURL="/assets/img/contactPage-img.png"
      />
      <MessageFormContainer>
        <LetTalkWrapper>
          <Typography variant="bodyMedium">Let's Talk!</Typography>
          <Typography variant="bodySmallThree">
            We do Normally get back within 48hours. Please leave a message.
          </Typography>
        </LetTalkWrapper>
        <form
        method="POST"
        action="https://getform.io/f/b0ec8305-c728-4db5-ae28-b7ddf75c56cb"
      >
        <InputWrapper>
          <InputFieldComponent placeholder="FullName" name="name"/>
          <InputFieldComponent placeholder="Country/Region"name="country" />
          <InputFieldComponent placeholder="Street Address"name="region" />
          <InputFieldComponent placeholder="City"name="city" />
          <Input heighty placeholder="type here ..." name="message"/>
        </InputWrapper>
        <ButtonWrapper>
          <LargeButtonContainer>Send Message</LargeButtonContainer>
        </ButtonWrapper>
        </form>
      </MessageFormContainer>
      <FooterComponent />

    </div>
  )
}

export default ContactUsComponent