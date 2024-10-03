import { useState, useEffect, useRef } from 'react';
import { searchCards } from '../services/ApiService';
import { Card } from '../types/cardTypes';

const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Card[]>([]); 
  const [error, setError] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const cache = useRef<{ [key: string]: Card[] }>({});

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    if (cache.current[query]) {
      setResults(cache.current[query]);
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

  return {
    query,
    results,
    error,
    selectedCard,
    setQuery,
    handleCardClick,
    handleClosePopup,
  };
};

export default useSearch;