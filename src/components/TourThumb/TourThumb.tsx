import { useSelector } from 'react-redux';
import { Button, } from '../../theme/styledcomponents';
import { Tournament } from '../../types/tournamentTypes';
import './TourThumb.css';
import { FaLocationPin } from 'react-icons/fa6';
import { AppState } from '../../types/stateType';
import { useNavigate } from 'react-router-dom';
import { FiMoreHorizontal } from 'react-icons/fi';

type TourThumbProps = {
    tournament: Tournament
}

const TourThumb =  ({ tournament }: TourThumbProps) => {
    const id = useSelector((state: AppState) => state.user.id);
    const navigate = useNavigate();

    return (
        <section 
            className='tournament-thumbnail' 
            style={{ backgroundImage: `url(${tournament.picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='tour-button'>
            {
                tournament.status === 'finished' ?
                <Button variant='gray' onClick={() => navigate(`/game/${tournament.id}`, { state: { tournament} })}>Finished</Button> :
                id === tournament.host ? 
                <Button variant='purple' onClick={() => navigate(`/game/${tournament.id}`, { state: { tournament } })}>
                    Start
                </Button>
                :
                <div onClick={() => navigate(`/game/${tournament.id}`, { state: { tournament } })}>
                    <FiMoreHorizontal className='icon-buttonCard'/>
                </div>
            }
            </div>
            <div className='thumb-tour-info'>
                <p id='tour-thum-info-title'> <FaLocationPin/>{tournament.location}</p>
                <p className='tour-thum-info-text'>${tournament.date}</p>
                <p className='tour-flavortext'>{tournament.desc}</p>
            </div>
        </section>
    );
}

export default TourThumb;