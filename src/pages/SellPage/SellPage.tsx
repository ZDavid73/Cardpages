import SearchSell from '../../components/SearchSell/SearchSell';
import CardForm from '../../components/CardInfoSell/CardInfoSell';
import { Tittle } from '../../theme/styledcomponents';
import { FaChevronLeft } from "react-icons/fa";
import { Card } from '../../types/cardTypes';
import { useState } from 'react';
import './SellPage.css';

const SellPage = () => {
  
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleBackClick = () => {
    console.log("Back clicked");
  };  

  return (
    <div className='sell-page'>
      <div className='search-sell-container'>
      <div className='headertittle'>
       <FaChevronLeft onClick={handleBackClick} className='FaChevronLeft' /> 
      <Tittle variant='white'>Sell Card</Tittle>
      </div>
      <SearchSell selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      </div>
      <div className='card-form-container'>
      <CardForm selectedCard={selectedCard} />
      </div>
    </div>
  );
};

export default SellPage;

