import { Tittle } from '../../theme/styledcomponents';
import './SoldCards.css'

const SoldCards = () => {
    return (
        <section className='sold-cards-section'>
            <Tittle variant='white'>Sold Cards</Tittle>
            <div className='sold-card-default'>
                <p>You have not sold any card yet</p>
            </div>
        </section>
    );
}

export default SoldCards;