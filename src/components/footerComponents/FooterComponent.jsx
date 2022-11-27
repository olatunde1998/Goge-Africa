import React from 'react'
import styled from 'styled-components';
import SocialMedia from "components/footerComponents/SocialMedia"
import QuickLinks from 'components/footerComponents/QuickLinks';

const FooterComponentWrapper = styled.div`
    // border: 7px solid red;
    padding: 20px 0;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;

      }
`
const QuickLinksWrapper =styled.div`
    // border: 2px solid blue;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
`;

const ContactUsWrapper = styled.div`
    // border: 4px solid green;
    border-bottom: 1px solid grey;
`;
const TermsAndConditionWrapper = styled.div`
    // border: 2px solid blue;
    border-bottom: 1px solid grey;

`

function FooterComponent() {
  return (
    <FooterComponentWrapper>
        <SocialMedia/>
        <QuickLinksWrapper>
            <QuickLinks itemHeading="Quicklinks"/>
            <QuickLinks item="Home"/>
            <QuickLinks item="Courses"/>
            <QuickLinks item="About Us"/>
            <QuickLinks item="Contact Us"/>
            <QuickLinks item="Become A Contributor"/>
        </QuickLinksWrapper>
        <ContactUsWrapper>
            <QuickLinks itemHeading="Contact Us"/>
            <QuickLinks item="(+55)254-254-254"/>
            <QuickLinks item="Info@Isemajafrica.com"/>
            <QuickLinks item="Hellos Tower 75 Tam Trinh Hoang"/>
            <QuickLinks item="Mai-Ha Noi-Viet Nam"/>
        </ContactUsWrapper>
        <TermsAndConditionWrapper>
            <QuickLinks item="Terms and Conditions"/>
            <QuickLinks item="FAQ"/>
        </TermsAndConditionWrapper>

    </FooterComponentWrapper>
  )
}

export default FooterComponent;