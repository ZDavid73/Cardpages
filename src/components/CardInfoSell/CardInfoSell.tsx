import React, { useEffect, useState } from 'react';
import { Card } from '../../types/cardTypes';
import { Input, Button  } from '../../theme/styledcomponents';
import './CardInfoSell.css';

interface CardFormProps {
  selectedCard: Card | null;
}

const CardForm: React.FC<CardFormProps> = ({ selectedCard }) => {
  const [cardName, setCardName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedCard) {
      setCardName(selectedCard.name);
    }
  }, [selectedCard]);

  const isFormValid = cardName && price && description;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card posted:', { cardName, price, description });
  };

  return (
    <div className="card-form">
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
        <Button type="submit" disabled={!isFormValid}>
          Post Card
        </Button>
      </form>
    </div>
  );
};

export default CardForm;