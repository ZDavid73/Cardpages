import React from 'react';
import useSearch from '../../hooks/useSearch';
import { Card } from '../../types/cardTypes';
import { cardsData } from '../../services/cardsData'; 
import './SearchCard.css';
import { Input, Text } from '../../theme/styledcomponents';
import useDragDrop from '../../hooks/useDragDrop';

const SearchCard: React.FC = () => {
  const { query, results, error, loading, setQuery } = useSearch();
  const { handleDrag, handleTouchStart } = useDragDrop();

  const defaultCards: Card[] = cardsData;
  const displayedCards = query.length === 0 ? defaultCards : results;

  return (
    <div className="search-bar">
      <Input
        variant='search'
        type="text"
        placeholder="Search for your card..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <Text variant='white' className="error-message">{error}</Text>}
      {loading && <Text variant='white'>Cargando...</Text>}
      <div className="results-container">
        {displayedCards.map((card: Card) => (
          <div
            key={card.id}
            className="card-item-search"
            draggable
            onDragStart={(e) => handleDrag(e, card.id, card.images.small)}
            onTouchStart={(e) => handleTouchStart(e, card.id, card.images.small)}
          >
            <img src={card.images.small} alt={card.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCard;