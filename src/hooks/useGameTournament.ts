import { useState, useEffect } from 'react';

export const useGameTournament = (players: string[]) => {
  const [rounds, setRounds] = useState<string[][][]>([]);

  useEffect(() => {
    if (players.length > 1) {
      const initialRound = [...Array(Math.ceil(players.length / 2))].map(() => ['', '']);
      setRounds([initialRound]);
    }
  }, [players]);

  const handleWin = (roundIdx: number, matchIdx: number, winner: string) => {
    const nextRoundIdx = roundIdx + 1;
    const updatedRounds = [...rounds];

    if (!updatedRounds[nextRoundIdx]) {
      updatedRounds[nextRoundIdx] = [...Array(updatedRounds[roundIdx].length / 2)].map(() => ['', '']);
    }

    updatedRounds[roundIdx][matchIdx] = [winner];
    updatedRounds[nextRoundIdx][Math.floor(matchIdx / 2)].push(winner);

    setRounds(updatedRounds);
  };

  return { rounds, handleWin };
};
