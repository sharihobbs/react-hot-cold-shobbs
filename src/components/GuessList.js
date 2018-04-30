import React from 'react';
import './GuessList.css';

export default function GuessLIst(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id='guessList' className='guessBox clearfix'>
      {guesses}
    </ul>
  );
}
