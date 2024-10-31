import React from 'react';
import Setup from '../../components/Setup/Setup';
import Bracket from '../../components/Bracket/Bracket';
import { useSetup } from '../../hooks/useSetup';
import { useGameTournament } from '../../hooks/useGameTournament';

const GamePage: React.FC = () => {
  const { players, addPlayer, resetPlayers } = useSetup();
  const { rounds, handleWin } = useGameTournament(players);

  return (
    <div className="game-page">
      <h1>Torneo de Llaves</h1>
      <Setup players={players} addPlayer={addPlayer} resetPlayers={resetPlayers} />
      {players.length >= 2 && <Bracket rounds={rounds} onWin={handleWin} />}
    </div>
  );
};

export default GamePage;
