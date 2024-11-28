import { useSelector } from 'react-redux';
import { Button, Container, Text, Tittle } from '../../theme/styledcomponents';
import './BuyDeck.css';
import { AppState } from '../../types/stateType';
import { isDeck } from '../../utils/typeGuards';
import { useAuth } from '../../hooks/useAuth';
import { FaArrowCircleLeft } from 'react-icons/fa';
import useModal from '../../hooks/useModal';
import useCart from '../../hooks/useCart';

const BuyDeck = () => {
    const modalDetails = useSelector((state: AppState) => state.modal.modalDetails);
    const { handleGetUserInfo, tempUser } = useAuth();
    const { handleClose } = useModal();
    const { addToCart } = useCart();
    const cart = useSelector((state: AppState) => state.cart.decks);
    const userId = useSelector((state: AppState) => state.user.id);

    if(isDeck(modalDetails)){
        handleGetUserInfo(modalDetails.creator);
        return (
            <Container variant='big' className='buy-deck'>
                <div className='buy-deck-header'>
                <FaArrowCircleLeft onClick={() => handleClose()} color="white"/>
                <Tittle variant='white'>{modalDetails.name}</Tittle>
                </div>
                <Tittle variant='purple'>
                    ${modalDetails.price} USD
                </Tittle>
                <Text variant='white'>
                    by @{tempUser?.username || 'loading...'}
                    <br/>
                    {modalDetails.desc}
                </Text>
                <section className='buy-deck-cards'>
                    {modalDetails.cards.map((card, index) => (
                        <div key={index} className='buy-deck-card'>
                            <img src={card.image} alt={`image of the card: ${card.item}`} />
                            { card.quantity > 1 && <Text variant='white' className='buy-deck-card-quantity'>x{card.quantity}</Text>}
                        </div>
                    ))}
                </section>
                { modalDetails.creator === userId ? null : cart.find((deck) => deck.id === modalDetails.id) ?
                    <Button variant='gray'>Already in cart</Button> :
                    <Button variant='purple' onClick={() => addToCart(modalDetails)}>Add to cart</Button>}

                
            </Container>
        )
    }
}

export default BuyDeck;