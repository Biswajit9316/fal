import React from 'react';
import '../css/Modal.css';

const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
