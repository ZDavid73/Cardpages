import { useEffect, useState } from 'react';
import { SellingCard } from '../../types/cardTypes';
import { supabase } from '../../services/supabaseClient';


export const useFetchCards = () => {
  const [cards, setCards] = useState<SellingCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data, error } = await supabase
          .from('cards')
          .select('*');
        
        if (error) throw error;
        setCards(data || []);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { cards, loading, error };
};
