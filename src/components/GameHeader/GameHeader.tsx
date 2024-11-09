import './GameHeader.css'
import {Button, Container, Tittle} from '../../theme/styledcomponents';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import { Tournament } from '../../types/tournamentTypes';
import { UserState } from '../../features/auth/userSlice';
import useModal from '../../hooks/useModal';

type GameHeaderProps = {
    tournament: Tournament;
    userInfo: UserState[];
    host: UserState | null;
}

const GameHeader = ({tournament, userInfo, host}: GameHeaderProps) => {
    const user = useSelector((state: AppState) => state.user);
    const {handleOpen} = useModal();

    return (
    <div className='calatogues-header'>
    <div className='catalogues-image' 
        style={{
        backgroundImage: `url('https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/pokemon-101-1280x960.webp')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '50vh',
        borderRadius: '10px',
        }}
    ></div>
    
    <Container variant='small' className='username-calatogues'>
        <Tittle variant='white' className='username-headers'>{host?.username}'s tournament</Tittle>
        { tournament.host === user.id && tournament.status === 'upcoming' && <Button variant='purple'>Start</Button> }
        
        { tournament.host !== user.id && tournament.status === 'upcoming' && tournament.players.length !== tournament.max ? <Button variant='gray' onClick={() => handleOpen('joinTournament', tournament)}>{tournament.players.some(p => p.id === user.id) ? 'Abandon' : 'Join'}</Button> : null }
    </Container>
    </div>
    );
  };
  
  export default GameHeader;