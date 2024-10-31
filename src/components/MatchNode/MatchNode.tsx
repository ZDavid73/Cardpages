import React from 'react';
//import * as d3 from 'd3';

interface MatchNodeProps {
  match: string[]; 
  onWin: (winner: string) => void;
}

const MatchNode: React.FC<MatchNodeProps> = ({ match, onWin }) => {
   const handleDrag = d3.drag<SVGElement, unknown>().on('end', (event: d3.D3DragEvent<SVGElement, unknown, unknown>) => {
    const winner = event.subject?.textContent;
    if (winner) onWin(winner);
  });

  return (
    <div className="match-node">
      {match.map((player, idx) => (
        <div
          key={idx}
          className="player"
          ref={(el) => {
            if (el) d3.select(el).call(handleDrag);
          }}
        >
          {player}
        </div>
      ))}
    </div>
  );
};

export default MatchNode;
