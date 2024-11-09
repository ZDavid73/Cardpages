import { Text, Tittle } from '../../theme/styledcomponents';
import './Timer.css';

interface TimerProps {
    timeLeft: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null;
}

const Timer = ({ timeLeft }: TimerProps) => {
    if (!timeLeft) {
        return
    }
    return (
        <section className='tour-timer'>
            <Tittle variant='white'>{timeLeft.days > 0 ? timeLeft.days + ' days' : timeLeft.hours + ' hours'}</Tittle>
            <Tittle variant='white'>{timeLeft.days > 0 ? timeLeft.hours : null}:{timeLeft.minutes}:{timeLeft.seconds}</Tittle>
            <Text variant='purple'>Left to start</Text>
        </section>
    );
}

export default Timer;