import './GameHeader.css'
import {Button, Container, Tittle} from '../../theme/styledcomponents';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import { Tournament } from '../../types/tournamentTypes';
import { UserState } from '../../features/auth/userSlice';
import useModal from '../../hooks/useModal';
import PlayerThumb from '../PlayerThumb/PlayerThumb';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useState } from 'react';
import 'swiper/css';

type GameHeaderProps = {
    tournament: Tournament;
    userInfo: UserState[];
    host: UserState | null;
}

const GameHeader = ({tournament, userInfo, host}: GameHeaderProps) => {
    const user = useSelector((state: AppState) => state.user);
    const {handleOpen} = useModal();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
    <div className='game-header'>
    <div className='game-carrusel'>
        <Swiper modules={[Autoplay]}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                slidesPerGroup={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
                { userInfo.map((player, idx) => {
                const isCenter = idx === activeIndex;

                return (
                    <SwiperSlide key={idx}>
                    <PlayerThumb key={idx} player={player} deck={tournament.players.find(p => p.id === player.id)?.deck} isCenter={isCenter} />
                    </SwiperSlide>
                )
                })}
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