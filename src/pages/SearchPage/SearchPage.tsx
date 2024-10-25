import SearchBar from '../../components/SearchBar/SearchBar';
import { Tittle } from '../../theme/styledcomponents';


const SearchPage = () => {
  return (
    <div>
      <Tittle variant='white'>Search Cards</Tittle>
      <SearchBar />
    </div>
  );
};

export default SearchPage;