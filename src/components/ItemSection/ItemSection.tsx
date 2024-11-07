import { TournamentState } from '../../features/tournamentSlice';
import { Text } from '../../theme/styledcomponents';
import { Tournament } from '../../types/tournamentTypes';
import { isTournament } from '../../utils/typeGuards';
import TourThumb from '../TourThumb/TourThumb';
import './ItemSection.css';

type TourSectionProps = {
    items: Tournament[];
    state: TournamentState;
}

const TourSection = ({state, items }: TourSectionProps) => {
    return (
        <section className='item-section'>

            {state.loading && <Text variant='white'>Loading...</Text>}

            {state.error && <Text variant='white'>Oh no! There was an error, try again later</Text>}

            {items.length === 0 && !state.loading && !state.error && <Text variant='white'>Nothing here</Text>}

            {!state.loading && !state.error && items.map((item) => {
                if (isTournament(item)) {
                    return <TourThumb key={item.id} tournament={item} />;
                }
                return null;
            })}
        </section>
    );
}

export default TourSection;