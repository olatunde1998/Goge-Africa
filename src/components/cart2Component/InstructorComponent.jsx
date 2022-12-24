import styled from "styled-components";
import InstructorProfile from "components/cart2Component/InstructorProfile";
import Module from "components/cart2Component/Module";
import InstructorDescription from "./InstructorDescription";

const InstructorComponentWrapper = styled.div``;
const InstructorComponentBox = styled.div`
  margin: 0 auto;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const DescriptionModule = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  @media (min-width: 1024px) {
    margin-left: 0px;
  }
`;

function InstructorComponent() {
  return (
    <InstructorComponentWrapper>
      <InstructorComponentBox>
        <InstructorProfile />
        <DescriptionModule>
          <InstructorDescription />
          <Module
            module="Module 1"
            lesson1="Lesson 1"
            lesson2="Lesson 2"
            lesson3="Lesson 3"
            lesson4="Lesson 4"
          />
        </DescriptionModule>
      </InstructorComponentBox>
    </InstructorComponentWrapper>
  );
}

export default InstructorComponent;
