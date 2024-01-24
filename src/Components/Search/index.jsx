import Icons from "../../Icons";
import { Input, InputWrapper, SearchBtn } from "./index.styles";

const Search = ({search,handleSearchChange}) => {
    return (
        <InputWrapper>
           <Input placeholder="Search ..." type="text" value={search} onChange={handleSearchChange} />
           <SearchBtn>
            <img src={Icons.SearchIcon} alt="search" width="21px" height="21px" />
           </SearchBtn>
        </InputWrapper>
    )
}

export default Search;