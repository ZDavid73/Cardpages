import './Catalogue.css'
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'
import CardsOnSale from '../../components/CardsOnSale/CardsOnSale';
import SoldCards from '../../components/SoldCards/SoldCards';
import DecksOnSale from '../../components/DecksOnSale/DecksOnSale';
import SoldDecks from '../../components/SoldDecks/SoldDecks';

const Catalogue = () => {

    return (
        <>
            <div className="catalogue-sectionheader">
                <Profile />
                <Header />
            </div> 
            <div className='catalogue-sectioncards'>
                <CardsOnSale />
                <SoldCards/>
                <DecksOnSale/>
                <SoldDecks/>
            </div> 
            <AddButton />  
        </>
        
    );
};

export default Catalogue;