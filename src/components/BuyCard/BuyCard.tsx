import { useSelector } from 'react-redux';
import './BuyCard.css';
import { AppState } from '../../types/stateType';
import { isCard } from '../../utils/typeGuards';
import { Button, Container, StyledHr, Text, Tittle } from '../../theme/styledcomponents';
import { FaArrowCircleLeft } from 'react-icons/fa';
import useModal from '../../hooks/useModal';

const BuyCard = () => {
    const { modalDetails } = useSelector((state: AppState) => state.modal);
    const { handleClose } = useModal();

    if(isCard(modalDetails)){
        return (
            <Container variant='big' className='buy-card'>
                <section className='buy-card-img'>
                    <span>
                    <FaArrowCircleLeft onClick={() => handleClose()} color="white"/>
                    <Tittle variant='white'>{modalDetails.name}</Tittle>
                    </span>
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
                    <Button variant='purple'>Add to cart</Button>
                </section>
            </Container>
        ) 
    }
}

export default BuyCard;