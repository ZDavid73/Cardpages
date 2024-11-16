import { Text, Tittle } from '../../theme/styledcomponents';
import './Timer.css';

interface TimerProps {
    timeLeft: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null;
    status: string;
}

const Timer = ({ timeLeft, status }: TimerProps) => {
    if (!timeLeft) return (
        <section className='tour-timer'>
            {status === 'upcoming' ? <Tittle variant='white'>Starting soon</Tittle> : <Tittle variant='white'>Finished</Tittle>}
        </section>
    );
    return (
        <section className='tour-timer'>
            <Tittle variant='white'>{timeLeft.days > 0 ? timeLeft.days + ' days' : timeLeft.hours + ' hours'}</Tittle>
            <Tittle variant='white'>{timeLeft.days > 0 ? timeLeft.hours : null}:{timeLeft.minutes}:{timeLeft.seconds}</Tittle>
            <Text variant='purple'>Left to start</Text>
        </section>
    );
}

export default Timer;