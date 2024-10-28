import React from 'react';
import useSearchSell from '../../hooks/useSearchSell';

const SearchSell = () => {
  const { query, results, error, selectedCards, setQuery, handleCardClick } = useSearchSell();

  return (
    <div className="search-sell-container">
      <h1>Busca tu carta para vender</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe el nombre de la carta"
        className="search-input"
      />

      {error && <p className="error-message">{error}</p>}

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
          <h2>Cartas seleccionadas:</h2>
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
