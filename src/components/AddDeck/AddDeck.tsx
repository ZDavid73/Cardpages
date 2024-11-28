import './AddDeck.css';
import SearchCard from "../SearchCards/SearchCards";
import { FaChevronLeft } from "react-icons/fa";
import useModal from '../../hooks/useModal';
import { Tittle } from '../../theme/styledcomponents';
import DeckForm from '../DeckForm/DeckForm';
import { DragDropProvider } from '../../context/dragDropContext';

const AddDeck = () => {
  const { handleClose } = useModal();
  const handleOverlayClick = () => {
    handleClose();
  };

  return (
    <DragDropProvider>
    <div className='catalogues-deckmodal'>
      <div className="search-deck">
        <div className='header-deck'>
          <FaChevronLeft onClick={handleOverlayClick} className='FaChevronLeft' />
          <Tittle variant='white'>Sell Deck</Tittle>
        </div>
        <SearchCard />
      </div>
      <div className="create-deck">
        <DeckForm /> {/* Pasamos handleClose */}
      </div>
    </div>
    </DragDropProvider>
  );
};

export default AddDeck;