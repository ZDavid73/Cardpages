import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';

interface SearchPageProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <h1>Search Cards</h1>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
