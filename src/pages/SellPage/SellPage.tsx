import SearchSell from '../../components/SearchSell/SearchSell';
import CardForm from '../../components/CardInfoSell/CardInfoSell';
import { Card } from '../../types/cardTypes';
import { useState } from 'react';
import './SellPage.css';

const SellPage = () => {
  
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <div className='sell-page'>
      <div className='search-sell-container'>
      <SearchSell selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      </div>
      <div className='card-form-container'>
      <CardForm selectedCard={selectedCard} />
      </div>
    </div>
  );
};

export default SellPage;

