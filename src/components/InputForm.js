import GuessButton from './GuessButton';
import React from 'react';
import './InputForm.css'


export default class InputForm extends React.Component {
  onSubmit(event) {
    event.preventDefaul();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
          <input
            type='number'
            name='userGuess'
            id='userGuess'
            className='text'
            min='1'
            max='100'
            ref={input => (this.input = input)}
            required
          />
          <GuessButton />
      </form>
    );
  }
}












