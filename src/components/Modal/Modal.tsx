import { useSelector } from 'react-redux';
import './Modal.css';
import { createPortal } from 'react-dom';
import { AppState } from '../../types/stateType';
import useModal from '../../hooks/useModal';

const Modal = () => {
    const { modal } = useSelector((state: AppState) => state);
    const { renderModalContent } = useModal();

    if (!modal.isOpen) return null;

    return (
        createPortal(
            <div className="modal-overlay">
                { renderModalContent() }
            </div>,
            document.getElementById('root') as HTMLElement
        )
    );
}

export default Modal;