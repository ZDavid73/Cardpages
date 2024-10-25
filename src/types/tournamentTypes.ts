export interface Match {
    id: string;
    player1: string;
    player2: string;
    winner: string;
};

export interface Round {
    id: number;
    matches: Match[]; 
};

export interface Tournament {
    id: string;
    picture: string;
    name: string;
    date: string;
    location: string;
    host: string;
    status: string;
    players: string[];
    rounds: Round[];
}

export interface MatchPlayers {
    player1: string;
    player2: string;
}

export interface NewTournamentData {
    name: string;
    date: string;
    location: string;
    host: string;
  };