import { useSelector } from 'react-redux';
import { Button, Text } from '../../theme/styledcomponents';
import { SellingCard } from '../../types/cardTypes';
import { AppState } from '../../types/stateType';
import './CardThumb.css';

type SellingCardThumbProps = {
    card: SellingCard;
}

const SellingCardThumb = ({ card }: SellingCardThumbProps) => {
    const userId = useSelector((state: AppState) => state.user.id);

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
                        variant='gray' 
                        onClick={() => {}}
                    >
                        See
                    </Button>
                    :
                    <Button variant='purple'>
                        Buy
                    </Button>
                }
            </div>
            <div className='card-thumb-info'>
                <Text variant='white' className='card-flavortext'>{card.flavorText}</Text>
                <Text variant='white'>${card.price}</Text>
            </div>
        </section>
    );
}

export default SellingCardThumb;
