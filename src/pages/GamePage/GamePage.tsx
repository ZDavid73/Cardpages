import React from 'react';
import Setup from '../../components/Setup/Setup';
import Bracket from '../../components/Bracket/Bracket';
//import { useSetup } from '../../hooks/useSetup';
import { useGameTournament } from '../../hooks/useGameTournament';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WinnerBox from '../../components/WinnerBox/WinnerBox';
import Header from '../../components/Header/Header';
import { Tittle } from '../../theme/styledcomponents';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Tournament } from '../../types/tournamentTypes';
import { getUserInfo } from '../../services/databaseService';
import { UserState } from '../../features/auth/userSlice';

const GamePage: React.FC = () => {
  //const { players, addPlayer, resetPlayers } = useSetup();
  const [usersInfo, setUsersInfo] = useState<UserState[]>([]);
  const { rounds, handlePlacePlayer, handleWin, tournamentWinner, setTournamentWinner } = useGameTournament(usersInfo.map((user) => user.username));
  const navigate = useNavigate()
  const location = useLocation()
  const tournament: Tournament = location.state.tournament


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const fetchedUsers = await Promise.all(
          tournament.players.map(async (player) => {
            const res = await getUserInfo(player.id);
            return res;
          })
        );
        
        if ( fetchedUsers.every((user) => user !== null && typeof user === 'object' && 'username' in user) ) {
          setUsersInfo(fetchedUsers);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
  
    fetchUserInfo();
  }, [tournament.players]);
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="game-page">
      <section className="create-tour-tittle">
            <FaArrowCircleLeft onClick={() => navigate(-1)} color="white"/>
            <Tittle variant="white">Tournament's details</Tittle>
      </section>

      <div className="catalogue-sectionheader">
           <Setup players={usersInfo} max={tournament.max}/>
            <Header/> 
      </div>
      
        {tournament.players.length >= 2 && (
          <Bracket
            rounds={rounds}
            onPlacePlayer={handlePlacePlayer}
            onWin={handleWin}
          />
        )}
        {rounds.length > 0 && rounds[rounds.length - 1].length === 1 && rounds[rounds.length - 1][0].filter(player => player !== '').length === 2 && (
          <WinnerBox setWinner={setTournamentWinner} />
        )}
        {tournamentWinner && (
          <div className="results">
            <h2>Ganador del Torneo</h2>
            <p>{tournamentWinner}</p>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default GamePage;
