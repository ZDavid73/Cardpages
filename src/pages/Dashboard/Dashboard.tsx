import Profile from "../../components/Profile/Profile";
import TourThumb from "../../components/TourThumb/TourThumb";
import { Tournament } from "../../types/tournamentTypes";

const fakeTournament: Tournament = {
    id: '1',
    picture: 'https://i.blogs.es/82d7ef/pokemon/450_1000.webp',
    name: 'Tournament 1',
    date: '2021-10-10',
    location: 'Location 1',
    host: 'edd656c4-8aac-4714-83f2-8b3608ca7763',
    status: 'status 1',
    players: ['player 1', 'player 2'],
    rounds: [
        {
            id: 1,
            matches: [
                {
                    id: '1',
                    player1: 'player 1',
                    player2: 'player 2',
                    winner: 'player 1'
                }
            ]
        }
    ]
}

const Dashboard = () => {
    return <>
    <Profile/>
    <TourThumb tournament={fakeTournament}/>
    </>;
}

export default Dashboard;