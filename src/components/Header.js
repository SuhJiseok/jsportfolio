import React from 'react'
import '../styles/Header.scss';
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  return (
    <div className='nav'>

      <div className='menubtn'><i><AiOutlineMenu/></i></div>
      <div className='navtitle'><p>Portfolio</p></div>

    </div>
  )
}

export default Header