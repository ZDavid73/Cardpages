import { useSelector } from "react-redux"
import Profile from "../../components/Profile/Profile"
import useModal from "../../hooks/useModal"
import { Tittle } from "../../theme/styledcomponents"
import { AppState } from "../../types/stateType"
import ItemSection from "../../components/ItemSection/ItemSection"
import './TournamentPage.css'
import HeaderTour from "../../components/HeaderTournament/HeaderTour"

const Tournament = () => {
    const { handleOpen } = useModal()
    const tournaments = useSelector((state: AppState) => state.tournaments)
    const userId = useSelector((state: AppState) => state.user.id)

    const tourState = {
        loading: tournaments.loading,
        error: tournaments.error
    }

    return (
        <>
        <div className="catalogue-sectionheader">
           <Profile/>
            <HeaderTour/> 
        </div>

        <section className="page-content">
        <Tittle variant='white'>Your Tournaments</Tittle>
        <ItemSection 
            state={tourState} 
            items={tournaments.tournaments.filter(t => t.host === userId)} 
            action={() => handleOpen('createTournament')}/>

        <Tittle variant='white'>Tournaments you have joined</Tittle>
        <ItemSection 
            state={tourState} 
            items={tournaments.tournaments.filter(t => t.players.some(p => p.id === userId) && t.status === 'upcoming')}/>

        <Tittle variant='white'>Tournaments you have participated in</Tittle>
        <ItemSection 
            state={tourState} 
            items={tournaments.tournaments.filter(t => t.status === 'finished' && t.players.some(p => p.id === userId))}/>
        </section>
        </>
    )
}

export default Tournament