import './Catalogue.css'
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'
import SellCardButton from '../../components/AddCard/AddCard'
import { Tittle, Text  } from '../../theme/styledcomponents';
import { FaEdit } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';
import useModal from '../../hooks/useModal';
import TourSection from '../../components/ItemSection/ItemSection';


const Catalogue = () => {
    const cardsState = useSelector((state: AppState) => state.cards);
    const tournaments = useSelector((state: AppState) => state.tournaments);
    const userId = useSelector((state: AppState) => state.user.id);

    const { handleOpen } = useModal();

    return (
        <>
            <div className="catalogue-sectionheader">
                <Profile />
                <Header />
            </div>  
    <section className="cardsOnSale">
        <Tittle variant="white">Cards On Sale</Tittle>
    <div className="cards-container">
        {cardsState.loading && <Text variant="white">Loading cards...</Text>}
        {cardsState.error && (
            <Text variant="white">Oh no! There was an error loading the cards. Try again later.</Text>
        )}
        {!cardsState.loading && !cardsState.error && cardsState.cards.length === 0 && (
            <Text variant="white">No cards available for sale.</Text>
        )}
        {!cardsState.loading && !cardsState.error && cardsState.cards.length > 0 && (
            <>
                {cardsState.cards.map((card) => (
                    <div key={card.id} className="card-item">
                        <img src={card.images.small} alt={`Card ${card.id}`} className="card-image"/>
                        <div className='infocard'>
                        <Tittle variant="white">{card.name}</Tittle>
                        <Text variant="white">$ {card.price} USD</Text>
                        </div>
                        <FaEdit className='FaEdit' onClick={() => handleOpen ('createCard', card)}/>
                    </div>
                ))}
            </>
        )}<SellCardButton />
    </div>

    <Tittle variant="white">Tournaments</Tittle>

    <TourSection state={tournaments} items={tournaments.tournaments.filter(t => t.players.every(p => p.id !== userId))}/>
</section>
            <AddButton /> 
            <Footer/> 
        </>
        
    );
};

export default Catalogue;