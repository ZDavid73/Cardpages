import useModal from "../../hooks/useModal";
import './CreateTour.css'
import { Button, Container, Input, Text, Tittle } from "../../theme/styledcomponents"
import { FaArrowCircleLeft } from 'react-icons/fa';

const CreateTour = () => {
    const { handleClose } = useModal()

    return (
        <Container variant='big'>
            <section className="create-tour-tittle">
            <FaArrowCircleLeft onClick={() => handleClose()} color="white"/>
            <Tittle variant="white">Create a tournament</Tittle>
            </section>
            
            <section className="create-tour-forms">
                <form>
                    <div>
                    <label htmlFor="city"><Text variant="white">City</Text></label>
                    <Input variant="searchwhite" type="text" id="city" name="city" required/>

                    <label htmlFor="date"><Text variant="white">Date</Text></label>
                    <Input variant="searchwhite" type="date" id="date" name="date" required/>

                    <label htmlFor="desc"><Text variant="white">Description</Text></label>
                    <Input variant="searchwhite" type="text" id="desc" name="desc" required/>
                    </div>

                    <div>
                    <label htmlFor="address"><Text variant="white">Address</Text></label>
                    <Input variant="searchwhite" type="text" id="address" name="address" required/>

                    <label htmlFor="hour"><Text variant="white">Hour</Text></label>
                    <Input variant="searchwhite" type="time" id="hour" name="hour" required/>

                    <label htmlFor="max"><Text variant="white">Number of participants</Text></label>
                    <Input variant="searchwhite" type="number" id="max" name="max" required/>

                    <Button variant="purple">Create Tournament</Button>
                    </div>
                </form>
            </section>

        </Container>
    )
}

export default CreateTour