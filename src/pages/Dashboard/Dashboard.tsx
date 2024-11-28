import '../Catalogue/Catalogue.css';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import Profile from "../../components/Profile/Profile"
import { Tittle } from '../../theme/styledcomponents';
import ItemSection from '../../components/ItemSection/ItemSection';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import './Dasboard.css'

const Dashboard = () => {
    const cardsState = useSelector((state: AppState) => state.cards);
    const tournaments = useSelector((state: AppState) => state.tournaments);  
    const decks = useSelector((state: AppState) => state.decks);
    const userId = useSelector((state: AppState) => state.user.id); 

    return (
        <>
            <div className="catalogue-sectionheader" aria-label="User profile and dashboard header">
                <Profile aria-label="User profile" />
                <HeaderDashboard aria-label="Dashboard header" />
            </div>  

            <section className="cardsOnSale" aria-label="Cards, tournaments, and decks sections">
                <Tittle variant="white" aria-label="Upcoming Events title">Upcoming Events</Tittle>
                <ItemSection 
                    state={tournaments} 
                    items={tournaments.tournaments.filter(t => t.status === 'upcoming').reverse()} 
                    aria-label="Upcoming tournaments list"
                />

                <Tittle variant="white" aria-label="Cards On Sale title">Cards On Sale</Tittle>
                <ItemSection 
                    state={cardsState} 
                    items={cardsState.cards.filter(c => c.sellerId !== userId).reverse()}
                    aria-label="Cards available for sale"
                />

                <Tittle variant="white" aria-label="Decks On Sale title">Decks On Sale</Tittle>
                <ItemSection 
                    state={decks} 
                    items={decks.decks.filter(d => d.creator !== userId && !d.isSold)}
                    aria-label="Decks available for sale"
                />
            </section>
        </>
    );
};

export default Dashboard;