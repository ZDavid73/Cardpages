import React from 'react';
//import * as d3 from 'd3';

interface MatchNodeProps {
  match: string[];
  onWin: (winner: string) => void;
}

const MatchNode: React.FC<MatchNodeProps> = ({ match, onWin }) => {
  const handleDrag = d3.drag<SVGElement, unknown>()
    .on('start', (event) => {
      d3.select(event.sourceEvent.target).style('opacity', 0.5);
    })
    .on('end', (event, d) => {
      const winner = d3.select(event.sourceEvent.target).text();
      d3.select(event.sourceEvent.target).style('opacity', 1);
      onWin(winner);
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
