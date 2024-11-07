import React from 'react';
import useSearchSell from '../../hooks/useSearchSell';
import { Input } from '../../theme/styledcomponents';
import './SearchSell.css';
import { Card } from '../../types/cardTypes';

interface SearchSellProps {
  selectedCard: Card | null;
  setSelectedCard: (card: Card) => void;
}

const SearchSell: React.FC<SearchSellProps> = ({ selectedCard, setSelectedCard }) => {
  const { query, results, error, setQuery } = useSearchSell();
  const modalDetails = useSelector((state: AppState) => state.modal.modalDetails);

  const handleCardClick = (card: Card) => {
    setSelectedCard(card); 
  };

  return (
    <div className="search-sell-container">

      <Input
        variant="search"
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
            className={`card-result ${selectedCard?.id === card.id ? 'card-selected' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            <img src={card.images.small} alt={card.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSell;
