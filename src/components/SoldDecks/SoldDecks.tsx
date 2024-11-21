import { Tittle } from '../../theme/styledcomponents';
import './SoldDecks.css'

const SoldDecks = () => {
    return (
        <section className='sold-decks-section'>
            <Tittle variant='white'>Sold Decks</Tittle>
            <div className='sold-deck-default'>
                <p>You have not sold any deck yet</p>
            </div>
        </section>
    );
}

export default SoldDecks;