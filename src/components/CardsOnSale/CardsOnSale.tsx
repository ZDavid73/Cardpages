import { FaPlusCircle } from 'react-icons/fa';
import './CardsOnSale.css';
import { Tittle, Text } from '../../theme/styledcomponents';
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import useModal from '../../hooks/useModal';

const CardsOnSale = () => {
    const cardsState = useSelector((state: AppState) => state.cards);
    const { handleOpen } = useModal();

    return (
        <section className='Cards-sale-section'>
            <Tittle variant="white">Cards On Sale</Tittle>
            
            {cardsState.loading && <Text variant="white">Loading cards...</Text>}
            {cardsState.error && (
                <Text variant="white">Oh no! There was an error loading the cards. Try again later.</Text>
            )}

            {!cardsState.loading && !cardsState.error && cardsState.cards.length === 0 ? (
                // Mostrar si no hay cartas
                <div className='Card-on-sale-default'>
                    <FaPlusCircle />
                    <p>Add card</p>
                </div>
            ) : (
                // Mostrar si hay cartas
                <div className="Cards-on-sale">
                    {cardsState.cards.map((card) => (
                        <div key={card.id} className="card-item">
                            <img src={card.images.small} alt={`Card ${card.id}`} className="card-image" />
                            <div className='infocard'>
                                <Tittle variant="white">{card.name}</Tittle>
                                <Text variant="white">$ {card.price} USD</Text>
                            </div>
                            <FaEdit className='FaEdit' onClick={() => handleOpen ('createCard', card)}/>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default CardsOnSale;