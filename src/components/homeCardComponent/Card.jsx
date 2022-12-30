import styled from "styled-components";
// import ImageComponent from "../imageComponents/ImageComponent";
import { Typography } from "components/Typography";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  max-width: 350px;
  margin: 10px 10px 20px 10px;
  @media (min-width: 768px) {
    max-width: 250px;
    margin: 20px 2px 10px 20px;
  }
`;
const ImageContainer = styled.div`
  height: auto;
  background-color: #e5e5e5;
  margin: none;
  border-radius: 15px 15px 0px 0px;
`;
const DetailContainer = styled.div`
  border: 2px solid #ff8a00;
  text-align: left;
  background-color: #ff8a00;
  color: white;
  height: 25%;
  padding-left: 20px;
  padding-right: 30%;
  padding-bottom: 15px;
  border-radius: 0px 0px 15px 15px;
`;

function Card({ imgURL, courseName }) {
  return (
    <CardContainer>
      <ImageContainer>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          {/* <ImageComponent src={imgURL} /> */}
        </Link>
      </ImageContainer>

      <DetailContainer>
        <Typography variant="bodySmallTwo">{courseName}</Typography>
      </DetailContainer>
    </CardContainer>
  );
}

export default Card;
