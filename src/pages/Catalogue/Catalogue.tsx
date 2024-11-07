import './Catalogue.css'
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'
import SellCardButton from '../../components/AddCard/AddCard'
import { Tittle, Text  } from '../../theme/styledcomponents';

const Catalogue = () => {
    const cardsState = useSelector((state: AppState) => state.cards);

    return (
        <>
            <div className="catalogue-sectionheader">
                <Profile />
                <Header />
            </div>
            <Tittle variant="white">Cards On Sale</Tittle>

            <SellCardButton />
            <AddButton />

            <section className="cards-section">
                {cardsState.loading && <Text variant="white">Loading cards...</Text>}
                {cardsState.error && (
                    <Text variant="white">Oh no! There was an error loading the cards. Try again later.</Text>
                )}
                {!cardsState.loading && !cardsState.error && cardsState.cards.length === 0 && (
                    <Text variant="white">No cards available for sale.</Text>
                )}
                {!cardsState.loading && !cardsState.error && cardsState.cards.length > 0 && (
                    <div className="cards-container">
                        {cardsState.cards.map((card) => (
                            <div key={card.id} className="card-item">
                                <img
                                    src={card.images.small}
                                    alt={`Card ${card.id}`}
                                    className="card-image"
                                />
                                <Text variant="white">Price: ${card.price}</Text>
                                <Text variant="white">{card.description}</Text>
                                <button className="edit-button">Edit</button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default Catalogue;