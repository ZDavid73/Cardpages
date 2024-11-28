import React from 'react';
import MatchNode from '../MatchNode/MatchNode';
import { Round } from '../../types/tournamentTypes';

interface BracketProps {
  rounds: Round[];
  onPlacePlayer: (
    roundIdx: number,
    matchIdx: number,
    player: string,
    playerPosition: 'player1' | 'player2'
  ) => void;
  onWin: (roundIdx: number, matchIdx: number, winner: string) => void;
}

const Bracket: React.FC<BracketProps> = ({ rounds, onPlacePlayer, onWin }) => (
  <div className="bracket-tree">
    {rounds.map((round, roundIdx) => (
      <div key={round.id} className="round-tree">
        {round.matches.map((match, matchIdx) => (
          <MatchNode
            key={match.id}
            match={match}
            onPlacePlayer={(player, position) => onPlacePlayer(roundIdx, matchIdx, player, position)}
            onWin={(winner) => onWin(roundIdx, matchIdx, winner)}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Bracket;
