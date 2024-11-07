import './Catalogue.css'
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'
import { Tittle  } from '../../theme/styledcomponents';

const Catalogue = () => {
    return (
        <>
        <div className="catalogue-sectionheader">
           <Profile/>
            <Header/> 
        </div>
        <Tittle variant="white">Cards On Sale</Tittle>
        <AddButton/>
        </>
    )
}

export default Catalogue