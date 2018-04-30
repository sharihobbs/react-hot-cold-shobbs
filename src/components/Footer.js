import React from 'react';
import './Footer.css';

export default function Header(props) {
  return (
   <footer>
      <button type='button' className='button' onClick={() => props.onRestartGame()}>
      <span>Play Again!</span>
      </button>
   </footer>
  )
}
