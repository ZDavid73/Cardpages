import Profile from "../../components/Profile/Profile";
import { Text } from "../../theme/styledcomponents";
import { Card } from '../../types/cardTypes';

const About = () => {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    return (
        <>
        <Profile/>
        <Text variant='white'>About</Text>
        </>
    );
}

export default About;