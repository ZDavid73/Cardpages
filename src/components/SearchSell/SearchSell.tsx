import useSearchSell from '../../hooks/useSearchSell';
import { Input, Tittle} from '../../theme/styledcomponents';

const SearchSell = () => {
  const { query, results, error, selectedCards, setQuery, handleCardClick } = useSearchSell();

  return (
    <div className="search-sell-container">
      <Tittle variant='white'>Sell Card</Tittle>

      <Input variant='searchgray'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for your card..."
        className="search-input"
      />

      {error && <p className="error-message">{error}</p>}

      {results.length === 0 && query !== '' && !error && (
        <p className="no-results-message">No cards found</p>
      )}

      <div className="results">
        {results.map((card) => (
          <div
            key={card.id}
            className="card-result"
            onClick={() => handleCardClick(card)}
          >
            <img src={card.images.small} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>

      {selectedCards.length > 0 && (
        <div className="selected-cards">
          <h2>Selected Cards:</h2>
          <div className="card-grid">
            {selectedCards.map((card) => (
              <div key={card.id} className="card-item">
                <img src={card.images.small} alt={card.name} />
                <p>{card.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSell;
