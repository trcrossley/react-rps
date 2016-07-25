import React from 'react';
import weapons from './weapons';

export default class WeaponChoice extends React.Component {
  select(i) {
    this.props.onSelect(weapons.choice[i]);
  }

  // Renders buttons for weapon selection
  weaponButton() {
    return weapons.choice.map((e, i) => (
      <li key={ i }>
        <button type="button" onClick={ () => this.select(i) }>
          { e }
        </button>
      </li>
    ));
  }

  render() {
    return (
      <div className="weapon-select">
        <h1>Choose Your Weapon!</h1>
        <ul>
          { this.weaponButton() }
        </ul>
      </div>
    );
  }
}
