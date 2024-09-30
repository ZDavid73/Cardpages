import useSearch from '../../hooks/useSearch';
import SearchBarView from './SearchBarView';

const SearchBar = () => {
  const {
    query,
    results,
    error,
    selectedCard,
    setQuery,
    handleCardClick,
    handleClosePopup,
  } = useSearch();

  return (
    <SearchBarView
      query={query}
      error={error}
      results={results}
      onQueryChange={(e) => setQuery(e.target.value)}
      onCardClick={handleCardClick}
      selectedCard={selectedCard}
      onClosePopup={handleClosePopup}
    />
  );
};

export default SearchBar;