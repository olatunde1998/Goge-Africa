import React from "react";
import { Typography } from "components/Typography";
import styled from "styled-components";

const AdvertDetailsContainer = styled.div`
    text-align: left;
    padding-left: .8rem;
    @media (min-width: 768px) {
      align-items: center;
      margin-top: auto; 
      margin-bottom: auto;
      padding-left: 5rem;
    }
  
`

function AdvertDetails() {
  return (
    <AdvertDetailsContainer>
      <Typography variant="headings">
        Welcome to Our <br/>
        Forever Updated<br/>
        Blog Posts!
      </Typography>

      <Typography variant="bodySmall">
        Be Informed! Never miss a single post
      </Typography>

    </AdvertDetailsContainer>
  );
}

export default AdvertDetails;
