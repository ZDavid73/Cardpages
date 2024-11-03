import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/stateType";
import { openModal, closeModal, setModalDetails } from "../features/modalSlice";
import CreateTour from "../components/CreateTour/CreateTour";
import JoinTour from "../components/JoinTour/JoinTour";
import { Tournament } from "../types/tournamentTypes";
import { Deck } from "../types/deckTypes";
import { Card } from "../types/cardTypes";

const useModal = () => {
    const dispatch = useDispatch();
    const { modal } = useSelector((state: AppState) => state);

    const handleClose = () => {
        dispatch(closeModal());
    }

    const handleOpen = (modal: string, details?: Tournament | Deck | Card) => {
        dispatch(setModalDetails(details));
        dispatch(openModal(modal));
    }

    const renderModalContent = () => {
        switch (modal.modal) {
            case "createTournament":
                return <CreateTour/>
            case 'joinTournament':
                return <JoinTour/>
            default:
                return null;
        }
    }

    return { handleClose, handleOpen, renderModalContent };
}

export default useModal;