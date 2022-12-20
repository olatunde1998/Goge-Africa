import styled from "styled-components";
import Testimony from "components/aboutUsComponent/Testimony";
import { faAward, faFile, faUserGraduate, faEye } from "@fortawesome/free-solid-svg-icons";

const TestimonyComponentWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #ff8a00;
  padding: 60px 20px 60px 30px;

`;

function TestimonyComponent() {
  return (
    <TestimonyComponentWrapper>
      <Testimony
        rating="5,679"
        comment="Registered Students"
        icon={faUserGraduate}
      />

      <Testimony
        rating="2,679"
        comment="Students has been helped to their dreams"
        icon={faFile}

      />
      <Testimony
        rating="10,000"
        comment="More than 10,000 people visits our site "
        icon={faEye}

      />
      <Testimony
        rating="#10"
        comment="Ranked Among the top 10 growing  Africa"
        icon={faAward}
      />
    </TestimonyComponentWrapper>
  );
}

export default TestimonyComponent;
