import { UserState } from "../../features/auth/userSlice";
import { Tittle } from "../../theme/styledcomponents";
import './TournamentWinner.css';
import { FaCrown } from "react-icons/fa";

type TournamentWinnerProps = {
    winner: UserState | undefined;
}

const TournamentWinner = ({ winner }: TournamentWinnerProps) => {

    if (!winner) {
        return null;
    }

    return (
        <div className="tournament-winner">
            <Tittle variant="white">Winner</Tittle>
            <FaCrown color="orange" size={24}/>
            <img src={winner.picture} alt="" />
            <Tittle variant="purple">{winner.username}</Tittle>
        </div>
    );
}

export default TournamentWinner;