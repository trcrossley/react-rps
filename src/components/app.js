import React from 'react';
import Game from './game';
import WeaponChoice from './weapon-choice';
import Display from './display';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPlayerWeapon = this.onPlayerWeapon.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      playerWeapon: null,
      computerWeapon: null,
      winner: null
    };
  }

  reset() {
    this.setState({
      playerWeapon: null
    });
  }

  onPlayerWeapon(playerWeapon) {
    const computerWeapon = Game.computerWeapon();
    const winner = Game.whoWon(playerWeapon, computerWeapon);
    this.setState({
      playerWeapon: playerWeapon,
      computerWeapon: computerWeapon,
      winner: winner
    });
  }

  renderWeapon() {
    if (this.state.playerWeapon) {
      return null;
    }
    return (<WeaponChoice onSelect = { this.onPlayerWeapon } />);
  }

  renderDisplay() {
    if (!this.state.playerWeapon) {
      return null;
    }
    return (
      <Display player = { this.state.playerWeapon }
               computer = { this.state.computerWeapon }
               winner = { this.state.winner }
               reset = { this.reset } />
    );
  }

  render() {
    return (
      <div>
        { this.renderWeapon() }
        { this.renderDisplay() }
      </div>
    );
  }
}
