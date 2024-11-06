import { useState, useEffect } from 'react';

export const useGameTournament = (players: string[]) => {
  const [rounds, setRounds] = useState<string[][][]>([]);
  const [tournamentWinner, setTournamentWinner] = useState<string | null>(null); // Ganador final

  useEffect(() => {
    if (players.length > 1 && rounds.length === 0) {
      const initialRound = [...Array(Math.ceil(players.length / 2))].map(() => ['', '']);
      setRounds([initialRound]);
    }
  }, [players, rounds]);

  useEffect(() => {
    // Si ya tenemos un ganador, no continuar
    if (tournamentWinner) return;

    // Revisa si la última ronda está completa y necesita crear una nueva ronda
    const lastRound = rounds[rounds.length - 1];
    if (lastRound && lastRound.every(match => match.every(player => player !== ''))) {
      const nextRoundIdx = rounds.length;

      // Si solo queda un partido en la última ronda y tiene dos jugadores, es la ronda final
      if (lastRound.length === 1 && lastRound[0].filter(player => player !== '').length === 2) {
        // No creamos una nueva ronda; esta es la ronda final
        return;
      }

      // Crear la siguiente ronda si no es la ronda final
      const numMatches = Math.ceil(lastRound.length / 2);
      const nextRound = [...Array(numMatches)].map(() => ['', '']);
      setRounds([...rounds, nextRound]);
    }
  }, [rounds, tournamentWinner]);

  const handlePlacePlayer = (roundIdx: number, matchIdx: number, player: string) => {
    const updatedRounds = [...rounds];
    const match = updatedRounds[roundIdx][matchIdx];

    if (match.includes('')) {
      // Coloca el jugador en la primera posición vacía
      match[match.indexOf('')] = player;
      setRounds(updatedRounds);
    }
  };

  const handleWin = (roundIdx: number, matchIdx: number, winner: string) => {
    // Si ya tenemos un ganador final, no hacer nada
    if (tournamentWinner) return;

    const nextRoundIdx = roundIdx + 1;
    const updatedRounds = [...rounds];

    // Si es la ronda final (solo un partido con dos jugadores), configurar ganador del torneo
    if (rounds[roundIdx].length === 1 && rounds[roundIdx][0].filter(player => player !== '').length === 2) {
      setTournamentWinner(winner);
    } else {
      // Crear la siguiente ronda si no existe aún
      if (!updatedRounds[nextRoundIdx]) {
        const numMatches = Math.ceil(updatedRounds[roundIdx].length / 2);
        updatedRounds[nextRoundIdx] = [...Array(numMatches)].map(() => ['', '']);
      }

      // Asignar el ganador a la siguiente ronda
      updatedRounds[roundIdx][matchIdx] = [winner];
      updatedRounds[nextRoundIdx][Math.floor(matchIdx / 2)].push(winner);
      setRounds(updatedRounds);
    }
  };

  return { rounds, handlePlacePlayer, handleWin, tournamentWinner, setTournamentWinner };
};
