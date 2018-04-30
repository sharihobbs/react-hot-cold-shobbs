import React from 'react';
import './GuessButton.css';

export default class GuessButton extends React.Component {
  render() {
    return (
      <button
        type='submit'
        name='submit'
        id='guessButton'
        className='button'
      >
        <span>Guess!</span>
      </button>
    )
  }
}

