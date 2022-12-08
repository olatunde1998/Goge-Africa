import styled from "styled-components";
import Datas from "components/dummyData/homeCardData.json";
import Card from "components/homeCardComponent/Card";

const CardComponentListWrapper = styled.div`
  border: 2px solid green;
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
`;

function CardComponentList() {
  return (
    <CardComponentListWrapper>
      {Datas.map((data, idx) => {
        console.log(data);
        return <Card imgURL={data.imgURL} headings={data.description} />;
      })}
    </CardComponentListWrapper>
  );
}

export default CardComponentList;
