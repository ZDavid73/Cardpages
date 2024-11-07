import SearchSell from '../../components/SearchSell/SearchSell';
import CardForm from '../../components/CardInfoSell/CardInfoSell';
import { Tittle } from '../../theme/styledcomponents';
import { FaChevronLeft } from "react-icons/fa";
import useModal from '../../hooks/useModal';
import { Card } from '../../types/cardTypes';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './SellPage.css';

const SellPage = () => {
  
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const {handleClose } = useModal();
  const modal = useSelector((state: AppState) => state.modal);
  
  
  useEffect(() => {
    if(modal.details && modal.modal === "createCard"){
      setSelectedCard(modal.details as Card);
    }
  }, [modal.details, modal.modal]);

  const handleOverlayClick = () => {
    handleClose();
};  


  return (
    <div className='sell-page'>
      <div className='search-sell-container'>
      <div className='headertittle'>
       <FaChevronLeft onClick={handleOverlayClick} className='FaChevronLeft' /> 
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

