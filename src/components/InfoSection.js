import React from 'react';

import './InfoSection.css';

export default function InfoSection(props) {
  return (
    <section id="what" tabIndex="-1">
      <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
      <ul>
        <li>Pick a random number between 1 to 100 and enter it in the field below.</li>
        <li>Click "Guess!" to submit your guess.</li>
        <li>You're "Hot" if you're close or "Cold" if you're not. Keep guessing until you get it!</li>
      </ul>
    </section>
  );
}
