import React from 'react';
import Setup from '../../components/Setup/Setup';
import Bracket from '../../components/Bracket/Bracket';
//import { useSetup } from '../../hooks/useSetup';
import { useGameTournament } from '../../hooks/useGameTournament';
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
  const { rounds, handleWin, results } = useGameTournament(usersInfo.map((user) => user.username));
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
    <>
      <section className="create-tour-tittle">
            <FaArrowCircleLeft onClick={() => navigate(-1)} color="white"/>
            <Tittle variant="white">Tournament's details</Tittle>
      </section>

      <div className="catalogue-sectionheader">
           <Setup players={usersInfo} max={tournament.max}/>
            <Header/> 
      </div>

      {tournament.players.length >= 2 && <Bracket rounds={rounds} onWin={handleWin} />}
      {results.length > 0 && (
        <div className="results">
          <h2>Resultados del Torneo</h2>
          <ul>
            {results.map((winner, idx) => (
              <li key={idx}>Ganador de la ronda {idx + 1}: {winner}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GamePage;
