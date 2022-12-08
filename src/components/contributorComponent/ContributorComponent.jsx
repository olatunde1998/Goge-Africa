import styled from "styled-components";
import LeftContainer from "components/contributorComponent/LeftContainer";
import RightContainer from "components/contributorComponent/RightContainer";

const ContributorWrapper = styled.div`
  background-color: #fff7df;

  @media (min-width: 768px) {
    display: flex;
    height: 100vh;
  }
`;

function ContributorComponent() {
  return (
    <ContributorWrapper>
      <LeftContainer />
      <RightContainer />
    </ContributorWrapper>
  );
}

export default ContributorComponent;
