import React, { useState } from 'react';

interface SetupProps {
  players: string[];
  addPlayer: (name: string) => void;
  resetPlayers: () => void;
}

const Setup: React.FC<SetupProps> = ({ players, addPlayer, resetPlayers }) => {
  const [newPlayer, setNewPlayer] = useState('');

  const handleAddPlayer = () => {
    if (newPlayer.trim()) {
      addPlayer(newPlayer);
      setNewPlayer('');
    }
  };

  return (
    <div className="setup">
      <h2>Registro de Jugadores</h2>
      <input
        type="text"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
        placeholder="Nombre del jugador"
      />
      <button onClick={handleAddPlayer}>Agregar Jugador</button>
      <button onClick={resetPlayers}>Reiniciar Jugadores</button>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default Setup;
