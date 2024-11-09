import { Container, Text, Tittle } from '../../theme/styledcomponents';
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
        <Container variant='small'>
            <Text variant='purple'>The tournament will start in...</Text>
            <Tittle variant='white'>{timeLeft.days > 0 ? timeLeft.days + ' days' : timeLeft.hours + ' hours'}</Tittle>
            <Tittle variant='white'>{timeLeft.days > 0 ? timeLeft.hours : null}:{timeLeft.minutes}:{timeLeft.seconds}</Tittle>
        </Container>
    );
}

export default Timer;