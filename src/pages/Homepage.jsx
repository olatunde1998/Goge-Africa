import NavigationComponent from "components/navigationComponents/NavigationComponent";
import HeroComponent from "components/heroComponents/HeroComponent";
import FooterComponent from "components/footerComponents/FooterComponent";
import CardComponentList from "components/homeCardComponent/CardComponentList";
import CoursesList from "components/homeCardComponent/CoursesList";
import styled from "styled-components";
import Search from "components/homeCardComponent/Search";
import FilteringAndSorting from "components/homeCardComponent/FilteringAndSorting";

const HeroComponentWrapper = styled.div`
  background-color: #ff8a00;
`;
const CardWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  margin-bottom: 20px;
`;
const CardWrapperBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
const SearchWrapper = styled.div`
  padding: 0px 10px 0px 10px;
`;
const FilteringAndSortingWrapper = styled.div`
padding: 0px 10px 0px 10px;
`;

function Homepage() {
  return (
    <div>
      <NavigationComponent />
      <HeroComponentWrapper>
        <HeroComponent
          title="Browse Thousands of Our Video Tutorials Curated Only for you."
          subtitle="Access all tutorials and resources when you become a premium member of Semaj Africa."
          imgURL="/assets/img/home-page-image.png"
        />
      </HeroComponentWrapper>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <FilteringAndSortingWrapper>
        <FilteringAndSorting />
      </FilteringAndSortingWrapper>
      <CardWrapper>
        <CardWrapperBox>
          <CardComponentList />
          <CoursesList />
        </CardWrapperBox>
      </CardWrapper>
      <FooterComponent />
    </div>
  );
}

export default Homepage;
