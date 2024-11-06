import { useState, useEffect, useRef } from 'react';
import { searchCards } from '../services/ApiService';
import { Card } from '../types/cardTypes';

const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Card[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const cache = useRef<{ [key: string]: Card[] }>({});

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      setLoading(false);
      return;
    }

    if (cache.current[query]) {
      setResults(cache.current[query]);
      setLoading(false);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    setLoading(true);

    debounceRef.current = setTimeout(async () => {
      try {
        const cards: Card[] = await searchCards(query);
        setResults(cards);
        cache.current[query] = cards;
        setError(null);
      } catch {
        setError('No cards found');
      } finally {
        setLoading(false);
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
    loading,
    setQuery,
    handleCardClick,
    handleClosePopup,
  };
};

export default useSearch;