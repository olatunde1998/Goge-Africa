import styled from 'styled-components'

const ButtonContainer = styled.button`
    padding: .6rem 2rem;
    min-width: 120px;
    border-radius: 2rem;
    background: #FF8A00;
    color: white;
    display: block;
    border: none;
    text-decoration: none;
    text-align: center;
`;


function Button({children}) {
  return (
    <ButtonContainer>{children}</ButtonContainer>
  )
}
export default Button;