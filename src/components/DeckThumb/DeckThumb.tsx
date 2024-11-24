import { Text, Tittle } from '../../theme/styledcomponents';
import { Deck } from '../../types/deckTypes';
import './DeckThumb.css';
import useModal from '../../hooks/useModal';

const DeckThumb = (deck: Deck) => {
    const { handleOpen } = useModal();

    return (
        <div key={deck.id} className="deck-item">
            <img src={deck.cover} alt={`Deck ${deck.id}`} className="deck-image" />
            <div className="infodeck">
                <Tittle variant="white">{deck.name}</Tittle>
                <Text variant="white">$ {deck.price} USD</Text>
            </div>
        </div>
    )
}

export default DeckThumb;