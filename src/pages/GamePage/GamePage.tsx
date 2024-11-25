import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Setup from '../../components/Setup/Setup';
import Bracket from '../../components/Bracket/Bracket';
import WinnerBox from '../../components/WinnerBox/WinnerBox';
import TournamentWinner from '../../components/TournamentWinner/TournamentWinner';
import TournamentHistory from '../../components/TournamentHistory/TournamentHistory';
import GameHeader from '../../components/GameHeader/GameHeader';
import { Tittle } from '../../theme/styledcomponents';
import { useTimer, useTournament } from '../../hooks/useTournament';
import { useGameTournament } from '../../hooks/useGameTournament';
import { getUserInfo } from '../../services/databaseService';
import { saveMatch, getTournamentMatches } from '../../services/tournamentService';
import { UserState } from '../../features/auth/userSlice';
import { AppState } from '../../types/stateType';
import { Tournament } from '../../types/tournamentTypes';
import './GamePage.css';

// Definimos el tipo Match
interface Match {
  id: string;
  tournament_id: string;
  round_index: number;
  match_index: number;
  players: string[];
  winner: string;
  created_at: string;
}

const GamePage: React.FC = () => {
  const [usersInfo, setUsersInfo] = useState<UserState[]>([]);
  const [matches, setMatches] = useState<Match[]>([]); // Usamos el tipo Match
  const [tourHost, setTourHost] = useState<UserState | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const tournament: Tournament = useSelector((state: AppState) =>
    state.tournaments.tournaments.find(
      (tour: Tournament) => tour.id === location.state.tournament.id
    )
  ) || location.state.tournament;

  const { timeLeft } = useTimer(tournament.date, tournament.hour);
  const { rounds, handlePlacePlayer, handleWin, tournamentWinner, setTournamentWinner } =
    useGameTournament(usersInfo.map((user) => user.username));
  const { handleFinishTournament } = useTournament();

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

        if (
          fetchedUsers.every(
            (user) => user !== null && typeof user === 'object' && 'username' in user
          )
        ) {
          setUsersInfo(fetchedUsers);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    const fetchTournamentMatches = async () => {
      try {
        const data = await getTournamentMatches(tournament.id); // Recupera enfrentamientos
        setMatches(data); // Aquí el tipo `Match[]` asegura que los datos sean válidos
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchUserInfo();
    fetchTournamentMatches();
  }, [tournament.players, tournament.host, tournament.id]);

  const handleSaveMatch = async (roundIdx: number, matchIdx: number, winner: string) => {
    const players = rounds[roundIdx][matchIdx];
    try {
      await saveMatch(tournament.id, roundIdx, matchIdx, players, winner);
    } catch (error) {
      console.error('Error saving match to Supabase:', error);
    }
  };

  useEffect(() => {
    if (tournamentWinner) {
      const winner = usersInfo.find((u) => u.username === tournamentWinner);
      handleFinishTournament(tournament.id, tournamentWinner, winner?.id || '');
    }
  }, [tournamentWinner]);

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <div className="game-page">
        <section className="create-tour-tittle">
          <FaArrowCircleLeft onClick={() => navigate(-1)} color="white" />
          <Tittle variant="white">Tournament's details</Tittle>
        </section>

        <div className="tour-sectionheader">
          <Setup players={usersInfo} tournament={tournament} timeLeft={timeLeft} />
          <GameHeader tournament={tournament} userInfo={usersInfo} host={tourHost} />
        </div>

        {tournament.status === 'upcoming' && (
          <section className="whole-tree">
            {tournament.players.length >= 2 && (
              <Bracket
                rounds={rounds}
                onPlacePlayer={(roundIdx, matchIdx, player) =>
                  handlePlacePlayer(roundIdx, matchIdx, player)
                }
                onWin={(roundIdx, matchIdx, winner) => {
                  handleWin(roundIdx, matchIdx, winner);
                  handleSaveMatch(roundIdx, matchIdx, winner);
                }}
              />
            )}
            {rounds.length > 0 &&
              rounds[rounds.length - 1].length === 1 &&
              rounds[rounds.length - 1][0].filter((player) => player !== '').length === 2 && (
                <WinnerBox setWinner={setTournamentWinner} winner={tournamentWinner} />
              )}

            {tournamentWinner && (
              <TournamentWinner winner={usersInfo.find((u) => u.username === tournamentWinner)} />
            )}
          </section>
        )}

        {tournament.status === 'completed' && (
          <TournamentHistory matches={matches} />
        )}
      </div>
    </DndProvider>
  );
};

export default GamePage;
