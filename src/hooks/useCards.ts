import { useState, useEffect } from 'react';
import { Card, SellingCard } from '../types/cardTypes';
import { buyCard, fetchCards, sellCard } from '../services/databaseService';
import { useSelector } from 'react-redux';
import { AppState } from '../types/stateType';
import useModal from './useModal';

export const useCardTransactions = () => {
  const [cards, setCards] = useState<SellingCard[]>([]);
  const userId = useSelector((state: AppState) => state.user.id);
  const { handleClose } = useModal()
 
  const fetchAllCards = async (): Promise<string | null> => {
    try {
      const { data, error } = await fetchCards();
      if (error) throw error;
      setCards(data || []);
      return null;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return 'Unknown error occurred'; 
    }
  };

  const handleSellCard = async (card: Card, price: number, desc: string): Promise<string | null> => {

    const sellingCard: SellingCard = {
      id: crypto.randomUUID(),
      cardId: card.id,
      sellerId: userId,
      isSold: false,
      buyerId: null,
      price: price,
      flavorText: card.flavorText? card.flavorText : '',
      description: desc,
      images: card.images,
      name: card.name,
    } 
    handleClose();

    try {
      const { error } = await sellCard(sellingCard);
      if (error) throw error;
      console.log(error)
      return null;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
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