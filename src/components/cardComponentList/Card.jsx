import React from "react";
import styled, { css } from "styled-components";
import ImageComponent from "components/imageComponents/ImageComponent";
import { Typography } from "components/Typography";
import { ButtonContainer } from "components/buttonComponent/Button";
import { Link } from "react-router-dom";

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
  background-color: #fed84f;
  margin: none;
  border-radius: 15px 15px 0px 0px;

  ${(props) => {
    switch (props.mode) {
      case "primary":
        return css`
          background-color: #ebebed;
          color: white;
        `;
      case "secondary":
        return css`
          background-color: #d0d0d2;
          color: white;
        `;
      default:
        return css`
          background-color: #e0b9c8;
          color: black;
        `;
    }
  }}
`;
const DetailContainer = styled.div`
  border: 2px solid #ff8a00;
  text-align: left;
  background-color: #ff8a00;
  color: white;
  height: 50%;
  padding-left: 10px;
  padding-bottom: 15px;
  border-radius: 0px 0px 15px 15px;
`;

function card({ imgURL, description, date, headings, bg }) {
  return (
    <CardContainer>
      <ImageContainer mode={bg}>
        <ImageComponent src={imgURL} />
      </ImageContainer>
      <DetailContainer>
        <Typography variant="bodyLarge">{headings}</Typography>
        <Typography variant="bodySmallTwo">{date}</Typography>
        <Typography variant="bodySmallTwo">{description}</Typography>
        <Link to="/blog/1" style={{ textDecoration: "none" }}>
          <ButtonContainer primary>Read More...</ButtonContainer>
        </Link>
      </DetailContainer>
    </CardContainer>
  );
}

export default card;
