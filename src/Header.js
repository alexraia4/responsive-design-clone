import React, { useState } from 'react';
import './header.css'

export default function Header() {

  const [display, setDisplay] = useState(true);

  let changeState = () => {
    setDisplay(!display)
    if (display) {
      document.querySelector(".Header_responsiveMenu").style.display = 'inline'
    }
    else {
      document.querySelector(".Header_responsiveMenu").style.display = 'none'
    }
  }



  return (
    <div className="Header">
      <div className='Header_default'>
        <p className="Header_title">Start Bootstrap</p>
        <nav>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </nav>
        <div className='Header_responsiveMenuButton'>
          <p onClick = {changeState}>Menu</p>
        </div>
      </div>
      <div className="Header_responsiveMenu">
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
}