import { useSelector } from 'react-redux';
import { Button, Container, Text } from '../../theme/styledcomponents';
import { SellingCard } from '../../types/cardTypes';
import { AppState } from '../../types/stateType';
import { useNavigate } from 'react-router-dom';

type SellingCardThumbProps = {
    card: SellingCard;
}

const SellingCardThumb = ({ card }: SellingCardThumbProps) => {
    const userId = useSelector((state: AppState) => state.user.id);
    const navigate = useNavigate();

    return (
        <section 
            className='selling-card-thumbnail' 
            style={{ 
                backgroundImage: `url(${card.images.large})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className='card-button'>
                {
                    userId === card.sellerId ? 
                    <Button 
                        variant='purple' 
                        onClick={() => navigate('/editCard', { state: { card } })}
                    >
                        Edit
                    </Button>
                    :
                    <Button variant='gray' disabled>
                        Sold
                    </Button>
                }
            </div>
            <Container variant='smallopacity'>
                <Text variant='white'>{card.flavorText}</Text>
                <Text variant='white'>${card.price}</Text>
            </Container>
        </section>
    );
}

export default SellingCardThumb;
