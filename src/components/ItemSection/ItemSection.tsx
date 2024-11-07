import { Tournament } from '../../types/tournamentTypes';
import { isTournament } from '../../utils/typeGuards';
import TourThumb from '../TourThumb/TourThumb';
import './ItemSection.css';

type TourSectionProps = {
    items: Tournament[];
}

const TourSection = ({ items }: TourSectionProps) => {
    return (
        <section className='item-section'>
            {items.map((item) => {
                if (isTournament(item)) {
                    return <TourThumb key={item.id} tournament={item} />;
                }
                return null;
            })}
        </section>
    );
}

export default TourSection;