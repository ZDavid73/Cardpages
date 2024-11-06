import { UserState } from "../../features/auth/userSlice";
import { Text } from "../../theme/styledcomponents";
import './TourProfile.css';

type TourProfileProps = {
    player: UserState;
    ref: any;
}

const TourProfile = ({player}: TourProfileProps) => {
    return (
        <div className="tour-profile">
            <img src={player.picture} alt={player.username} />
            <Text variant="white">{player.username}</Text>
        </div>
    );
}

export default TourProfile;