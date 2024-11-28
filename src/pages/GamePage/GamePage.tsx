import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import Setup from '../../components/Setup/Setup';
import GameHeader from '../../components/GameHeader/GameHeader';
import Bracket from '../../components/Bracket/Bracket';
import WinnerBox from '../../components/WinnerBox/WinnerBox';
import TournamentWinner from '../../components/TournamentWinner/TournamentWinner';
import {
  saveTournamentRounds,
  finishTournament,
  getUserInfo,
} from '../../services/databaseService';
import { Tittle } from '../../theme/styledcomponents';
import { useTimer } from '../../hooks/useTournament';
import { AppState } from '../../types/stateType';
import { Tournament, Round } from '../../types/tournamentTypes';

import './GamePage.css';
import { User } from '../../types/userTypes';

const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const tournament: Tournament =
    useSelector((state: AppState) =>
      state.tournaments.tournaments.find((tour: Tournament) => tour.id === location.state.tournament.id)
    ) || location.state.tournament;

  const [rounds, setRounds] = useState<Round[]>(tournament.rounds || []);
  const [usersInfo, setUsersInfo] = useState<User[]>([]);
  const { timeLeft } = useTimer(tournament.date, tournament.hour);
  const [tournamentWinner, setTournamentWinner] = useState<string | null>(tournament.winner || null);
  const [tourHost, setTourHost] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const fetchedUsers = await Promise.all(
          tournament.players.map(async (player) => {
            const res = await getUserInfo(player.id);
            if (res) { 
              return { ...res };
            }
            return null;
          })
        );

        const hostInfo = await getUserInfo(tournament.host);
        if (hostInfo) setTourHost(hostInfo);

        setUsersInfo(fetchedUsers.filter((user): user is User => user !== null) as User[]);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchUserInfo();
  }, [tournament.players, tournament.host]);

  useEffect(() => {
    const generateEliminationBrackets = (players: string[]): Round[] => {
      const rounds: Round[] = [];
      let currentPlayers = [...players];

      while (currentPlayers.length > 1) {
        const matches = [];
        for (let i = 0; i < currentPlayers.length; i += 2) {
          matches.push({
            id: `match-${rounds.length}-${Math.floor(i / 2)}`,  // Keeping id as string
            player1: currentPlayers[i] || '',
            player2: currentPlayers[i + 1] || '',
            winner: '',
          });
        }
        rounds.push({ id: rounds.length, matches });
        currentPlayers = matches.map((match) => match.winner || '');
      }
      return rounds;
    };

    if (!tournament.rounds || tournament.rounds.length === 0) {
      const playerUsernames = tournament.players.map((p) => p.id); // Assuming players' id or another field needed here
      const initialRounds = generateEliminationBrackets(playerUsernames);
      setRounds(initialRounds);
      saveTournamentRounds(tournament.id, initialRounds);
    }
  }, [tournament.players, tournament.rounds, tournament.id]); // Adding `tournament.id` for correctness

  const handlePlacePlayer = (
    roundIdx: number,
    matchIdx: number,
    player: string,
    playerPosition: 'player1' | 'player2'
  ) => {
    const updatedRounds = [...rounds];
    const match = updatedRounds[roundIdx].matches[matchIdx];
    match[playerPosition] = player;
    setRounds(updatedRounds);
    saveTournamentRounds(tournament.id, updatedRounds);
  };

  const handleWin = (roundIdx: number, matchIdx: number, winner: string) => {
    const updatedRounds = [...rounds];
    updatedRounds[roundIdx].matches[matchIdx].winner = winner;

    if (roundIdx < updatedRounds.length - 1) {
      const nextRound = updatedRounds[roundIdx + 1];
      const nextMatchIdx = Math.floor(matchIdx / 2);
      const playerPosition = matchIdx % 2 === 0 ? 'player1' : 'player2';
      nextRound.matches[nextMatchIdx][playerPosition] = winner;
    } else {
      setTournamentWinner(winner);
      finishTournament(tournament.id, winner);
    }

    setRounds(updatedRounds);
    saveTournamentRounds(tournament.id, updatedRounds);
  };

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <div className="game-page">
        <section className="create-tour-tittle">
          <FaArrowCircleLeft onClick={() => navigate(-1)} color="white" />
          <Tittle variant="white">Tournament's details</Tittle>
        </section>

        <div className="tour-sectionheader">
          <Setup players={usersInfo} tournament={tournament} timeLeft={timeLeft} />
          <GameHeader tournament={tournament} userInfo={usersInfo} host={tourHost} />
        </div>

        <section className="whole-tree">
          {tournament.players.length >= 2 && (
            <Bracket rounds={rounds} onPlacePlayer={handlePlacePlayer} onWin={handleWin} />
          )}
          {rounds.length > 0 &&
            rounds[rounds.length - 1].matches.length === 1 &&
            rounds[rounds.length - 1].matches[0].player1 &&
            rounds[rounds.length - 1].matches[0].player2 && (
              <WinnerBox setWinner={setTournamentWinner} winner={tournamentWinner} />
            )}
        </section>

        {tournamentWinner && (
          <TournamentWinner winner={usersInfo.find((u) => u.username === tournamentWinner)} />
        )}
      </div>
    </DndProvider>
  );
};

export default GamePage;