import { useSelector } from "react-redux";
import Profile from "../../components/Profile/Profile"
import {Tittle } from "../../theme/styledcomponents"
import {AppState} from "../../types/stateType";
import ItemSection from "../../components/ItemSection/ItemSection";
import HeaderPurch from "../../components/HeaderPurchases/HeaderPurchases";

const Purchases = () => {
    const user = useSelector((state: AppState) => state.user);
    const decks = useSelector((state: AppState) => state.decks);
    const cards = useSelector((state: AppState) => state.cards);

    return (
        <>
        <div className="catalogue-sectionheader">
            <Profile />
            <HeaderPurch/>
        </div> 

        <div className="catalogue-sectioncards">
            <Tittle variant='white'>Cards Purchased</Tittle>
            <ItemSection state={cards} items={cards.cards.filter(c => c.buyerId === user.id)}/>

            <Tittle variant='white'>Decks Purchased</Tittle>
            <ItemSection state={decks} items={decks.decks.filter(d => d.buyerId === user.id)}/>
        </div>
       
        </>
    )
}

export default Purchases