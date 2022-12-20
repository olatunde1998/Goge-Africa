import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchWrapper = styled.div`
  padding: 16px;
  margin: 0 auto;
  background-color: #FF8A00;
  margin-top: 50px;
  border-radius: 16px;
  @media (min-width: 768px) {
  max-width: 1000px;

  }
`;
const IconWrapper = styled.div`
    width: 100px;
`;
const InputWrapper = styled.div`
  width: 100%;
`;

const SearchBox = styled.div`
  display: flex;
  border-bottom: 3px solid white;
`;

const Input = styled.input`
  width: 97%;
  padding: 10px 0px 10px 10px;
  background-color: #ff8a00;
  color: white;
  border: none;
`;

function Search() {
  return (
    <SearchWrapper>
      <SearchBox>
        <IconWrapper>
            <a href="/#">
                <FontAwesomeIcon icon={faSearch}/>
            </a>
        </IconWrapper>
        <InputWrapper>
        <Input placeholder="Search for Courses i.e web development" />
        </InputWrapper>
      </SearchBox>
    </SearchWrapper>
  );
}

export default Search;
