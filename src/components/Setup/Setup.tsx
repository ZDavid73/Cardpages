import React from 'react';
import { Container, Text, Tittle } from '../../theme/styledcomponents';
import { UserState } from '../../features/auth/userSlice';
import './Setup.css';
import { useDrag } from 'react-dnd';
import { Tournament } from '../../types/tournamentTypes';
import { FaCrown } from 'react-icons/fa';

interface SetupProps {
  players: UserState[];
  tournament: Tournament;
}

const Setup: React.FC<SetupProps> = ({ players, tournament }) => {

  return (
    <Container variant='small'>
      <Tittle variant='white'>Players</Tittle>
      <section className='tour-players'>
        {tournament.status !== 'finished' ?
        
        players.map((player, idx) => (
          <DraggablePlayer key={idx} player={player} />
        )) :

        players.map((player, idx) => (
          <DraggablePlayer key={idx} player={player} won={ player.username === tournament.winner ? true : false} />
        ))
      
      }

        <Text variant='white'>{players.length}/{tournament.max} players</Text>
        <Text variant='purple'>{players.length === tournament.max ? tournament.status === 'finished' ? 'This tournament has finished!' : 'Ready to start!' : `There's not enough people to start yet!`}</Text>
      </section>
    </Container>
  );
};

const DraggablePlayer: React.FC<{ player: UserState, won?: boolean }> = ({ player, won }) => {
  const [, dragRef] = useDrag({
    type: 'PLAYER',
    item: { name: player.username },
  });

  return (
    <div className={`tour-profile ${won ? 'winner' : null}`} ref={dragRef}>
            <img src={player.picture} alt={player.username} />
            <Text variant="white">{player.username}</Text>
            { won && <FaCrown color="orange" size={24}/> }
    </div>
  );
};

export default Setup;
