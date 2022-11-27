import { Typography } from 'components/Typography';
import styled from 'styled-components'

const NavigationListContainer = styled.div`
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      vertical-align: center;
      padding: 0 .5rem;
      max-width: 400px;

    }
`;


function NavigationList() {
  return (
    <NavigationListContainer>
        <Typography variant="bodySmall">Home</Typography>
        <Typography variant="bodySmall">Courses</Typography>
        <Typography variant="bodySmall">Blog</Typography >
        <Typography variant="bodySmall">About Us</Typography>
        <Typography variant="bodySmall">Contact Us</Typography> 
    </NavigationListContainer>
  )
}

export default NavigationList