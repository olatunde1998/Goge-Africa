import styled from "styled-components";
import SocialMedia from "components/footerComponents/SocialMedia";
import ContactUsList from "components/footerComponents/ContactUsLists";
import QuickLinks from "components/footerComponents/QuickLinks";
import TermsAndCondition from "components/footerComponents/TermsAndConditionList";
import PolicyPrivacy from "components/footerComponents/PolicyPrivacy";

const FooterComponentWrapper = styled.div`
  padding: 20px;
  background-color: #212121;
  justify-content: center;
`;
const FooterComponentContainer = styled.div`
  margin: 0 auto;
  background-color: #212121;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
  }
`;
const FooterPrivacyContainer = styled.div`
  margin: 0 auto;
  background-color: #212121;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
  }
`;
const QuickLinksWrapper = styled.div`
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  @media (min-width: 768px) {
    border-top: none;
    border-bottom: none;
  }
`;

const ContactUsWrapper = styled.div`
  border-bottom: 1px solid grey;
  @media (min-width: 768px) {
    border-top: none;
    border-bottom: none;
  }
`;
const TermsAndConditionWrapper = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    border-top: none;
    border-bottom: none;
  }
`;

function FooterComponent() {
  return (
    <FooterComponentWrapper>
      <FooterComponentContainer>
        <SocialMedia />
        <QuickLinksWrapper>
          <QuickLinks />
        </QuickLinksWrapper>
        <ContactUsWrapper>
          <ContactUsList />
        </ContactUsWrapper>
        <TermsAndConditionWrapper>
          <TermsAndCondition />
        </TermsAndConditionWrapper>
      </FooterComponentContainer>
      <FooterPrivacyContainer>
        <PolicyPrivacy />
      </FooterPrivacyContainer>
    </FooterComponentWrapper>
  );
}

export default FooterComponent;
