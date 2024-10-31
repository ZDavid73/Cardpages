import './AddButton.css';
import useModal from '../../hooks/useModal';
import { useState } from 'react';

const AddButton = () => {
  const { handleOpen, renderModalContent } = useModal();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    if (option === 'Add Deck') {
      handleOpen('createDeck');
    } else if (option === 'Add Card') {
      handleOpen('createTournament');
    }
    setShowOptions(false);
  };

  return (
    <div className='catalogues-button'>
      <button onClick={toggleOptions}>+</button>
      {showOptions && (
        <div className='options-menu'>
          <button onClick={() => handleOptionClick('Add Card')}>Add Card</button>
          <button onClick={() => handleOptionClick('Add Deck')}>Add Deck</button>
        </div>
      )}
      {renderModalContent()}
    </div>
  );
};

export default AddButton;