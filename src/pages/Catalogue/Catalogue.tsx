import './Catalogue.css'
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'
import { useSelector } from 'react-redux';
import { AppState } from '../../types/stateType';
import { Tittle } from '../../theme/styledcomponents';
import ItemSection from '../../components/ItemSection/ItemSection';
import useModal from '../../hooks/useModal';

const Catalogue = () => {
    const decks = useSelector((state: AppState) => state.decks);
    const cards = useSelector((state: AppState) => state.cards);
    const userId = useSelector((state: AppState) => state.user.id);
    const { handleOpen } = useModal();

    return (
        <>
            <div className="catalogue-sectionheader">
                <Profile />
                <Header />
            </div> 
            <div className='catalogue-sectioncards'>

                <Tittle variant='white'>Cards on sale</Tittle>
                <ItemSection state={cards} items={cards.cards.filter(c => !c.isSold && c.sellerId === userId).reverse()} action={() => handleOpen('createCard')}/>

                <Tittle variant='white'>Cards Sold</Tittle>
                <ItemSection state={cards} items={cards.cards.filter(c => c.isSold && c.sellerId === userId).reverse()}/>

                <Tittle variant='white'>Decks on sale</Tittle>
                <ItemSection state={decks} items={decks.decks.filter(d => !d.isSold && d.creator === userId).reverse()} action={() => handleOpen('createDeck')}/>

                <Tittle variant='white'>Decks Sold</Tittle>
                <ItemSection state={decks} items={decks.decks.filter(d => d.isSold && d.creator === userId).reverse()}/>
            </div> 
            <AddButton />  
        </>
        
    );
};

export default Catalogue;