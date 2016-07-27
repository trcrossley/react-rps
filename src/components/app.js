import React from 'react';
import Game from './game';
import WeaponChoice from './weapon-choice';
import Display from './display';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onWeaponSelect = this.onWeaponSelect.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      playerWeapon: null,
      computerWeapon: null,
      outcome: null,
    };
  }

  onWeaponSelect(playerWeapon) {
    const computerWeapon = Game.computerWeapon();
    const outcome = Game.play(playerWeapon, computerWeapon);
    this.setState({
      playerWeapon: playerWeapon,
      computerWeapon: computerWeapon,
      outcome: outcome,
    });
  }

  reset() {
    this.setState({
      playerWeapon: null
    });
  }

  renderWeapon() {
    if (this.state.playerWeapon) {
      return null;
    }
    return (<WeaponChoice onSelect = { this.onWeaponSelect } />);
  }

  renderDisplay() {
    if (!this.state.playerWeapon) {
      return null;
    }
    return (
      <Display player = { this.state.playerWeapon }
               computer = { this.state.computerWeapon }
               outcome = { this.state.outcome }
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
