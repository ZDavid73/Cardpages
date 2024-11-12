import React from 'react';
import Setup from '../../components/Setup/Setup';
import Bracket from '../../components/Bracket/Bracket';
//import { useSetup } from '../../hooks/useSetup';
import { useGameTournament } from '../../hooks/useGameTournament';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WinnerBox from '../../components/WinnerBox/WinnerBox';
import { Tittle } from '../../theme/styledcomponents';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Tournament } from '../../types/tournamentTypes';
import { getUserInfo } from '../../services/databaseService';
import { UserState } from '../../features/auth/userSlice';
import './GamePage.css'
import TournamentWinner from '../../components/TournamentWinner/TournamentWinner';
import { useTimer, useTournament } from '../../hooks/useTournament';
import GameHeader from '../../components/GameHeader/GameHeader';
import { useSelector } from 'react-redux';
import { AppState } from '../../types/stateType';

const GamePage: React.FC = () => {
  //const { players, addPlayer, resetPlayers } = useSetup();
  const [usersInfo, setUsersInfo] = useState<UserState[]>([]);
  const { rounds, handlePlacePlayer, handleWin, tournamentWinner, setTournamentWinner } = useGameTournament(usersInfo.map((user) => user.username));
  const { handleFinishTournament } = useTournament();
  const navigate = useNavigate()
  const location = useLocation()
  const tournament: Tournament = useSelector((state: AppState) => state.tournaments.tournaments.find((tour: Tournament) => tour.id === location.state.tournament.id)) || location.state.tournament

  const { timeLeft } = useTimer(tournament.date, tournament.hour)
  const [tourHost, setTourHost] = useState<UserState | null>(null)


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const fetchedUsers = await Promise.all(
          tournament.players.map(async (player) => {
            const res = await getUserInfo(player.id);
            return res;
          })
        );

        const hostInfo = await getUserInfo(tournament.host);
        if (hostInfo) {
          setTourHost(hostInfo);
        }
        
        if ( fetchedUsers.every((user) => user !== null && typeof user === 'object' && 'username' in user) ) {
          setUsersInfo(fetchedUsers);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
  
    fetchUserInfo();
  }, [tournament.players, tournament.host]);

  if (tournamentWinner){
    const winner = usersInfo.find(u => u.username === tournamentWinner)

    handleFinishTournament(tournament.id, tournamentWinner, winner?.id || '')
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="game-page">
      <section className="create-tour-tittle">
            <FaArrowCircleLeft onClick={() => navigate(-1)} color="white"/>
            <Tittle variant="white">Tournament's details</Tittle>
      </section>

      <div className="catalogue-sectionheader">
           <Setup players={usersInfo} tournament={tournament} timeLeft={timeLeft}/>
            <GameHeader tournament={tournament} userInfo={usersInfo} host={tourHost}/> 
      </div>

      { tournament.status === 'upcoming' && (
        <section className='whole-tree'>
        {tournament.players.length >= 2 && (
          <Bracket
            rounds={rounds}
            onPlacePlayer={handlePlacePlayer}
            onWin={handleWin}
          />
        )}
        {rounds.length > 0 && rounds[rounds.length - 1].length === 1 && rounds[rounds.length - 1][0].filter(player => player !== '').length === 2 && (
          <WinnerBox setWinner={setTournamentWinner} winner={tournamentWinner} />
        )}
        
        {tournamentWinner && (
          <TournamentWinner winner={usersInfo.find(u => u.username === tournamentWinner)}/>
        )}
        </section>
      )}
      </div>
    </DndProvider>
  );
};

export default GamePage;
