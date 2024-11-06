import { StyledHr, Text, Input, Button } from '../../theme/styledcomponents'; 
import './DeckForm.css';
import useDragDrop from '../../hooks/useDragDrop';

const DeckForm = () => {
    const { items, handleDrop, handleDragOver, handleClickRemove } = useDragDrop();
  
    const cardCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const maxCards = 50;
  
    const isMaxCardsReached = cardCount >= maxCards;
  
    return (
      <form className="Deck-form">
        <div className="header-deck-form">
          <div contentEditable="true" className="deck-name"></div>
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
          {items.map((item, index) => (
            <div
              key={index}
              className="deck-item"
              style={{ position: 'relative' }}
              onClick={() => handleClickRemove(item.item)} // Add onClick handler
            >
              <img src={item.image} alt={item.item} className="deck-card-image" />
              <div className="card-count-circle">{`X${item.quantity}`}</div>
            </div>
          ))}
        </div>
  
        <div className="cover-deck-form">
          <label htmlFor="deck-cover">Cover</label>
          <Input variant="inputform" type="file" name="deck-cover" accept="image/*" />
        </div>
  
        <div className="cover-deck-form">
          <label htmlFor="deck-price">Price</label>
          <Input
              variant="inputform"
              type="number"
              name="deck-price"
              min="0"
              placeholder="00,0"
          />
        </div>
  
        <label htmlFor="deck-description">Description</label>
        <Input variant="inputform" type="text" name="deck-description" placeholder="Got some critical information? Put it here!" />
        
        <Button variant="purple" type="button">Post Deck</Button>
      </form>
    );
  };  

export default DeckForm;