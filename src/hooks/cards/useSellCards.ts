import { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

export const useSellCard = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const sellCard = async (cardId: string, sellerId: string, price: number) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase
        .from('cards')
        .insert([{ cardId, sellerId, price, isSold: false, buyerId: null }]);

      if (error) throw error;

      setSuccess(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { sellCard, loading, error, success };
};
