import styled from "styled-components";
import ImageComponent from "components/imageComponents/ImageComponent";
import { Typography } from "components/Typography";

const CardContainer = styled.div`
  max-width: 300px;
  margin: 20px 10px 50px 10px;
  @media (min-width: 768px) {
    margin-left: 20px;
    margin-right: 2px;
  }
`;
const ImageContainer = styled.div`
  height: auto;
  background-color: #fed84f;
  margin: none;
  border: 2px solid purple;
  border-radius: 15px 15px 0px 0px;
`;
const DetailContainer = styled.div`
  border: 2px solid #ff8a00;
  text-align: left;
  background-color: #ff8a00;
  color: white;
  height: 30%;
  padding-left: 20px;
  padding-right: 30%;
  padding-bottom: 15px;
  border-radius: 0px 0px 15px 15px;
  border: 2px solid green;
`;

function Card({ imgURL, headings }) {
  return (
    <CardContainer>
      <ImageContainer>
        <ImageComponent src={imgURL} />
      </ImageContainer>
      <DetailContainer>
        <Typography variant="bodySmallTwo">{headings}</Typography>
      </DetailContainer>
    </CardContainer>
  );
}

export default Card;
