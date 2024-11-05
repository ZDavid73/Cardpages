import React, { useEffect, useState } from 'react';
import { Card } from '../../types/cardTypes';
import { Input, Button, Tittle  } from '../../theme/styledcomponents';
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
        <Tittle variant="white">Price</Tittle>
        <Input
          variant="boxwhite"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <Tittle variant="white">Description</Tittle>
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