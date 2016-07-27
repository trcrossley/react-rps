import React from 'react';

export default class Display extends React.Component {
  // Icon Selection
    weaponIcon(weapon) {
        return `src/assets/${weapon}.png`;
    }

    // Game display
    render() {
      return (
        <div className="outcome-box">
          <div className="player">
            <img src={ this.weaponIcon(this.props.player) } />
            <h2>Player</h2>
          </div>
          <div className="outcome-message">
            <h1>{ this.props.outcome }</h1>
            <button type="button" onClick={ this.props.reset }>Reset</button>
          </div>
          <div className="computer">
            <img src={ this.weaponIcon(this.props.computer) } />
            <h2>Computer</h2>
          </div>
        </div>
      );
    }
}
