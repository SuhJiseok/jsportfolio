import React, { useContext, useState } from 'react'
import '../styles/Navmenu.scss';
import { CgClose} from "react-icons/cg";
import NavMenuContext from '../hooks/NavMenuContext';

function Navmenu() {
  const { isNavOpen, setIsNavOpen } = useContext(NavMenuContext);
  const handleClose = () => {
    setIsNavOpen(false);
  };
  return (
    <div className='navmenu' style={{ left: isNavOpen ? '0px' : '-100%' }}>
      <span className='closebtn' onClick={handleClose}>
        <i><CgClose/></i>
        </span>      
      <ul className='navul'>
        <li>INTRO
          <ul>
            <li>COVER</li>
            <li>INTRODUCTION</li>
          </ul>
        </li>
        <li>PROJECT
          <ul>
            <li>SAMSUNG EM</li>
            <li>KOSDAQ GLOBAL</li>
            <li>CJ ONE</li>
            <li>NETFLIX</li>
            <li>AI_CHAT</li>
          </ul>
        </li>
        <li>OTHERS
          <ul>
            <li>EMOTICONS</li>
          </ul>
        </li>
      </ul>
      <ul className='infoul'>
        <li>GITHUB</li>
        <li>E-MAIL</li>
        <li>PHONE</li>
      </ul>

    </div>
  )
}

export default Navmenu