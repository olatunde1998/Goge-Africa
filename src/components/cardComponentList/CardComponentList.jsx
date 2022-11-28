import React from "react";
import Card from "components/cardComponentList/Card";
import styled from "styled-components";

const CardComponentListWrapper = styled.div`
  margin: 5rem 0;
`;

const bgColors = ["primary", "secondary", "tertiary"];

function CardComponentList({ dummyData }) {
  return (
    <CardComponentListWrapper>
      {dummyData &&
        dummyData.map((cardData, idx) => {
          const bgIndex = idx % bgColors.length;
          return (
            <Card
              key={idx}
              imgURL={cardData.imgURL}
              description={cardData.description}
              date={cardData.date}
              headings={cardData.headings}
              bg={bgColors[bgIndex]}
            />
          );
        })}
    </CardComponentListWrapper>
  );
}

export default CardComponentList;
