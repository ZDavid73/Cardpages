import { useState, useEffect, useRef } from 'react';
import { searchCards } from '../../services/ApiService';
import { Card } from '../../types/cardTypes';
import SearchBarView from './SearchBarView';

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