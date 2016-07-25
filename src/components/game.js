import React from 'react';
import weapons from './weapons';

// Computer weapon selection
export default class Game extends React.Component {
  static computerWeapon() {
    return weapons.choice[Math.floor(Math.random() * 3)];
  }

// RPS Game logic
  static whoWon(player, computer) {
    let outcome = '';
    if (player === computer) {
      outcome = 'Draw!';
    } else {
      switch (player) {
      case 'Rock':
        outcome = (computer === 'Scissors') ? 'Rock beats Scissors - You Win!' : 'Paper beats Rock - You Lose!';
        break;
      case 'Paper':
        outcome = (computer === 'Rock') ? 'Paper beats Rock - You Win!' : 'Scissors beats Paper - You Lose!';
        break;
      case 'Scissors':
        outcome = (computer === 'Paper') ? 'Scissors beats Paper - You Win!' : 'Rock beats Scissors - You Lose!';
        break;
      }
    }
    return outcome;
  }
}
