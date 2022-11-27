import styled from 'styled-components'

import Button from 'components/buttonComponent/Button';

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & button:first-child {
    margin-right: 1rem;
  }
  
`

function NavigationBtn() {
  return (
    <NavButtonContainer>
      <Button>Be a Contributor</Button>
      <Button>Login</Button>
    </NavButtonContainer>
  )
}

export default NavigationBtn;