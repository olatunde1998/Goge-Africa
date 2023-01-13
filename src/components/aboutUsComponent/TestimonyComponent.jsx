import styled from "styled-components";
import Testimony from "components/aboutUsComponent/Testimony";
import {MdCancelScheduleSend,MdVoiceOverOff,MdTurnedInNot,MdBorderClear } from "react-icons/md";


const TestimonyComponentWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #ff8a00;
  padding: 60px 20px 60px 30px;
`;
const IconWrapper = styled.div`
  max-width: 250px;
  background-color: #ff8a00;
  color: white;
  font-size: 30px;
`;
const Graduate = styled.div`
  padding-left: 3px;
  padding-right: 2px;
`;

function TestimonyComponent() {
  return (
    <TestimonyComponentWrapper>
      <Graduate>
        <IconWrapper>
          <a href="www.facebook.com">
            <MdCancelScheduleSend  style={{color:"white"}}/>
          </a>
        </IconWrapper>
        <Testimony rating="5,679" comment="Registered Students" />
      </Graduate>

      <Graduate>
        <IconWrapper>
          <a href="www.facebook.com">
            <MdVoiceOverOff  style={{color: "white"}}/>
          </a>
        </IconWrapper>

        <Testimony
          rating="2,679"
          comment="Students has been helped to their dreams"
        />
      </Graduate>

      <Graduate>
        <IconWrapper>
          <a href="www.facebook.com">
            <MdTurnedInNot  style={{color: "white"}}/>
          </a>
        </IconWrapper>
        <Testimony
          rating="10,000"
          comment="More than 10,000 people visits our site "
        />
      </Graduate>

      <Graduate>
        <IconWrapper>
          <a href="www.facebook.com">
            <MdBorderClear  style={{color: "white"}}/>
          </a>
        </IconWrapper>
        <Testimony
          rating="#10"
          comment="Ranked Among the top 10 growing  Africa"
        />
      </Graduate>
    </TestimonyComponentWrapper>
  );
}

export default TestimonyComponent;
