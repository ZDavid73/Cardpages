import { useSelector } from 'react-redux';
import './Modal.css';
import { createPortal } from 'react-dom';
import { AppState } from '../../types/stateType';
import useModal from '../../hooks/useModal';

const Modal = () => {
    const modal = useSelector((state: AppState) => state.modal);
    const { renderModalContent, handleClose } = useModal();

    if (!modal.isOpen) return null;

    const handleOverlayClick = () => {
        handleClose();
    };

    return (
        createPortal(
            <div className="modal-overlay" onClick={handleOverlayClick}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {renderModalContent()}
                </div>
            </div>,
            document.getElementById('root') as HTMLElement
        )
    );
}

export default Modal;