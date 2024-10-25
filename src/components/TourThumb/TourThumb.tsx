import { useSelector } from 'react-redux';
import { Button, Container, Text } from '../../theme/styledcomponents';
import { Tournament } from '../../types/tournamentTypes';
import './TourThumb.css';
import { FaLocationPin } from 'react-icons/fa6';
import { AppState } from '../../types/stateType';

type TourThumbProps = {
    tournament: Tournament
}

const TourThumb = ({ tournament }: TourThumbProps) => {
    const { user } = useSelector((state: AppState) => state);

    return (
        <section 
            className='tournament-thumbnail' 
            style={{ backgroundImage: `url(${tournament.picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='tour-button'>
            {
                user.id === tournament.host ? 
                <Button variant='purple' onClick={() => {}}>
                    Start
                </Button>
                :
                <Button variant='gray' onClick={() => {}}>
                    Join
                </Button>
            }
            </div>
            <Container variant='smallopacity'>
            <Text variant='white'><FaLocationPin/>{tournament.location}</Text>
            <Text variant='white'>{tournament.date}</Text>
            </Container>
        </section>
    );
}

export default TourThumb;