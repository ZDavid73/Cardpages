import { StyledHr, Text , Input, Button} from '../../theme/styledcomponents';
import './DeckForm.css'

const DeckForm = () => {
    return (
      <form className='Deck-form'>
        <div className='header-deck-form'>
            <div contentEditable="true" className="deck-name"></div>
            <StyledHr/>
            <Text variant='purple'>Drag your cards here to add them to your deck!</Text>
        </div>
        
        <div className='deck-creation-form'>
            
        </div>

        <div className='cover-deck-form'>
            <label htmlFor="deck-cover">Cover</label>
            <Input variant="inputform" type="file" name="deck-cover" accept="image/*" />
        </div>

        <label htmlFor="deck-price">Price</label>
        <Input
        variant="inputform"
        type="number"
        name="deck-price"
        min="0"
        placeholder="$ 00,0"
        />

        <label htmlFor="">Description</label>
        <Input variant='inputform' type="text" name='deck-description' placeholder="Got some critical information? Put it here!" />
        <Button variant='purple' type="button">Post Deck</Button>
      </form>
    );
};

export default DeckForm;