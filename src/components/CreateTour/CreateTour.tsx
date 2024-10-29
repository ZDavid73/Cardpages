import useModal from "../../hooks/useModal";
import './CreateTour.css'
import { Button, Container, Input, Text, Tittle } from "../../theme/styledcomponents"
import { FaArrowLeft } from 'react-icons/fa';

const CreateTour = () => {
    const { handleClose } = useModal()

    return (
        <Container variant='big'>
            <Button variant="white" onClick={() => handleClose()}><FaArrowLeft/></Button>
            <Tittle variant="white">Create a tournament</Tittle>
            <div className="tour-forms">
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
                    </div>
                </form>
            </div>

        </Container>
    )
}

export default CreateTour