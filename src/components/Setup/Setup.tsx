import React from 'react';
import { Container, Text, Tittle } from '../../theme/styledcomponents';
import { UserState } from '../../features/auth/userSlice';
import TourProfile from '../TourProfile/TourProfile';
import './Setup.css';

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
          <TourProfile key={idx} player={player} />
        ))}

        <Text variant='white'>{players.length}/{max} players</Text>
        <Text variant='purple'>{players.length === max ? 'Ready to start!' : `There's not enough people to start yet!`}</Text>
      </section>
    </Container>
  );
};

export default Setup;
