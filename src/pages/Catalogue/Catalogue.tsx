import './Catalogue.css'
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'
import SellCardButton from '../../components/AddCard/AddCard'
import { Tittle  } from '../../theme/styledcomponents';
import SellingCardSection from '../../components/CardItem/CardItem';

const Catalogue = () => {
    const sellingCards = useSelector((state: AppState) => state.SellingCards);

    return (
        <>
        <div className="catalogue-sectionheader">
           <Profile/>
            <Header/> 
        </div>
        <Tittle variant="white">Cards On Sale</Tittle>
        <SellCardButton/>
        <SellingCardSection items={sellingCards.items} state={sellingCards.state}/>
        <AddButton/>
        </>
    )
}

export default Catalogue