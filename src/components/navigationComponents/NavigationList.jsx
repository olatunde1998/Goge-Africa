import { Typography } from "components/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationListContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    vertical-align: center;
    padding: 0 0.5rem;
    max-width: 400px;
  }
`;

function NavigationList() {
  return (
    <NavigationListContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="bodySmall">Home</Typography>
      </Link>
      <Link to="/courses" style={{ textDecoration: "none" }}>
        <Typography variant="bodySmall">Courses</Typography>
      </Link>
      <Link to="/blog" style={{ textDecoration: "none" }}>
        <Typography variant="bodySmall">Blog</Typography>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <Typography variant="bodySmall">About Us</Typography>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <Typography variant="bodySmall">Contact Us</Typography>
      </Link>
    </NavigationListContainer>
  );
}

export default NavigationList;
