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

  
};

export default useSearchSell;
