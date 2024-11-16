import { UserState } from '../../features/auth/userSlice';
import { Text } from '../../theme/styledcomponents';
import './PlayerThumb.css';

type PlayerThumbProps = {
    player: UserState;
    deck: string | undefined;
}

const PlayerThumb = ({ player, deck }: PlayerThumbProps) => {
    return (
        <div className='player-thumb'>
            <img src={player.picture} alt={player.username} />
            <Text variant='white'>{player.username}</Text>
            <Text variant='purple'>{deck || null}</Text>
        </div>
    );
}

export default PlayerThumb;