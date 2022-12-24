import styled from "styled-components";

const ModuleContainer = styled.div`
  padding: 20px 0px 30px 0px;
  width: 100%;
  border: 1px solid grey;
  margin-left: 3px;
  @media (min-width: 1024px) {
    width: 200px;
  }
`;
const ModuleBox = styled.div``;
const List = styled.li`
  list-style-type: none;
  margin: 30px 0px;
`;
const Heading = styled.p`
    border-bottom: 1px solid grey;
    padding-bottom 30px;
`;

function Module({ module, lesson1, lesson2, lesson3, lesson4 }) {
  return (
    <ModuleContainer>
      <ModuleBox>
        <Heading>{module}</Heading>
        <List style={{ color: "#5C5C5C" }} variant="bodySmallFour">
          {lesson1}
        </List>
        <List style={{ color: "#5C5C5C" }} variant="bodySmallFour">
          {lesson2}
        </List>
        <List style={{ color: "#5C5C5C" }} variant="bodySmallFour">
          {lesson3}
        </List>
        <List style={{ color: "#5C5C5C" }} variant="bodySmallFour">
          {lesson4}
        </List>
      </ModuleBox>
    </ModuleContainer>
  );
}

export default Module;
