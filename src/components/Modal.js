import React, { useEffect } from 'react'
import '../styles/Modal.scss';
import { BsChevronDoubleLeft } from "react-icons/bs";


function Modal({ id, modalClosing, closeModal }) {
  useEffect(() => {
    if (modalClosing) {
      const timer = setTimeout(closeModal, 500); // Adjust to match animation duration
      return () => clearTimeout(timer);
    }
  }, [modalClosing, closeModal]);

  return (
    <div className={`modal ${modalClosing ? 'modal-closing' : ''}`}>
      <button className='w3cbtn' onClick={closeModal}><i><BsChevronDoubleLeft/></i></button>
      <h2>W3C 웹 표준 검사</h2>
      <div className='w3c'>
        <div className='w3chtml'> 
        <img src={require(`../images/${id}html.png`)} alt=""></img>
        </div>
        <div className='w3ccss'>
        <img src={require(`../images/${id}css.png`)} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Modal;