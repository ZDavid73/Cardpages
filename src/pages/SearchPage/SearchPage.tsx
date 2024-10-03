import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Tittle } from '../../theme/styledcomponents';

interface SearchPageProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Tittle variant='white'>Search Cards</Tittle>
      <SearchBar />
    </div>
  );
};

export default SearchPage;