import { UserState } from '../../features/auth/userSlice';
import { Text } from '../../theme/styledcomponents';
import './PlayerThumb.css';
import { TbCards } from 'react-icons/tb';

type PlayerThumbProps = {
    player: UserState;
    deck: string | undefined;
    isCenter: boolean;
    isWinner?: boolean;
}

const PlayerThumb = ({ player, deck, isCenter, isWinner }: PlayerThumbProps) => {
    return (
        <div className={`player-thumb ${isCenter && !isWinner && 'player-center'} ${isWinner && isCenter && 'player-winner'}`}>
            <img src={player.picture} alt={player.username} />
            <Text variant='white'>{player.username}</Text>
            <Text variant='white' className='player-level'>level {player.level.toString().padStart(2, '0')}</Text>
            <div className='player-thumb-deck'>
                <TbCards color='#a71fd0' />
                <Text variant='purple'>{deck || null}</Text>
            </div>
        </div>
    );
}

export default PlayerThumb;