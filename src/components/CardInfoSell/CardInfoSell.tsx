import React, { useEffect, useState } from 'react';
import { SellingCard } from '../../types/cardTypes';
import { useCardTransactions, } from '../../hooks/useCards';
import { Input, Button,  } from '../../theme/styledcomponents';
import './CardInfoSell.css';

interface CardFormProps {
  selectedCard: SellingCard | null;
}

const CardForm: React.FC<CardFormProps> = ({ selectedCard }) => {
  const [cardName, setCardName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const { handleSellCard } = useCardTransactions();

  useEffect(() => {
    if (selectedCard) {
      setCardName(selectedCard.name);
    }
  }, [selectedCard]);

  const isFormValid = cardName && price && description;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedCard && price) {
      const error = await handleSellCard(selectedCard.cardId, selectedCard.sellerId, parseFloat(price));
      if (error) {
        console.error('Error selling card:', error);
      } else {
        console.log('Card posted:', { cardName, price, description });
      }
    }
  };

  return (
    <div className='card-form'>
      <form onSubmit={handleSubmit}>
        <Input
          variant="borderpurple"
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Card Name"
          disabled 
        />
        <Input
          variant="boxwhite"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />        
        <Input
          variant="boxwhite"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <Button variant="purple" type="submit" disabled={!isFormValid}>
          Post Card
        </Button>
      </form>
    </div>
  );
};

export default CardForm;