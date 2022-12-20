import styled from "styled-components";
import { Typography } from "components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const FilteringAndSortingContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 16px;
  @media (min-width: 768px) {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
  }
`;
const ShowingNumber = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 320px;
`;
const FilterSortWrapper = styled.div`
  text-align: left;
  display: flex;
`;
const FilterSort = styled.select`
  border: 1px solid grey;
  padding: 12px 15px 12px 15px;
  border-radius: 20px;
  margin-right: 10px;
`;
const MenuBarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MenuBar = styled.div`
  margin-right: 10px;
`;

function FilteringAndSorting() {
  return (
    <FilteringAndSortingContainer>
      <ShowingNumber>
        <Typography variant="bodySmallThree">
          Showing 1-8 of 10 results
        </Typography>
        <Typography variant="bodySmallThree">Show 6 12 16</Typography>
      </ShowingNumber>
      <FilterSortWrapper>
        <MenuBarContainer>
          <MenuBar>
            <a href="www.menu">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </MenuBar>
          <MenuBar>
            <a href="www.menu">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </MenuBar>
        </MenuBarContainer>

        <FilterSort id="cars" name="cars">
          <option value="filter">Filter</option>
          <option value="designs">designs</option>
        </FilterSort>
        <FilterSort id="sort" name="sort">
          <option value="sort">Sort by</option>
          <option value="designs">designs</option>
        </FilterSort>
      </FilterSortWrapper>
    </FilteringAndSortingContainer>
  );
}

export default FilteringAndSorting;
