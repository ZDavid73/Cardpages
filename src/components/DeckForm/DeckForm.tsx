import { StyledHr, Text, Input, Button } from '../../theme/styledcomponents'; 
import { FaLock } from "react-icons/fa"; 
import './DeckForm.css';
import useDragDrop from '../../hooks/useDragDrop';
import { useState, useEffect } from 'react';

const DeckForm = () => {
    const { items, handleDrop, handleDragOver, handleClickRemove } = useDragDrop();
  
    const cardCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const maxCards = 50;
  
    const isMaxCardsReached = cardCount >= maxCards;

    const [deckName, setDeckName] = useState<string>('');
    const [deckCover, setDeckCover] = useState<File | null>(null);
    const [deckPrice, setDeckPrice] = useState<string>('');
    const [deckDescription, setDeckDescription] = useState<string>('');

    const isFormValid = 
      cardCount >= 24 && 
      deckName.trim() !== '' && 
      deckCover && 
      deckPrice && 
      deckDescription.trim() !== '';

    useEffect(() => {
    }, [cardCount, deckName, deckCover, deckPrice, deckDescription]);

    return (
      <form className="Deck-form">
        <div className="header-deck-form">
          <div 
            contentEditable="true" 
            className="deck-name"
            onBlur={(e) => setDeckName(e.currentTarget.textContent || '')}
          ></div>
          <StyledHr />
          <div className='header-deck-text-form'>
            <Text variant="purple">Drag your cards here and add to your deck!</Text>
            <Text variant="green">{cardCount}/{maxCards}</Text>
          </div>
        </div>
  
        <div
          className="deck-creation-form"
          onDrop={isMaxCardsReached ? undefined : handleDrop}
          onDragOver={isMaxCardsReached ? undefined : handleDragOver}
        >
          {items.map((item, index) => {
            const isCardAtLimit = item.quantity >= 4; 

            return (
              <div
                key={index}
                className="deck-item"
                style={{ position: 'relative' }}
                onClick={() => handleClickRemove(item.item)}
              >
                <img src={item.image} alt={item.item} className="deck-card-image" />
                <div className="card-count-circle">{`X${item.quantity}`}</div>

                {isCardAtLimit && (
                  <FaLock 
                    style={{
                      position: 'absolute',
                      top: '0px',
                      right: '3.2px',
                      color: '#D9D9D9',
                      fontSize: '1.5rem',
                      width: '1.45vw',
                      height: '7.6vh',
                      padding: '35%',
                      margin: '0%',
                      borderRadius: '5px',
                      backgroundColor: '#100f0f85',
                      cursor: 'pointer',
                    }} 
                  />
                )}
              </div>
            );
          })}
        </div>
  
        <div className="cover-deck-form">
          <label htmlFor="deck-cover">Cover</label>
          <Input 
            variant="inputform" 
            type="file" 
            name="deck-cover" 
            accept="image/*" 
            onChange={(e) => setDeckCover(e.target.files ? e.target.files[0] : null)} 
          />
        </div>
  
        <div className="cover-deck-form">
          <label htmlFor="deck-price">Price</label>
          <Input
            variant="inputform"
            type="number"
            name="deck-price"
            min="0"
            placeholder="00,0"
            value={deckPrice}
            onChange={(e) => setDeckPrice(e.target.value)}
          />
        </div>
  
        <label htmlFor="deck-description">Description</label>
        <Input 
          variant="inputdescription" 
          type="text" 
          name="deck-description" 
          placeholder="Got some critical information? Put it here!"
          value={deckDescription}
          onChange={(e) => setDeckDescription(e.target.value)}
        />
        
        {/* Cambié el estado de disabled usando isFormValid */}
        <Button variant="purple" disabled={!isFormValid}>Post Deck</Button>
      </form>
    );
  };  

export default DeckForm;