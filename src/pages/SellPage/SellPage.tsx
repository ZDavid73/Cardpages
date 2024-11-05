import SearchSell from '../../components/SearchSell/SearchSell';
import CardForm from '../../components/CardInfoSell/CardInfoSell';
import { Card } from '../../types/cardTypes';
import { useState } from 'react';
import './SellPage.css';

const SellPage = () => {
  
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <div className="sell-page">
      <SearchSell selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      <CardForm selectedCard={selectedCard} />
    </div>
  );
};

export default SellPage;

