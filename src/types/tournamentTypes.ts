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

export interface Player {
    id: string;
    deck: string;
}

export interface Tournament {
    id: string;
    picture: string;
    date: string;
    location: string;
    desc: string;
    address: string;
    hour: string;
    max: number;
    host: string;
    status: string;
    players: Player[];
    rounds: Round[];
    winner: string;
}

export interface MatchPlayers {
    player1: string;
    player2: string;
}

export interface NewTournamentData {
    date: string;
    location: string;
    desc: string;
    address: string;
    hour: string;
    max: number;
};