import '../Catalogue/Catalogue.css';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'
import SellCardButton from '../../components/AddCard/AddCard'
import { Tittle, Text  } from '../../theme/styledcomponents';
import Footer from '../../components/Footer/Footer';
import TourSection from '../../components/ItemSection/ItemSection';
import useModal from '../../hooks/useModal';


const Catalogue = () => {
    const cardsState = useSelector((state: AppState) => state.cards);
    const tournaments = useSelector((state: AppState) => state.tournaments);
    const { handleOpen } = useModal();
   

    return (
        <>
            <div className="catalogue-sectionheader">
                <Profile />
                <Header />
            </div>  

            
    <section className="cardsOnSale">
    <Tittle variant="white">Upcoming events</Tittle>


<TourSection state={tournaments} items={tournaments.tournaments}/>
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
                    <div key={card.id} className="card-item"
                    onClick={() => {handleOpen('buyCard', card)}}>
                        <img src={card.images.small} alt={`Card ${card.id}`} className="card-image"/>
                        <div className='infocard'>
                        <Tittle variant="white">{card.name}</Tittle>
                        <Text variant="white">$ {card.price} USD</Text>
                        </div>
                    </div>
                ))}
            </>
        )}<SellCardButton />
    </div>
    
</section>
            <AddButton /> 
            <Footer/> 
        </>
        
    );
};

export default Catalogue;