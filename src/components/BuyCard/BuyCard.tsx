import { useSelector } from 'react-redux';
import './BuyCard.css';
import { AppState } from '../../types/stateType';
import { isCard } from '../../utils/typeGuards';
import { Button, Container, StyledHr, Text, Tittle } from '../../theme/styledcomponents';
import { FaArrowCircleLeft } from 'react-icons/fa';
import useModal from '../../hooks/useModal';
import useCart from '../../hooks/useCart';

const BuyCard = () => {
    const { modalDetails } = useSelector((state: AppState) => state.modal);
    const { handleClose } = useModal();
    const { addToCart } = useCart();

    const cart = useSelector((state: AppState) => state.cart);
    console.log(cart);

    if(isCard(modalDetails)){
        return (
            <Container variant='big' className='buy-card'>
                <section className='buy-card-img'>
                    <span>
                    <FaArrowCircleLeft onClick={() => handleClose()} color="white"/>
                    <Tittle variant='white'>{modalDetails.name}</Tittle>
                    </span>
                    <img src={modalDetails.images.small} alt={`image of the card: ${modalDetails.name}`} />
                </section>
                <section className='buy-card-info'>
                    <StyledHr/>
                    <Tittle variant='purple'>
                        ${modalDetails.price} USD
                    </Tittle>
                    <Text variant='white'>
                        by @user
                        {modalDetails.description}

                        {modalDetails.flavorText}
                    </Text>
                    <Button variant='purple' onClick={() => {addToCart(modalDetails)}}>Add to cart</Button>
                </section>
            </Container>
        ) 
    }
}

export default BuyCard;