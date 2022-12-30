import styled from "styled-components";
// import ImageComponent from "../imageComponents/ImageComponent";
import { Typography } from "components/Typography";


const CardContainer = styled.div`
  width: 150px;
  margin: 2px 5px 20px 2px;
  @media (min-width: 768px) {
  width: 200px;  
  margin: 20px 2px 10px 20px;

  }
`;
const ImageContainer = styled.div`
  height: auto;
  background-color: #E5E5E5;
  margin: none;
  border-radius: 15px 15px 0px 0px;
`;
const DetailContainer = styled.div`
  border: 2px solid #ff8a00;
  text-align: left;
  background-color: #ff8a00;
  color: white;
  height:40%;
  padding-left: 20px;
  padding-right: 30%;
  padding-bottom: 15px;
  border-radius: 0px 0px 15px 15px;
`;

function Card({ imgURL, courseName }) {
  
  return (
    <CardContainer>
      <ImageContainer>
        {/* <ImageComponent src={imgURL} /> */}
      </ImageContainer>

      <DetailContainer>
        <Typography variant="bodySmallTwo">{courseName}</Typography>
      </DetailContainer>
    </CardContainer>
  );
}

export default Card;
