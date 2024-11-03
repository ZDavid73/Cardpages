import React from 'react';
import Setup from '../../components/Setup/Setup';
import Bracket from '../../components/Bracket/Bracket';
import { useSetup } from '../../hooks/useSetup';
import { useGameTournament } from '../../hooks/useGameTournament';

const GamePage: React.FC = () => {
  const { players, addPlayer, resetPlayers } = useSetup();
  const { rounds, handleWin, results } = useGameTournament(players);

  return (
    <div className="game-page">
      <h1>Torneo de Llaves</h1>
      <Setup players={players} addPlayer={addPlayer} resetPlayers={resetPlayers} />
      {players.length >= 2 && <Bracket rounds={rounds} onWin={handleWin} />}
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
    </div>
  );
};

export default GamePage;
