import React, { useEffect } from 'react';
import useSearchSell from '../../hooks/useSearchSell';
import { Input } from '../../theme/styledcomponents';
import './SearchSell.css';
import { Card } from '../../types/cardTypes';
import { useSelector } from 'react-redux';
import { AppState } from '../../types/stateType';
import { isCard } from '../../utils/typeGuards';

interface SearchSellProps {
  selectedCard: Card | null;
  setSelectedCard: (card: Card) => void;
}

const SearchSell: React.FC<SearchSellProps> = ({ selectedCard, setSelectedCard }) => {
  const { query, results, error, setQuery } = useSearchSell();
  const modalDetails = useSelector((state: AppState) => state.modal.modalDetails);

  const [image, setImage] = React.useState<string | null>(null);

  useEffect(() => {
    if (isCard(modalDetails)) {
      if (modalDetails.images.small !== image) {
        setImage(modalDetails.images.small);
      }
    }
  }, [modalDetails, image]);

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

{ image && <img src={image} alt="Card" className="selected-card-image" /> }

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
