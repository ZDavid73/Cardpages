import { useState } from 'react';
import './AddButton.css';
import useModal from '../../hooks/useModal';
import { Button  } from '../../theme/styledcomponents';

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
      <Button variant="purple"onClick={toggleOptions}>+</Button>
      {showOptions && (
        <div className='options-menu'>
          <Button variant="white" onClick={() => handleOptionClick('Add Card')}>Add Card</Button>
          <Button variant="white" onClick={() => handleOptionClick('Add Deck')}>Add Deck</Button>
        </div>
      )}
    </div>
  );
};

export default AddButton;