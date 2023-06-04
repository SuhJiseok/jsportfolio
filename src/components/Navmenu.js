import React, { useContext, useState } from 'react'
import '../styles/Navmenu.scss';
import { CgClose} from "react-icons/cg";
import NavMenuContext from '../hooks/NavMenuContext';

function Navmenu({ refs }) {
  const { isNavOpen, setIsNavOpen } = useContext(NavMenuContext);
  const [email, setEmail] = useState("E-MAIL");
  const handleClose = () => {
    setIsNavOpen(false);
  };

  const handleScroll = (ref) =>{
    ref.current.scrollIntoView({ behavior: 'smooth' });
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
            <li onClick={() => handleScroll(refs.profileRef)}>INTRODUCTION</li>
          </ul>
        </li>
        <li>PROJECT
          <ul>
            <li onClick={() => handleScroll(refs.samRef)}>SAMSUNG EM</li>
            <li onClick={() => handleScroll(refs.kosdaqRef)}>KOSDAQ GLOBAL</li>
            <li onClick={() => handleScroll(refs.cjRef)}>CJ ONE</li>
            <li onClick={() => handleScroll(refs.netflixRef)}>NETFLIX</li>
            <li onClick={() => handleScroll(refs.aiRef)}>AI_CHAT</li>
          </ul>
        </li>
        <li>OTHERS
          <ul>
            <li onClick={() => handleScroll(refs.contactRef)}>Contact</li>
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