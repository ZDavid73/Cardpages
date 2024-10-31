import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/stateType";
import { openModal, closeModal } from "../features/modalSlice";
import CreateTour from "../components/CreateTour/CreateTour";
import AddDeck from "../components/AddDeck/AddDeck";

const useModal = () => {
    const dispatch = useDispatch();
    const { modal } = useSelector((state: AppState) => state);

    const handleClose = () => {
        dispatch(closeModal());
    }

    const handleOpen = (modal: string) => {
        dispatch(openModal(modal));
    }

    const renderModalContent = () => {
        switch (modal.modal) {
            case "createTournament":
                return <CreateTour/>

                case "createDeck":
                return <AddDeck />;

                case "createCard":
                return <AddDeck />;

                default:
                return null;
        }
    }

    return { handleClose, handleOpen, renderModalContent };
}

export default useModal;