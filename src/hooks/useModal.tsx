import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/stateType";
import { openModal, closeModal } from "../features/modalSlice";

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
            case 'login':
                return <div>login</div>;
            case 'register':
                return <div>register</div>;
            case 'forgot-password':
                return <div>forgot-password</div>;
            default:
                return null;
        }
    }

    return { handleClose, handleOpen, renderModalContent };
}

export default useModal;