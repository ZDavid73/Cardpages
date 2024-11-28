import { useState } from 'react';
import './AddButton.css';
import useModal from '../../hooks/useModal';
import { ButtonForm } from '../../theme/styledcomponents';
import { FiPlus } from "react-icons/fi";

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
      <button className='catalogues-button-button' onClick={toggleOptions}><FiPlus className='catalogues-button-icon'/></button>
      {showOptions && (
        <div className='options-menu'>
          <ButtonForm id='options-menu-button1' variant="whiteForm" onClick={() => handleOptionClick('Add Card')}>Add Card</ButtonForm>
          <ButtonForm variant="whiteForm" id='options-menu-button2' onClick={() => handleOptionClick('Add Deck')}>Add Deck</ButtonForm>
        </div>
      )}
    </div>
  );
};

export default AddButton;