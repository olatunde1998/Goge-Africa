import styled from "styled-components";
import { Typography } from "components/Typography";
import { PictureStyle } from "components/pictureComponent/PictureComponent";
import { Link } from "react-router-dom";

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
  max-width: 100px;
  border: 1px solid grey;
  margin-right: 10px;
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

function OrderList({ imgURL, courseName, category, status, teacher, date }) {
  return (
    <Link to="/settings" style={{ textDecoration: "none" }}>
    <DetailsWrapper>
      <OrderImageAvatar>
        <AvatarWrapper>
          <PictureStyle src={imgURL}/>
        </AvatarWrapper>
        <Typography variant="bodySmallThree">{courseName}</Typography>
      </OrderImageAvatar>
      <OrderInfo>
        <Typography variant="bodySmallThree">{category}</Typography>
        <Typography variant="bodySmallThree">{status}</Typography>
        <Typography variant="bodySmallThree">{teacher} </Typography>
        <Typography variant="bodySmallThree">{date}</Typography>
      </OrderInfo>
    </DetailsWrapper>
    </Link>
  );
}

export default OrderList;
