import './GameHeader.css'
import {Button, Container, Tittle} from '../../theme/styledcomponents';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import { Tournament } from '../../types/tournamentTypes';
import { UserState } from '../../features/auth/userSlice';
import useModal from '../../hooks/useModal';
import PlayerThumb from '../PlayerThumb/PlayerThumb';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'

type GameHeaderProps = {
    tournament: Tournament;
    userInfo: UserState[];
    host: UserState | null;
}

const GameHeader = ({tournament, userInfo, host}: GameHeaderProps) => {
    const user = useSelector((state: AppState) => state.user);
    const {handleOpen} = useModal();

    return (
    <div className='game-header'>
    <div className='game-carrusel'>
        <Swiper  effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
        >
                { userInfo.map((player, idx) => (
                <SwiperSlide key={idx}>
                <PlayerThumb key={idx} player={player} deck={tournament.players.find(p => p.id === player.id)?.deck} />
                </SwiperSlide>
                ))}
        </Swiper>
    </div>
    
    <Container variant='small' className='username-calatogues'>
        <Tittle variant='white' className='username-headers'>{host?.username}'s tournament</Tittle>
        { tournament.host === user.id && tournament.status === 'upcoming' && <Button variant='purple'>Start</Button> }
        
        { tournament.host !== user.id && tournament.status === 'upcoming' && tournament.players.length !== tournament.max ? <Button variant='gray' onClick={() => handleOpen('joinTournament', tournament)}>{tournament.players.some(p => p.id === user.id) ? 'Abandon' : 'Join'}</Button> : null }
    </Container>
    </div>
    );
  };
  
  export default GameHeader;