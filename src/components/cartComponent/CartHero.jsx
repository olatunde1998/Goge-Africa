import styled from "styled-components";
import { Typography } from "components/Typography";

const CartHeroWrapper = styled.div`
  background-color: #ff8a00;
  padding: 40px;
  margin-top: 30px;
  @media (min-width: 768px) {
  margin-top: 0px;
    
  }
`;
const CartHeroBox = styled.div`
`;

const CartHeroText = styled.div`
  max-width: 550px;
  margin: 0 auto;
 
`;
const ButtonWrapper = styled.div`
    max-width: 350px;
  margin: 0 auto;
  display: flex;


`;
const Button = styled.button`
width: 100%;
border-radius: 20px;
padding: 20px 0px 20px 10px;
background-color: white;
border: none;
color: #ff8a00;
margin: 0 10px 0 10px;

`

function CartHero() {
  return (
    <CartHeroWrapper>
      <CartHeroBox>
        <CartHeroText>
          <Typography style={{textAlign: "center"}} variant="bodySmallFour">
            You can either enroll for this course to gain access and also to the
            materials been attached to its online only or you can add to cart
            for checkout to view offline
          </Typography>
        </CartHeroText>
        <ButtonWrapper>
            <Button>Become Premium</Button>
            <Button>Add to Cart</Button>
        </ButtonWrapper>
      </CartHeroBox>
    </CartHeroWrapper>
  );
}

export default CartHero;
