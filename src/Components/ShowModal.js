import React from 'react';
import "./Css/Modal.css";

const ShowModal = ({ message, setShowModal }) => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-content">
          
          <div className='modal-head'>
            <h1>Error</h1>
          </div>
          
          <div className='modal-message'>
              <p>{message}</p>
          </div>
          
          <button className = "close-button" onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;