import styled from "styled-components";
// import ImageComponent from "../imageComponents/ImageComponent";
import { Typography } from "components/Typography";
import { Link } from "react-router-dom";


const CartCardContainer = styled.div`
  max-width: 190px;
  margin: 10px 4px 10px 4px;
  @media (min-width: 768px) {
  width: 200px;
  margin: 20px 8px 10px 8px;
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
  height:25%;
  padding-left: 20px;
  padding-right: 30%;
  padding-bottom: 15px;
  border-radius: 0px 0px 15px 15px;
`;

function CartCard({ imgURL, courseName }) {
  
  return (
    <CartCardContainer>
      <ImageContainer>
        <Link to="/cart" style={{ textDecoration: "none" }}>
        {/* <ImageComponent src={imgURL} /> */}

        </Link>

      </ImageContainer>

      <DetailContainer>
        <Typography variant="bodySmallTwo">{courseName}</Typography>
      </DetailContainer>
    </CartCardContainer>
  );
}

export default CartCard;
