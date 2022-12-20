import styled from "styled-components";
import TestimonyList from "components/aboutUsComponent/TestimonyList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  max-width: 250px;
  background-color: #ff8a00;
  color: white;
  font-size: 30px;
`;
const TestimonyWrapper = styled.div`
  margin-right: 20px;
`
function Testimony({ rating, comment, icon }) {
  return (
    <TestimonyWrapper>
      <IconWrapper>
        <a href="www.facebook.com">
          <FontAwesomeIcon icon={icon} />
        </a>
      </IconWrapper>
      <TestimonyList rating={rating} comment={comment} />
    </TestimonyWrapper>
  );
}

export default Testimony;
