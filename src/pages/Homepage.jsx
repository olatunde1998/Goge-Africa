import NavigationComponent from "components/navigationComponents/NavigationComponent";
import HeroComponent from "components/heroComponents/HeroComponent";
import FooterComponent from "components/footerComponents/FooterComponent";
import CardComponentList from "components/homeCardComponent/CardComponentList";
import CoursesList from "components/homeCardComponent/CoursesList";
import styled from "styled-components";


const HeroComponentWrapper = styled.div`
  background-color: #FF8A00;
`
const CardWrapper = styled.div`
  border: 2px solid red;
  display: flex;
`;
const CardWrapperBox = styled.div`
  border: 2px solid green;
  margin: 0 auto;
  display: flex;
`;

function Homepage() {
  return (
    <div>
      <NavigationComponent />
      <HeroComponentWrapper>
      <HeroComponent
        title="Browse Thousands of Our Video Tutorials Curated Only for you."
        subtitle="Access all tutorials and resources when you become a premium member of Semaj Africa."
        imgURL="assets/img/home-page-image.png"
      />
      </HeroComponentWrapper>
      <CardWrapper>
        <CardWrapperBox>
          <CardComponentList />
          <CoursesList />
        </CardWrapperBox>
      </CardWrapper>
      <div>Homepage</div>
      <FooterComponent />
    </div>
  );
}

export default Homepage;
