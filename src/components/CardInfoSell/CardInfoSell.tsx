import { useEffect, useState } from 'react';
import { Card } from '../../types/cardTypes';
import { useCardTransactions, } from '../../hooks/useCards';
import { Input, Button,  } from '../../theme/styledcomponents';
import './CardInfoSell.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../types/stateType';
import { isCard } from '../../utils/typeGuards';

interface CardFormProps {
  selectedCard: Card | null;
}

const CardForm = ({selectedCard}: CardFormProps) => {
  const [cardName, setCardName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const { handleSellCard } = useCardTransactions();
  const modalDetails = useSelector((state: AppState) => state.modal.modalDetails);

  if (isCard(modalDetails)) {
    setPrice(String(modalDetails.price));
    setDescription(modalDetails.description);
    setCardName(modalDetails.name);

  }

  useEffect(() => {
    if (selectedCard) {
      setCardName(selectedCard.name);
    }
  }, [selectedCard]);

  const isFormValid = cardName && price && description;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedCard && price && description) { 
      const error = await handleSellCard(selectedCard, parseFloat(price), description);
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
        <div className='info-card'>
        <label htmlFor="card-price">Price</label>
        <Input
          variant="boxwhite"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        /></div> 
        <div className='info-card'>
        <label htmlFor="card-description">Description</label>       
        <Input
          variant="boxwhite"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        /></div>
        <Button variant="purple" type="submit" disabled={!isFormValid}>
          Post Card
        </Button>
      </form>
    </div>
  );
}

export default CardForm;