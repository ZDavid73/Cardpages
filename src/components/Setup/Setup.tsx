import React from 'react';
import { Container, Text, Tittle } from '../../theme/styledcomponents';
import { UserState } from '../../features/auth/userSlice';
import './Setup.css';
import { useDrag } from 'react-dnd';

interface SetupProps {
  players: UserState[];
  max: number;
}

const Setup: React.FC<SetupProps> = ({ players, max }) => {
  //const [newPlayer, setNewPlayer] = useState('');

  {/*const handleAddPlayer = () => {
    if (newPlayer.trim()) {
      addPlayer(newPlayer);
      setNewPlayer('');
    }
  };*/}

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
      <section className='tour-players'>
        {players.map((player, idx) => (
          <DraggablePlayer key={idx} player={player} />
        ))}

        <Text variant='white'>{players.length}/{max} players</Text>
        <Text variant='purple'>{players.length === max ? 'Ready to start!' : `There's not enough people to start yet!`}</Text>
      </section>
    </Container>
  );
};

//

const DraggablePlayer: React.FC<{ player: UserState }> = ({ player }) => {
  const [, dragRef] = useDrag({
    type: 'PLAYER',
    item: { name: player.username },
  });

  return (
    <div className="tour-profile" ref={dragRef}>
            <img src={player.picture} alt={player.username} />
            <Text variant="white">{player.username}</Text>
    </div>
  );
};

export default Setup;
