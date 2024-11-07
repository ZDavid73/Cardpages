import { useSelector } from 'react-redux';
import { Button, Text } from '../../theme/styledcomponents';
import { Tournament } from '../../types/tournamentTypes';
import './TourThumb.css';
import { FaLocationPin } from 'react-icons/fa6';
import { AppState } from '../../types/stateType';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';

type TourThumbProps = {
    tournament: Tournament
}

const TourThumb = ({ tournament }: TourThumbProps) => {
    const id = useSelector((state: AppState) => state.user.id);
    const { handleOpen } = useModal();
    const navigate = useNavigate();

    return (
        <section 
            className='tournament-thumbnail' 
            style={{ backgroundImage: `url(${tournament.picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='tour-button'>
            {
                tournament.status === 'finished' ?
                <Button variant='gray' onClick={() => navigate('/game', { state: { tournament } })}>Finished</Button> :
                id === tournament.host ? 
                <Button variant='purple' onClick={() => navigate('/game', { state: { tournament } })}>
                    Start
                </Button>
                :
                <Button variant='gray' onClick={() => handleOpen('joinTournament', tournament)}>
                    Join
                </Button>
            }
            </div>
            <div className='thumb-tour-info'>
            <Text variant='white'><FaLocationPin/>{tournament.location}</Text>
            <Text variant='white'>{tournament.date}</Text>
            </div>
        </section>
    );
}

export default TourThumb;