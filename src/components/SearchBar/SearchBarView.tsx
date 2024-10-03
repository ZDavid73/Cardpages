import React from 'react';
import { Card } from '../../types/cardTypes';
import { Input } from '../../theme/styledcomponents';
import './SearchBarView.css'; 

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
}) => {
  return (
    <div>
      <Input variant='searchgray' value={query} onChange={onQueryChange} placeholder="Enter card name" />

      {error && <p>{error}</p>}

      <ul className="list">
        {results.map((card) => (
          <li key={card.id} className="list-item">
            <img
              src={card.images.small}
              alt={card.name}
              className="card-image"
              onClick={() => onCardClick(card)}
            />
          </li>
        ))}
      </ul>

      {/*selectedCard && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={onClosePopup}>Close</button>
            <img src={selectedCard.images.large} alt={selectedCard.name} />
            <h3>{selectedCard.name}</h3>
          </div>
        </div>
      )*/}
    </div>
  );
};

export default SearchBarView;
