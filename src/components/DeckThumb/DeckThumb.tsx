import { Text, Tittle } from '../../theme/styledcomponents';
import { Deck } from '../../types/deckTypes';
import './DeckThumb.css';
import useModal from '../../hooks/useModal';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

type DeckThumbProps = {
    deck: Deck;
}

const DeckThumb = ({deck}: DeckThumbProps) => {
    const { handleOpen } = useModal();
    const { handleGetUserInfo, tempUser} = useAuth();

    useEffect(() => {
        handleGetUserInfo(deck.creator);
    }, [handleGetUserInfo, deck.creator]);

    return (
        <div key={deck.id} 
            className="deck-item"
            style={{ backgroundImage: `url(${deck.cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => handleOpen('')}>
            <div className="infodeck">
                <Tittle variant="white">{deck.name}</Tittle>
                <Text variant="white">$ {deck.price} USD</Text>
                <Text variant="white">@{tempUser?.username}</Text>
            </div>
        </div>
    )
}

export default DeckThumb;