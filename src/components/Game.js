import React from 'react';

import Footer from './Footer';
import InputForm from './InputForm';
import StatusSection from './StatusSection';
import InfoSection from './InfoSection';
import Feedback from './Feedback';
import GuessSection from './GuessSection';
import './Game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Guess a Number!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Guess a Number!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'Brrrr... so cold!';
    } else if (difference >= 30) {
      feedback = 'Getting warmer.';
    } else if (difference >= 10) {
      feedback = 'Heating up!';
    } else if (difference >= 1) {
      feedback = 'Hotttt, but not quite...';
    } else {
      feedback = 'Excellent, you got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

  }

  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <main role = 'main'>
          <h1>Hot or Cold</h1>
          <InfoSection />
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} />
        </main>
        <Footer
          onRestartGame={() => this.restartGame()}
        />
      </div>
    );
  }
}
