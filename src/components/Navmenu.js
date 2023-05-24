import React, { useContext, useState } from 'react'
import '../styles/Navmenu.scss';
import { CgClose} from "react-icons/cg";
import NavMenuContext from '../hooks/NavMenuContext';

function Navmenu() {
  const { isNavOpen, setIsNavOpen } = useContext(NavMenuContext);
  const [email, setEmail] = useState("E-MAIL");
  const handleClose = () => {
    setIsNavOpen(false);
  };

  const handleScroll = (scrollY) =>{
    window.scrollTo({ top: scrollY, behavior: 'smooth'});
    handleClose();
  };
  const handleMouseEnter = () => {
    setEmail("nastudiolab@gmail.com");
  };

  const handleMouseLeave = () => {
    setEmail("E-MAIL");
  };

  return (
    <div className='navmenu' style={{ left: isNavOpen ? '0px' : '-100%' }}>
      <span className='closebtn' onClick={handleClose}>
        <i><CgClose/></i>
        </span>      
      <ul className='navul'>
        <li>INTRO
          <ul>
            <li onClick={() => handleScroll(0)}>COVER</li>
            <li onClick={() => handleScroll(1300)}>INTRODUCTION</li>
          </ul>
        </li>
        <li>PROJECT
          <ul>
            <li onClick={() => handleScroll(7900)}>SAMSUNG EM</li>
            <li onClick={() => handleScroll(8900)}>KOSDAQ GLOBAL</li>
            <li onClick={() => handleScroll(9900)}>CJ ONE</li>
            <li onClick={() => handleScroll(12000)}>NETFLIX</li>
            <li onClick={() => handleScroll(15800)}>AI_CHAT</li>
          </ul>
        </li>
        <li>OTHERS
          <ul>
            <li onClick={() => handleScroll(18800)}>Contact</li>
          </ul>
        </li>
      </ul>
      <ul className='infoul'>
        <li ><a href="https://github.com/SuhJiseok?tab=repositories">GITHUB</a></li>
        <li 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          {email}
        </li>
      </ul>

    </div>
  )
}

export default Navmenu