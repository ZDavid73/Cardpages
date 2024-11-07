import { useSelector } from "react-redux"
import Profile from "../../components/Profile/Profile"
import useModal from "../../hooks/useModal"
import { Button, Tittle } from "../../theme/styledcomponents"
import { AppState } from "../../types/stateType"
import TourSection from "../../components/ItemSection/ItemSection"

const Tournament = () => {
    const { handleOpen } = useModal()
    const tournaments = useSelector((state: AppState) => state.tournaments)
    const userId = useSelector((state: AppState) => state.user.id)

    return (
        <>
        <Profile/>
        <Button variant="purple" onClick={() => handleOpen('createTournament')}>Create tournament</Button>

        <Tittle variant='white'>Your Tournaments</Tittle>
        <TourSection state={tournaments} items={tournaments.tournaments.filter(t => t.host === userId)}/>

        <Tittle variant='white'>Tournaments you have joined</Tittle>
        <TourSection state={tournaments} items={tournaments.tournaments.filter(t => t.players.some(p => p.id === userId))}/>
        
        <Tittle variant='white'>Tournaments you have participated in</Tittle>
        <TourSection state={tournaments} items={tournaments.tournaments.filter(t => t.status === 'finished' && t.players.some(p => p.id === userId))}/>

        </>
    )
}

export default Tournament