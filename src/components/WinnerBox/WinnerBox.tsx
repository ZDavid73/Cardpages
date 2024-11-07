import React from 'react';
import { useDrop } from 'react-dnd';
import { Text } from '../../theme/styledcomponents';

interface WinnerBoxProps {
  setWinner: (winner: string) => void;
  winner: string | null;
}

const WinnerBox: React.FC<WinnerBoxProps> = ({ setWinner, winner }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'PLAYER',
    drop: (item: { name: string }) => setWinner(item.name),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef} className={`winner-box ${isOver ? 'highlight' : ''}`}>
      <Text variant='white'>{winner? winner : 'Drag the winner!'}</Text>
    </div>
  );
};

export default WinnerBox;
