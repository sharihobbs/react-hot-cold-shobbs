import React from 'react';

import GuessList from './GuessList';
import GuessCount from './GuessCount';

export default function StatusSection(props) {
  const { guesses } = props;
  const guessCount = guesses.length;

  return (
    <section>
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
    </section>
  );
}
