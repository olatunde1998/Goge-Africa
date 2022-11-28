import React from "react";
import { Typography } from "components/Typography";
import styled from "styled-components";

const PolicyPrivacyWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
  }
`;
const SiteCreditPrivacy = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

function PolicyPrivacy() {
  return (
    <PolicyPrivacyWrapper>
      <Typography variant="footerSmall">
        All Right Reserved GOGE AFRICA 2019
      </Typography>
      <SiteCreditPrivacy>
        <Typography variant="footerSmall">Privacy Policy</Typography>
        <Typography variant="footerSmall">Site Credit</Typography>
      </SiteCreditPrivacy>
    </PolicyPrivacyWrapper>
  );
}

export default PolicyPrivacy;
