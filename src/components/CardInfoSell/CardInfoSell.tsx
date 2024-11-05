import React, { useEffect, useState } from 'react';
import { Card } from '../../types/cardTypes';
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
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Card Name"
          disabled 
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit" disabled={!isFormValid}>
          Post Card
        </button>
      </form>
    </div>
  );
};

export default CardForm;