import {useEffect} from  'react';

import ClearIcon from '@material-ui/icons/Clear';

import './Modal.css';

const Modal = props => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  const closeModal = () => {
    props.toggleModal()
  }

  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-wrapper">
        <div className="modal-header"><ClearIcon onClick={closeModal}/></div>
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;