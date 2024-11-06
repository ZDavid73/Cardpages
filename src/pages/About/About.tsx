import Profile from "../../components/Profile/Profile";
import useModal from "../../hooks/useModal";
import { Button, Text } from "../../theme/styledcomponents";
import Footer from "../../components/Footer/Footer";
const AboutPage = () => {
    const { handleOpen} = useModal()
    return (
        <>
        <Profile/>
        <Text variant='white'>About</Text>
        <Button variant='purple' onClick={()=>handleOpen('createCard')}>Click me</Button>
        <Footer/>
        </>
    );
}

export default AboutPage;