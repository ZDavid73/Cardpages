import useModal from "../../hooks/useModal";
import './CreateTour.css'
import { Button, Container, Input, Text, Tittle } from "../../theme/styledcomponents"
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useTournament } from "../../hooks/useTournament";

const CreateTour = () => {
    const { handleClose } = useModal()
    const { handleChangeCreateTourForm, handleAddTournament } = useTournament()

    return (
        <Container variant='big'>
            <section className="create-tour-tittle">
            <FaArrowCircleLeft onClick={() => handleClose()} color="white"/>
            <Tittle variant="white">Create a tournament</Tittle>
            </section>
            
            <section className="create-tour-forms">
                <form>
                    <div>
                    <label htmlFor="location"><Text variant="white">City</Text></label>
                    <Input variant="searchwhite" type="text" id="location" name="location" onChange={(e) => handleChangeCreateTourForm(e.target.value, e.target.name)} required/>

                    <label htmlFor="date"><Text variant="white">Date</Text></label>
                    <Input variant="searchwhite" type="date" id="date" name="date" onChange={(e) => handleChangeCreateTourForm(e.target.value, e.target.name)}  required/>

                    <label htmlFor="desc"><Text variant="white">Description</Text></label>
                    <Input variant="searchwhite" type="text" id="desc" name="desc" onChange={(e) => handleChangeCreateTourForm(e.target.value, e.target.name)}  required/>
                    </div>

                    <div>
                    <label htmlFor="address"><Text variant="white">Address</Text></label>
                    <Input variant="searchwhite" type="text" id="address" name="address" onChange={(e) => handleChangeCreateTourForm(e.target.value, e.target.name)}  required/>

                    <label htmlFor="hour"><Text variant="white">Hour</Text></label>
                    <Input variant="searchwhite" type="time" id="hour" name="hour" onChange={(e) => handleChangeCreateTourForm(e.target.value, e.target.name)}  required/>

                    <label htmlFor="max"><Text variant="white">Number of participants</Text></label>
                    <Input variant="searchwhite" type="number" id="max" name="max" onChange={(e) => handleChangeCreateTourForm(e.target.value, e.target.name)}  required/>

                    <Button onClick={() => handleAddTournament()} variant="purple">Create Tournament</Button>
                    </div>
                </form>
            </section>

        </Container>
    )
}

export default CreateTour