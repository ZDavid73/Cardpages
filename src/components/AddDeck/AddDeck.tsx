import './AddDeck.css';
import SearchCard from "../SearchCards/SearchCards";
import { FaChevronLeft } from "react-icons/fa";
import useModal from '../../hooks/useModal';
import { Tittle } from '../../theme/styledcomponents';
import DeckForm from '../DeckForm/DeckForm';

const AddDeck = () => {
  const { handleClose } = useModal();
  const handleOverlayClick = () => {
    handleClose();
  };

  return (
    <div className='catalogues-deckmodal'>
      <div className="search-deck">
        <div className='header-deck'>
          <FaChevronLeft onClick={handleOverlayClick} className='FaChevronLeft' />
          <Tittle variant='white'>Sell Deck</Tittle>
        </div>
        <SearchCard />
      </div>
      <div className="create-deck">
        <DeckForm handleClose={handleClose} />
      </div>
    </div>
  );
};

export default AddDeck;