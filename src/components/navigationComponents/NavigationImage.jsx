import styled from "styled-components";

const NavImageWrapper = styled.div`
  max-width: 8rem;
  margin-left: 10px;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const NavigationImg = styled.img`
  max-width: 100%;
  height: auto;
`;

function NavigationImage() {
  return (
    <NavImageWrapper>
      <NavigationImg src="/goge-africa/assets/img/Logo.png" />
    </NavImageWrapper>
  );
}

export default NavigationImage;
