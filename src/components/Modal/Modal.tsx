import './Modal.css';

type ModalProps = {
    children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    return (
        <div className="modal-overlay">
            {children}
        </div>
    );
}

export default Modal;