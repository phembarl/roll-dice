import React, { Component } from 'react';
import Dice from '../Dice';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  constructor(props) {
    super(props);
    this.state = {
      dice1: 'one',
      dice2: 'one',
      rolling: false,
    };
  }

  roll = () => {
    const { sides } = this.props;
    const rand1 = sides[Math.floor(Math.random() * sides.length)];
    const rand2 = sides[Math.floor(Math.random() * sides.length)];
    this.setState({ dice1: rand1, dice2: rand2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    const { dice1, dice2 } = this.state;
    return (
      <div className="RollDice">
        <h2>Roll Dice!</h2>
        <div className={this.state.rolling ? 'RollDice-rolling' : ''}>
          <Dice face={dice1} rolling={this.state.rolling} />
          <Dice face={dice2} rolling={this.state.rolling} />
        </div>
        <button
          className="RollDice-btn"
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
