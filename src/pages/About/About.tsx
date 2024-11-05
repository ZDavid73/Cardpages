import Profile from "../../components/Profile/Profile";
import useModal from "../../hooks/useModal";
import { Button, Text } from "../../theme/styledcomponents";

const AboutPage = () => {
    const { handleOpen} = useModal()
    return (
        <>
        <Profile/>
        <Text variant='white'>About</Text>
        <Button variant='purple' onClick={()=>handleOpen('createCard')}>Click me</Button>
        </>
    );
}

export default AboutPage;