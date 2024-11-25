import { Button, Text, Tittle } from '../../theme/styledcomponents';
import { Deck } from '../../types/deckTypes';
import './DeckThumb.css';
import useModal from '../../hooks/useModal';
import { useSelector } from 'react-redux';
import { AppState } from '../../types/stateType';

type DeckThumbProps = {
    deck: Deck;
}

const DeckThumb = ({deck}: DeckThumbProps) => {
    const { handleOpen } = useModal();
    const userId = useSelector((state: AppState) => state.user.id);

    return (
        <div key={deck.id} 
            className="deck-item"
            style={{ backgroundImage: `url(${deck.cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => handleOpen('buyDeck', deck)}>
            <div className="infodeck">
                <Tittle variant="white">{deck.name}</Tittle>
                <Text variant="white">$ {deck.price} USD</Text>
            </div>
            { deck.creator === userId ? 
            <Button variant='gray' onClick={() => handleOpen('buyDeck', deck)}>See</Button> : <Button variant='purple' onClick={() => handleOpen('buyDeck', deck)}>Add to cart</Button> }
        </div>
    )
}

export default DeckThumb;