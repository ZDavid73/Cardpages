import { useState, useEffect, useRef } from 'react';
import { searchCards } from '../../services/ApiService';
import { Card } from '../../types/cardTypes';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Card[]>([]); 
  const [error, setError] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const cards: Card[] = await searchCards(query);
        setResults(cards);
        setError(null);
      } catch {
        setError('No cards found');
      }
    }, 500);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query]);

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <h2>Search Cards</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
              onClick={() => handleCardClick(card)}
            />
          </li>
        ))}
      </ul>

      {selectedCard && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={handleClosePopup}>Close</button>
            <img src={selectedCard.images.large} alt={selectedCard.name} />
            <h3>{selectedCard.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

import { useState, useEffect, useRef } from 'react';
import { searchCards } from '../../services/ApiService';
import './SearchBar.css';

interface Card {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

const SearchBar = () => {
  const [game, setGame] = useState('pokemon');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Card[]>([]); 
  const [error, setError] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const cards: Card[] = await searchCards(game, query);
        setResults(cards);
        setError(null);
      } catch {
        setError('No cards found');
      }
    }, 500);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, game]);

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <h2>Search Cards</h2>
      <select value={game} onChange={(e) => setGame(e.target.value)}>
        <option value="pokemon">Pokémon</option>
        <option value="one-piece">One Piece</option>
        <option value="dragon-ball-fusion">Dragon Ball Fusion</option>
        <option value="digimon">Digimon</option>
        <option value="magic-the-gathering">Magic The Gathering</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
              onClick={() => handleCardClick(card)}
            />
          </li>
        ))}
      </ul>

      {selectedCard && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={handleClosePopup}>Close</button>
            <img src={selectedCard.images.large} alt={selectedCard.name} />
            <h3>{selectedCard.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
