import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Card } from '../../types/cardTypes';
import './SearchSell.css';

const SearchSell = () => {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const handleCardClick = (card: Card) => {
    if (!selectedCards.some((selectedCard) => selectedCard.id === card.id)) {
      setSelectedCards((prevCards) => [...prevCards, card]);
    }
  };

  return (
    <div className="search-sell-container">
      <h1>Busca y selecciona tu carta</h1>

      <SearchBar onCardClick={handleCardClick} />

      <div className="selected-cards">
        <h2>Cartas seleccionadas:</h2>
        <div className="card-grid">
          {selectedCards.map((card) => (
            <div key={card.id} className="card-item">
              <img src={card.images.small} alt={card.name} className="card-image" />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSell;


