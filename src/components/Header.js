import React, { useEffect, useRef } from 'react';
import '../styles/Header.scss';
import { AiOutlineMenu } from "react-icons/ai";
import useScrollDirection from '../hooks/useScrollDiredction'; // import the custom hook
import Navmenu from './Navmenu';

function Header({ onNavClick }) {
  const scrollDirection = useScrollDirection();
  const navRef = useRef();

  // useEffect to apply the right class based on scroll direction
  useEffect(() => {
    if (scrollDirection === 'down') {
      navRef.current.style.top = '-80px';  // hides the header when scrolling down
    } else {
      navRef.current.style.top = '0px';  // shows the header when scrolling up
    }
  }, [scrollDirection]);

  return (
    <div className='nav' ref={navRef}>
      <div className='menubtn'  onClick={onNavClick}><AiOutlineMenu /></div>
      <div className='navtitle'><p>Portfolio</p></div>
    </div>
  )
}

export default Header;