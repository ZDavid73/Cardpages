import { CardState } from '../../features/cardSlice';
import { Text } from '../../theme/styledcomponents';
import { SellingCard } from '../../types/cardTypes';
import SellingCardThumb from '../CardThumb/CardThum';
import './ItemSection.css';

type SellingCardSectionProps = {
    items: SellingCard[];
    state: CardState;
}

const SellingCardSection = ({ state, items }: SellingCardSectionProps) => {
    return (
        <section className='item-section'>

            {state.loading && <Text variant='white'>Loading...</Text>}

            {state.error && <Text variant='white'>Oh no! There was an error, try again later</Text>}

            {items.length === 0 && !state.loading && !state.error && (
                <Text variant='white'>No cards available for sale</Text>
            )}

            {!state.loading && !state.error && items.map((item) => (
                <SellingCardThumb key={item.id} card={item} />
            ))}
        </section>
    );
}

export default SellingCardSection;
