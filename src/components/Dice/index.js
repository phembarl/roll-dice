import React from 'react';
import './Dice.css';

const Dice = props => {
  const { face, rolling } = props;
  return <i className={`Dice fas fa-dice-${face} ${rolling && 'rolling'}`}></i>;
};

export default Dice;
