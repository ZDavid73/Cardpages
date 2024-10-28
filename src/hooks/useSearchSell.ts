import { useState, useEffect, useRef } from 'react';
import { searchCards } from '../services/ApiService';
import { Card } from '../types/cardTypes';

const useSearchSell = () => {
  const [query, setQuery] = useState(''); 
  const [results, setResults] = useState<Card[]>([]); 
  const [error, setError] = useState<string | null>(null);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]); 
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

    

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query]);

  const handleCardClick = (card: Card) => {
    if (!selectedCards.some((selectedCard) => selectedCard.id === card.id)) {
      setSelectedCards((prevCards) => [...prevCards, card]);
    }
  };

  return {
    query,
    results,
    error,
    selectedCards,
    setQuery,
    handleCardClick,
  };
  
};

export default useSearchSell;
