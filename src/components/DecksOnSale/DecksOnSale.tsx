import { FaPlusCircle } from 'react-icons/fa';
import './DecksOnSale.css';
import { Tittle, Text } from '../../theme/styledcomponents';
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import useModal from '../../hooks/useModal';

const DecksOnSale = () => {
    // Usamos useSelector para acceder al estado de Redux de los decks
    const decksState = useSelector((state: AppState) => state.decks);
    const { handleOpen } = useModal();

    return (
        <section className="Decks-sale-section">
            <Tittle variant="white">Decks On Sale</Tittle>

            {decksState.loading && <Text variant="white">Loading decks...</Text>}
            {decksState.error && (
                <Text variant="white">Oh no! There was an error loading the decks. Try again later.</Text>
            )}

            {!decksState.loading && !decksState.error && decksState.decks.length === 0 ? (
                // Mostrar si no hay decks
                <div className="Deck-on-sale-default">
                    <FaPlusCircle />
                    <p>Add deck</p>
                </div>
            ) : (
                // Mostrar si hay decks
                <div className="Decks-on-sale">
                    {decksState.decks.map((deck) => (
                        <div key={deck.id} className="deck-item">
                            <img src={deck.cover} alt={`Deck ${deck.id}`} className="deck-image" />
                            <div className="infodeck">
                                <Tittle variant="white">{deck.name}</Tittle>
                                <Text variant="white">$ {deck.price} USD</Text>
                            </div>
                            <FaEdit className="FaEdit" onClick={() => handleOpen('createDeck', deck)} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default DecksOnSale;