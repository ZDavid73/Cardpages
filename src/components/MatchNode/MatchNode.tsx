import React from 'react';
import { useDrop } from 'react-dnd';
import { Match } from '../../types/tournamentTypes';
import {Text} from '../../theme/styledcomponents';


interface MatchNodeProps {
  match: Match;
  onPlacePlayer: (player: string, position: 'player1' | 'player2') => void;
  onWin: (winner: string) => void;
}

const MatchNode: React.FC<MatchNodeProps> = ({ match, onPlacePlayer, onWin }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'PLAYER',
    drop: (item: { name: string }) => {
      const dropPosition: 'player1' | 'player2' = !match.player1 ? 'player1' : 'player2';
      onPlacePlayer(item.name, dropPosition);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef} className={`match-node ${isOver ? 'highlight' : ''}`}>
      <div className={`player-slot ${match.player1 ? 'filled' : 'empty'}`} onClick={() => match.player1 && onWin(match.player1)}>
        <Text variant="white">{match.player1 || 'Drag here'}</Text>
      </div>
      <div className={`player-slot ${match.player2 ? 'filled' : 'empty'}`} onClick={() => match.player2 && onWin(match.player2)}>
        <Text variant="white">{match.player2 || 'Drag here'}</Text>
      </div>
    </div>
  );
};

export default MatchNode;
