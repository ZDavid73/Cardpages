import { useSelector } from 'react-redux';
import './BuyCard.css';
import { AppState } from '../../types/stateType';
import { isCard } from '../../utils/typeGuards';
import { Button, Container, StyledHr, Text, Tittle } from '../../theme/styledcomponents';
import { FaArrowCircleLeft } from 'react-icons/fa';
import useModal from '../../hooks/useModal';
import useCart from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

const BuyCard = () => {
    const { modalDetails } = useSelector((state: AppState) => state.modal);
    const { handleClose } = useModal();
    const { addToCart } = useCart();
    const { handleGetUserInfo, tempUser } = useAuth();
    const cart = useSelector((state: AppState) => state.cart.cards);

    if(isCard(modalDetails)){
        handleGetUserInfo(modalDetails.sellerId);

        return (
            <Container variant='big' className='buy-card'>
                <section className='buy-card-img'>
                    <div>
                    <FaArrowCircleLeft onClick={() => handleClose()} color="white"/>
                    <Tittle variant='white'>{modalDetails.name}</Tittle>
                    </div>
                    <img src={modalDetails.images.small} alt={`image of the card: ${modalDetails.name}`} />
                </section>
                <section className='buy-card-info'>
                    <StyledHr/>
                    <Tittle variant='purple'>
                        ${modalDetails.price} USD
                    </Tittle>
                    <Text variant='white'>
                        by @{tempUser?.username}
                    </Text>
                    <Text variant='white'>
                        {modalDetails.description}
                    </Text>
                    <StyledHr/>
                    <Text variant='white'>
                        {modalDetails.flavorText}
                    </Text>
                    { cart.find((card) => card.id === modalDetails.id) ? 
                        <Button variant='gray'>Already in cart</Button> : <Button variant='purple' onClick={() => {addToCart(modalDetails)}}>Add to cart</Button>}
                    
                </section>
            </Container>
        ) 
    }
}

export default BuyCard;