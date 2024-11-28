import { useSelector } from "react-redux";
import Profile from "../../components/Profile/Profile"
import { Container, Tittle } from "../../theme/styledcomponents"
import { AppState } from "../../types/stateType";
import ItemSection from "../../components/ItemSection/ItemSection";

const Purchases = () => {
    const user = useSelector((state: AppState) => state.user);
    const decks = useSelector((state: AppState) => state.decks);
    const cards = useSelector((state: AppState) => state.cards);

    return (
        <>
        <div className="catalogue-sectionheader">
            <Profile />
            <div className="calatogues-header">
            <div
                className="catalogues-image"
                style={{
                backgroundImage: `url('${user.header}')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '50vh',
                borderRadius: '10px',
                }}
            ></div>
            <Container variant="small" className="username-calatogues">
                <Tittle variant="white" className="username-headers">
                {user.username}'s purchases
                </Tittle>
                <Tittle variant="purple" className="number-of-sales">0 purchases</Tittle>
            </Container>
            </div>
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