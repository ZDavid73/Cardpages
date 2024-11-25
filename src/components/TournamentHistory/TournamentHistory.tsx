import React from 'react';

interface Match {
  round_index: number;
  match_index: number;
  players: string[];
  winner: string;
}

interface TournamentHistoryProps {
  matches: Match[];
}

const TournamentHistory: React.FC<TournamentHistoryProps> = ({ matches }) => (
  <div>
    <h2>Historial del Torneo</h2>
    {matches.map((match) => (
      <div key={`${match.round_index}-${match.match_index}`} className="match-history">
        <p>Ronda {match.round_index + 1}, Match {match.match_index + 1}</p>
        <p>
          {match.players.join(' vs ')} — <strong>Ganador: {match.winner}</strong>
        </p>
      </div>
    ))}
  </div>
);

export default TournamentHistory;
