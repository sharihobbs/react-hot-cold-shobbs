import React from 'react';

import Feedback from './Feedback';
import InputForm from './InputForm';

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section>
      <Feedback feedback={feedback} guessCount={guessCount} />
      <InputForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}
