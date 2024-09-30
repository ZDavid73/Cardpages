import React from 'react';
import { Card } from '../../types/cardTypes';

interface SearchBarViewProps {
  query: string;
  error: string | null;
  results: Card[];
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCardClick: (card: Card) => void;
  selectedCard: Card | null;
  onClosePopup: () => void;
}

const SearchBarView: React.FC<SearchBarViewProps> = ({
  query,
  error,
  results,
  onQueryChange,
  onCardClick,
  selectedCard,
  onClosePopup,
}) => {
  return (
    <div>
      <h2>Search Cards</h2>
      <input
        type="text"
        value={query}
        onChange={onQueryChange}
        placeholder="Enter card name"
      />

      {error && <p>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {results.map((card) => (
          <li key={card.id} style={{ marginBottom: '20px' }}>
            <img
              src={card.images.small}
              alt={card.name}
              style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
              onClick={() => onCardClick(card)}
            />
          </li>
        ))}
      </ul>

      {selectedCard && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={onClosePopup}>Close</button>
            <img src={selectedCard.images.large} alt={selectedCard.name} />
            <h3>{selectedCard.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBarView;