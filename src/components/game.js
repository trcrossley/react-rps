import React from 'react';
import weapons from './weapons';

// Computer weapon selection
export default class Game extends React.Component {
  static computerWeapon() {
    return weapons.choice[Math.floor(Math.random() * 5)];
  }

// RPSLS Game
  static play(player, computer) {
    var gameRules = {
        Rock: {
            Lizard: 'Rock crushes Lizard!',
            Scissors: 'Rock smashes Scissors!'
        },
        Paper: {
            Spock: 'Paper disproves Spock!',
            Rock: 'Paper covers Rock!'
        },
        Scissors: {
            Lizard: 'Scissors stabs Lizard!',
            Paper: 'Scissors cuts Paper!'
        },
        Lizard: {
            Spock: 'Lizard poisons Spock!',
            Paper: 'Lizard eats Paper!'
        },
        Spock: {
            Scissors: 'Spock destroys Scissors!',
            Rock: 'Spock vaporizes Rock!'
        }
    };
    if (player === computer) {
      return 'Draw!';
    }  else {
      return (computer in gameRules[player]
        ? (gameRules[player][computer] + ' You Win!')
        : (gameRules[computer][player] + ' You Lose!')
      );
    }
  }
}
