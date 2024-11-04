import React from 'react';
import MatchNode from '../MatchNode/MatchNode';

interface BracketProps {
  rounds: string[][][];
  onWin: (roundIdx: number, matchIdx: number, winner: string) => void;
}

const Bracket: React.FC<BracketProps> = ({ rounds, onWin }) => (
  <div className="bracket-tree">
    {rounds.map((round, roundIdx) => (
      <div key={roundIdx} className="round-tree">
        <h3>Ronda {roundIdx + 1}</h3>
        {round.map((match, matchIdx) => (
          <MatchNode
            key={matchIdx}
            match={match}
            onWin={(winner) => onWin(roundIdx, matchIdx, winner)}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Bracket;
