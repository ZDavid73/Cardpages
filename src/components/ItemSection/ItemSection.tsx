import { Text } from '../../theme/styledcomponents';
import { isCard, isDeck, isTournament } from '../../utils/typeGuards';
import SellingCardThumb from '../CardThumb/CardThum';
import DeckThumb from '../DeckThumb/DeckThumb';
import ItemHolder from '../ItemHolder/ItemHolder';
import TourThumb from '../TourThumb/TourThumb';
import './ItemSection.css';

type ItemSection = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: any[];
    state: { loading: boolean; error: string | null };
    action?: () => void;
}

const ItemSection = ({state, items, action,}: ItemSection) => {
    return (
        <section className='item-section'>

            {state.loading && <Text variant='white'>Loading...</Text>}

            {state.error && <Text variant='white'>Oh no! There was an error, try again later</Text>}

            {items.length === 0 && !state.loading && !state.error && !action && <ItemHolder text='Nothing here...'/>}

            {!state.loading && !state.error && action && <ItemHolder text='Create' action={action}/>}

            {!state.loading && !state.error && items.map((item) => {
                if (isTournament(item)) {
                    return <TourThumb key={item.id} tournament={item} />;
                } else if (isCard(item)){
                    return <SellingCardThumb key={item.id} card={item}/>
                } else if (isDeck(item)){
                    return <DeckThumb key={item.id} deck={item}/>
                }
                return null;
            })}
        </section>
    );
}

export default ItemSection;