import { useState } from 'react';
import './AddButton.css';
import useModal from '../../hooks/useModal';

const AddButton = () => {
  const { handleOpen } = useModal();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    if (option === 'Add Deck') {
      handleOpen('createDeck');
    } else if (option === 'Add Card') {
      handleOpen('createCard');
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
    </div>
  );
};

export default AddButton;