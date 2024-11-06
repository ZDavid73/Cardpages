import React, { useState } from 'react';
import { Container, Text, Tittle } from '../../theme/styledcomponents';
import { Player } from '../../types/tournamentTypes';

interface SetupProps {
  players: Player[];
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
    <Container variant='small'>
      <Tittle variant='white'>Players</Tittle>
      {/*<Input variant='searchwhite'
        type="text"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
        placeholder="Nombre del jugador"
      />
      <button onClick={handleAddPlayer}>Agregar Jugador</button>
      <button onClick={resetPlayers}>Reiniciar Jugadores</button>*/}
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>
            <Text variant='white'>{player.id}</Text>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Setup;
