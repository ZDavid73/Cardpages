import Profile from "../../components/Profile/Profile"
import useModal from "../../hooks/useModal"
import { Button, Text } from "../../theme/styledcomponents"

const Tournament = () => {
    const { handleOpen } = useModal()

    return (
        <>
        <Profile/>
        <Text variant='white'>Tournament</Text>
        <Button variant="purple" onClick={() => handleOpen('createTournament')}>Create tournament</Button>
        </>
    )
}

export default Tournament