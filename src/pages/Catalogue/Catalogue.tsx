import './Catalogue.css'
import Header from "../../components/Header/Header"
import Profile from "../../components/Profile/Profile"
import AddButton from '../../components/AddButton/AddButton'

const Catalogue = () => {
    return (
        <>
        <div className="catalogue-sectionheader">
           <Profile/>
            <Header/> 
        </div>
        <AddButton/>
        </>
    )
}

export default Catalogue