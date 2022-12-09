import styled from "styled-components";
import ContactUsComponent from "components/contactUsComponent/ContactUsComponent";

const ContactUsPageWrapper = styled.div`

`

function ContactUsPage() {
  return (
    <ContactUsPageWrapper>
      <ContactUsComponent/>
    </ContactUsPageWrapper>
  );
}

export default ContactUsPage;
