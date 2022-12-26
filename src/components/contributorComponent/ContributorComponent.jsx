import styled from "styled-components";
import LeftContainer from "components/contributorComponent/LeftContainer";
import RightContainer from "components/contributorComponent/RightContainer";

const ContributorWrapper = styled.div`
background-color: #fff7df;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
@media (min-width: 768px) {
  display: flex;
  flex-direction: row;
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
