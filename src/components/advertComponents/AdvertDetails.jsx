import React from "react";
import { Typography } from "components/Typography";
import styled from "styled-components";

const AdvertDetailsContainer = styled.div`
    border: 2px solid blue;
    @media (min-width: 768px) {
      width: 50%;
    }
  
`

function AdvertDetails() {
  return (
    <AdvertDetailsContainer>
      <Typography variant="headings">
        Welcome to Our
        Forever Updated
        Blog Posts!
      </Typography>

      <Typography variant="bodySmall">
        Be Informed! Never miss a single post
      </Typography>

    </AdvertDetailsContainer>
  );
}

export default AdvertDetails;
