import { Button, Text, Tittle } from '../../theme/styledcomponents';
import { Deck } from '../../types/deckTypes';
import './DeckThumb.css';
import useModal from '../../hooks/useModal';

type DeckThumbProps = {
    deck: Deck;
}

const DeckThumb = ({deck}: DeckThumbProps) => {
    const { handleOpen } = useModal();

    return (
        <div key={deck.id} 
            className="deck-item"
            style={{ backgroundImage: `url(${deck.cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => handleOpen('buyDeck', deck)}>
            <div className="infodeck">
                <Tittle variant="white">{deck.name}</Tittle>
                <Text variant="white">$ {deck.price} USD</Text>
            </div>
            <Button variant='purple' onClick={() => handleOpen('buyDeck', deck)}>Buy</Button>
        </div>
    )
}

export default DeckThumb;