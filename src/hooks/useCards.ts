import { useState, useEffect } from 'react';
import { SellingCard } from '../types/cardTypes';
import { buyCard, fetchCards, sellCard } from '../services/databaseService';

export const useCardTransactions = () => {
  const [cards, setCards] = useState<SellingCard[]>([]);

  const fetchAllCards = async (): Promise<string | null> => {
    try {
      const { data, error } = await fetchCards();
      if (error) throw error;
      setCards(data || []);
      return null;
    } catch (err) {
      // Cambiamos any por un tipo de error específico o por unknown
      if (err instanceof Error) {
        return err.message;
      }
      return 'Unknown error occurred'; // Mensaje para manejar errores no esperados
    }
  };

  const handleSellCard = async (cardId: string, sellerId: string, price: number): Promise<string | null> => {
    try {
      const { error } = await sellCard(cardId, sellerId, price);
      if (error) throw error;
      return null;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return 'Unknown error occurred';
    }
  };

  const handleBuyCard = async (cardId: string, buyerId: string): Promise<string | null> => {
    try {
      const { error } = await buyCard(cardId, buyerId);
      if (error) throw error;
      return null;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return 'Unknown error occurred';
    }
  };

  useEffect(() => {
    fetchAllCards();
  }, []);

  return {
    cards,
    fetchAllCards,
    handleSellCard,
    handleBuyCard,
  };
};