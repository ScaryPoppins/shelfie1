import React from 'react';

import './Header.css';
import icon from './../../assets/shelfie_icon.png';

export default function Header() {
  return (
    <div className='Header'>
      <img src={icon} alt='logo' />
      <h1>Shelfie</h1>
    </div>
  )
}