import React, { useState } from 'react'
import '../styles/Sub1.scss';
import Modal from './Modal';

function Sub1(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalClosing, setModalClosing] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  
  const startCloseModal = () => {
    setModalClosing(true);
    setTimeout(closeModal, 500);  // <--- ADD THIS
  };

  const closeModal = () => {
    setModalClosing(false);
    setModalOpen(false);
  };

  return (
    <>
    <div className='sub1'>
      <h2>{props.h2}</h2>
      <h3>{props.h3}</h3>
      <div className='sublogo'>
      <span>HTML</span><span>CSS</span><span>Javascript</span>
      </div>
      <p>{props.p}</p>
      <div className='subbtn'>
      <span onClick={openModal}>웹 접근성 확인하기</span>
<<<<<<< HEAD
      <span><a href={props.githubUrl} target='_blank' rel='noopener noreferrer'>Github Page</a></span>
      <span><a href={props.Page} target='_blank' rel='noopener noreferrer'>Page</a></span>
=======
      <span><a href={props.githubUrl}>Github Page</a></span>
>>>>>>> 606bb30c3abc28276d2841cea1730fb1868fcfbd
      </div>
    </div>
    {modalOpen && <Modal id={props.id} modalClosing={modalClosing} closeModal={startCloseModal} />}
    </>
  )
}

export default Sub1