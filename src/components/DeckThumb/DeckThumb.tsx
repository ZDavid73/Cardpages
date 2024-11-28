import { Deck } from '../../types/deckTypes';
import './DeckThumb.css';
import useModal from '../../hooks/useModal';
import { useSelector } from 'react-redux';
import { AppState } from '../../types/stateType';
import { FiMoreHorizontal } from "react-icons/fi";

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
            onClick={() => handleOpen('buyDeck', deck)} >
            <div className="infodeck">
                <p id='deck-thum-info-title'>{deck.name}</p>
                <p className='deck-item-text'>$ {deck.price} USD</p>
                <p className='deck-flavortext'>{deck.desc}</p>
            </div>
            { deck.creator === userId ? 
            <button onClick={() => handleOpen('buyDeck', deck)}>See</button> : <div onClick={() => handleOpen('buyDeck', deck)} className='deck-button-icon'><FiMoreHorizontal className='icon-buttonDeck'/></div> }
        </div>
    )
}

export default DeckThumb;