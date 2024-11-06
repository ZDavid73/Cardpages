import React from 'react';
import Setup from '../../components/Setup/Setup';
import Bracket from '../../components/Bracket/Bracket';
import { useSetup } from '../../hooks/useSetup';
import { useGameTournament } from '../../hooks/useGameTournament';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WinnerBox from '../../components/WinnerBox/WinnerBox';

const GamePage: React.FC = () => {
  const { players, addPlayer, resetPlayers } = useSetup();
  const { rounds, handlePlacePlayer, handleWin, tournamentWinner, setTournamentWinner } = useGameTournament(players);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="game-page">
        <h1>Torneo de Llaves</h1>
        <Setup players={players} addPlayer={addPlayer} resetPlayers={resetPlayers} />
        {players.length >= 2 && (
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
