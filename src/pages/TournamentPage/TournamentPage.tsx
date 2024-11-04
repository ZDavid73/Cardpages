import { useSelector } from "react-redux"
import Profile from "../../components/Profile/Profile"
import useModal from "../../hooks/useModal"
import { Button, Text, Tittle } from "../../theme/styledcomponents"
import { AppState } from "../../types/stateType"
import TourThumb from "../../components/TourThumb/TourThumb"

const Tournament = () => {
    const { handleOpen } = useModal()
    const tournaments = useSelector((state: AppState) => state.tournaments)


    return (
        <>
        <Profile/>
        <Button variant="purple" onClick={() => handleOpen('createTournament')}>Create tournament</Button>
        <Tittle variant='white'>Tournaments</Tittle>

        { tournaments.loading && <Text variant="white">Loading tournaments...</Text> }

        { tournaments.error && <Text variant="white">There was an error getting the tournaments :( check again later</Text> }

        { tournaments.tournaments.length === 0 && !tournaments.loading && <Text variant="white">There are no tournaments yet</Text> }

        { tournaments.tournaments.length > 0  &&
        tournaments.tournaments.map((t) => (
            <TourThumb key={t.id} tournament={t}/>
        ))
        }
        </>
    )
}

export default Tournament