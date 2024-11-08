import { useSelector } from "react-redux"
import Profile from "../../components/Profile/Profile"
import useModal from "../../hooks/useModal"
import { Tittle } from "../../theme/styledcomponents"
import { AppState } from "../../types/stateType"
import TourSection from "../../components/ItemSection/ItemSection"
import Header from "../../components/Header/Header"
import './TournamentPage.css'

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
            <Header/> 
        </div>

        <section className="page-content">
        <Tittle variant='white'>Your Tournaments</Tittle>
        <TourSection 
            state={tourState} 
            items={tournaments.tournaments.filter(t => t.host === userId)} 
            action={() => handleOpen('createTournament')}/>

        <Tittle variant='white'>Tournaments you have joined</Tittle>
        <TourSection 
            state={tourState} 
            items={tournaments.tournaments.filter(t => t.players.some(p => p.id === userId))}/>

        <Tittle variant='white'>Tournaments you have participated in</Tittle>
        <TourSection 
            state={tourState} 
            items={tournaments.tournaments.filter(t => t.status === 'finished' && t.players.some(p => p.id === userId))}/>
        </section>
        </>
    )
}

export default Tournament