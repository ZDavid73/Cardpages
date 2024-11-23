import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/stateType";
import { openModal, closeModal, setModalDetails } from "../features/modalSlice";
import CreateTour from "../components/CreateTour/CreateTour";
import AddDeck from "../components/AddDeck/AddDeck";
import JoinTour from "../components/JoinTour/JoinTour";
import { Tournament } from "../types/tournamentTypes";
import { Deck } from "../types/deckTypes";
import { SellingCard } from "../types/cardTypes";
import SellPage from "../pages/SellPage/SellPage";
import BuyCard from "../components/BuyCard/BuyCard";

const useModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: AppState) => state.modal);

    const handleClose = () => {
        dispatch(closeModal());
    }

    const handleOpen = (modal: string, details?: Tournament | Deck | SellingCard) => {
        dispatch(setModalDetails(details));
        dispatch(openModal(modal));
    }

    const renderModalContent = () => {
        switch (modal.modal) {
            case "createTournament":
                return <CreateTour/>

                case "createDeck":
                return <AddDeck />;

                default:
            case 'joinTournament':
                return <JoinTour/>

            case 'createCard':
                return <SellPage/>

            case 'buyCard':
                return <BuyCard/>
        }
    }

    return { handleClose, handleOpen, renderModalContent };
}

export default useModal;