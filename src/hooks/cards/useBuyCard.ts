// src/hooks/useBuyCard.ts
import { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

export const useBuyCard = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const buyCard = async (cardId: string, buyerId: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase
        .from('cards')
        .update({ isSold: true, buyerId })
        .eq('cardId', cardId);

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

  return { buyCard, loading, error, success };
};
