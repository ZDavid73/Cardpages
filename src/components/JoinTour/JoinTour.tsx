import { useSelector } from 'react-redux';
import { Button, Container, Text, Tittle } from '../../theme/styledcomponents'
import { AppState } from '../../types/stateType';
import './JoinTour.css'
import { FaArrowCircleLeft } from 'react-icons/fa';
import useModal from '../../hooks/useModal';
import { isTournament } from '../../utils/typeGuards';
import { useTournament } from '../../hooks/useTournament';

const JoinTour = () => {
    const { modalDetails } = useSelector((state: AppState) => state.modal);
    const userId = useSelector((state: AppState) => state.user.id);
    const userDecks = useSelector((state: AppState) => state.decks.decks.filter(deck => deck.creator === userId))

    const { handleClose } = useModal()
    const { handleAddPlayer, handleChangeAddPlayerToTournament, handleRemovePlayer } = useTournament()

    if (isTournament(modalDetails)) {
        return (
            <Container variant='big'>
                <section className="create-tour-tittle">
                <FaArrowCircleLeft onClick={() => handleClose()} color="white"/>
                <Tittle variant="white">Join tournament</Tittle>
                </section>
    
                <section className='join-tour'>
                    <section className='join-tour-info'>
                        <Text variant='purple'> {modalDetails.location}</Text>
                        <Text variant='white'>{modalDetails.address}</Text>
                        <Text variant='white'>{modalDetails.date}</Text>
                        <Text variant='white'>{modalDetails.hour}</Text>

                        <br/>

                        <Text variant='white'>{modalDetails.desc}</Text>

                        <br/>

                        <Text variant='purple'>{modalDetails.players.length}/{modalDetails.max} participants</Text>
                    </section>

                    <section className='join-tour-form'>
                        { modalDetails.players.some(player => player.id === userId) ?
                            <>
                            <Text variant='white'>You are already in this tournament!</Text>
                            <Button variant='purple' onClick={() => handleRemovePlayer(modalDetails.id)}>
                                Abandon tournament
                            </Button>
                            </>
                            :
                            <form>
                            <select name="deck" id="seldeck" onChange={(e) => handleChangeAddPlayerToTournament(e.target.value, e.target.name)}>
                                <option value="">Select a deck</option>
                                { userDecks.map(d => (
                                    <option key={d.id} value={d.name}>{d.name}</option>
                                )) }
                            </select>
                            <Button variant='purple' type="submit" onClick={(e) => handleAddPlayer(modalDetails.id, e)}>Join me in!</Button>
                            </form>
                        }
                    </section>
                </section>
            </Container>
        )
    }

    
}

export default JoinTour