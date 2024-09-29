/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { SellingCard } from '../types/cardTypes';
import { supabase } from '../services/supabaseClient';

export const useCardTransactions = () => {
  const [cards, setCards] = useState<SellingCard[]>([]);

  const fetchCards = async (): Promise<string | null> => {
    try {
      const { data, error } = await supabase
        .from('cards')
        .select('*');
      
      if (error) throw error;
      setCards(data || []);
      return null;
    } catch (err: any) {
      return err.message;
    }
  };

  const sellCard = async (
    cardId: string,
    sellerId: string,
    price: number
  ): Promise<string | null> => {
    try {
      const { error } = await supabase
        .from('cards')
        .insert([{ cardId, sellerId, price, isSold: false, buyerId: null }]);
      
      if (error) throw error;
      return null;
    } catch (err: any) {
      return err.message;
    }
  };

  const buyCard = async (
    cardId: string,
    buyerId: string
  ): Promise<string | null> => {
    try {
      const { error } = await supabase
        .from('cards')
        .update({ isSold: true, buyerId })
        .eq('cardId', cardId);
      
      if (error) throw error;
      return null;
    } catch (err: any) {
      return err.message;
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return {
    cards,
    fetchCards,
    sellCard,
    buyCard
  };
};
