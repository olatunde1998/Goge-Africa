import styled from "styled-components";
import Testimony from "components/aboutUsComponent/Testimony";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const TestimonyWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #ff8a00;
`;

function TestimonyComponent() {
  return (
    <TestimonyWrapper>
      <FontAwesomeIcon Icon={faYoutube}></FontAwesomeIcon>
      <Testimony
        rating="5,679"
        comment="Registered Students"
        imgURL={faGithub}
      ></Testimony>
      <Testimony
        rating="2,679"
        comment="Students has been helped to achieve their dreams"
        imgURL={{ faYoutube }}
      />
      <Testimony
        rating="10,000"
        comment="More than 10,000 people visits our site monthly"
        imgURL={{ faYoutube }}
      />
      <Testimony
        rating="#10"
        comment="Ranked Among the top 10 growing online learning startup in West Africa"
        imgURL={{ faYoutube }}
      />
    </TestimonyWrapper>
  );
}

export default TestimonyComponent;
