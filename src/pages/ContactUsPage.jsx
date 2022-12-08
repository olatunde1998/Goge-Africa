import styled from "styled-components";
import { Typography } from "components/Typography";
import NavigationComponent from "components/navigationComponents/NavigationComponent";
import FooterComponent from "components/footerComponents/FooterComponent";
import AdvertComponent from "components/heroComponents/HeroComponent";
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
function ContactUsPage() {
  return (
    <div>
      <NavigationComponent />
      <AdvertComponent
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
        <InputWrapper>
          <InputFieldComponent placeholder="FullName" />
          <InputFieldComponent placeholder="Country/Region" />
          <InputFieldComponent placeholder="Street Address" />
          <InputFieldComponent placeholder="City" />
          <InputFieldComponent placeholder="Your Message" />
          <Input heighty placeholder="textarea" />
        </InputWrapper>
        <ButtonWrapper>
          <LargeButtonContainer>Send Message</LargeButtonContainer>
        </ButtonWrapper>
      </MessageFormContainer>
      <FooterComponent />
    </div>
  );
}

export default ContactUsPage;
