import React from 'react';
import './GuessCount.css';

export default function GuessCount(props) {
  const isPlural = props.guessCount !== 1;
  const guessNoun = isPlural ? 'guesses' : 'guess';

  return (
    <h2 id='guessCount'>
      You have made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}
