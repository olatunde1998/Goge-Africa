import React from 'react'
import styled, { css } from 'styled-components';
import ImageComponent from 'components/ImageComponents/ImageComponent';
import { Typography } from 'components/Typography';
import Button from 'components/buttonComponent/Button';

const CardContainer = styled.div`
    max-width: 30rem;
    margin: 20px 10px 30px 10px; 
    @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    }
`;
const ImageContainer = styled.div`
    height: 50%;
    background-color: #FED84F;
    margin:none;
    border-radius: 15px 15px 0px 0px;

    ${(props) => {
        switch (props.mode) {
          case "primary":
            return css`
              background-color: #EBEBED;
              color: white;

            `;
          case "secondary":
            return css`
                background-color: #D0D0D2;
                color: white;
                `;  
          default:
            return css`
              background-color: #E0B9C8;
              color: black;
            `;
        }
      }}


`;
const DetailContainer = styled.div`
    border: 2px solid #FF8A00;
    text-align: left;
    background-color: #FF8A00;
    color: white;
    height: 50%;
    padding-left: 10px;
    border-radius: 0px 0px 15px 15px;  
`;



function card({imgURL,description,date, headings, bg}) {
  return (
    <CardContainer>
        <ImageContainer mode={bg}>
            <ImageComponent src={imgURL}/>
        </ImageContainer>
        <DetailContainer>
            <Typography variant="bodyLarge">{headings}</Typography>
            <Typography variant="bodySmall">{date}</Typography>
            <Typography variant="bodySmall">{description}</Typography>
            <Button>Read More...</Button>
        </DetailContainer>
    </CardContainer>
  )
}

export default card