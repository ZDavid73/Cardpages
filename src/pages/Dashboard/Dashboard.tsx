import '../Catalogue/Catalogue.css';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'
import { Tittle  } from '../../theme/styledcomponents';
import Footer from '../../components/Footer/Footer';
import ItemSection from '../../components/ItemSection/ItemSection';


const Dashboard = () => {
    const cardsState = useSelector((state: AppState) => state.cards);
    const tournaments = useSelector((state: AppState) => state.tournaments);  
    const decks = useSelector((state: AppState) => state.decks);
    const userId = useSelector((state: AppState) => state.user.id); 

    return (
        <>
            <div className="catalogue-sectionheader">
                <Profile />
                <Header />
            </div>  

            
    <section className="cardsOnSale">
    <Tittle variant="white">Upcoming Events</Tittle>
    <ItemSection state={tournaments} items={tournaments.tournaments.filter(t => t.status === 'upcoming').reverse() }/>

    <Tittle variant="white">Cards On Sale</Tittle>
    <ItemSection state={cardsState} items={cardsState.cards.filter(c => c.sellerId !== userId).reverse()}/>

    <Tittle variant="white">Decks On Sale</Tittle>
    <ItemSection state={decks} items={decks.decks.filter(d => d.creator !== userId && !d.isSold)}/>
    
</section>
            <AddButton /> 
            <Footer/> 
        </>
        
    );
};

export default Dashboard;