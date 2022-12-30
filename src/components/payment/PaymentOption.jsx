import styled from "styled-components";
import { Typography } from "components/Typography";
// import { ImageStyle } from "../imageComponents/ImageComponent";
import Counter from "./Counter";

const DetailsWrapper = styled.div`
  border: 0.4px solid grey;
  padding: 5px;
  padding: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const OrderImageAvatar = styled.div`
  display: flex;
  max-width: 300px;
`;
const AvatarWrapper = styled.div`
  max-width: 120px;
  border: 1px solid grey;
  margin-right: 10px;
  height: 100px;
`;
const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }
`;
const TypoBox = styled.div`

`;
const DeliveryOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
`;
const Amount = styled.div`
  margin-bottom: 20px;
`;
const Delivery = styled.div``;

function OrderList({ imgURL, courseName, moduleNumber, year, price, date }) {
  return (
    <DetailsWrapper>
      <OrderImageAvatar>
        <AvatarWrapper>
          {/* <ImageStyle src={imgURL} alt="photographer pics" /> */}
        </AvatarWrapper>
        <TypoBox>
          {" "}
          <Typography  style={{ marginTop: "0px"}}variant="bodySmallThree">{courseName}</Typography>
          <Typography variant="bodySmallThree">{moduleNumber}</Typography>
          <Typography variant="bodySmallThree">{year}</Typography>
        </TypoBox>
      </OrderImageAvatar>
      <OrderInfo>
        <Counter />
        <Typography variant="bodySmallThree">{price}</Typography>
        <DeliveryOption>
          <Amount>
            {" "}
            <input type="radio" />
            <label for="html">#2000</label>
          </Amount>
          <Delivery>
            <input type="radio" />
            <label for="css">Pay on delivery</label>
          </Delivery>
        </DeliveryOption>
        <Typography variant="bodySmallThree">{date}</Typography>
      </OrderInfo>
    </DetailsWrapper>
  );
}

export default OrderList;
