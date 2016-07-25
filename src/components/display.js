import React from 'react';

export default class Display extends React.Component {
    weaponIcon(weapon) {
        return `src/assets/${weapon}.png`;
    }

    // Displays game outcome
    render() {
      return (
        <div className="outcome-box">
          <div className="player">
            <img src={ this.weaponIcon(this.props.player) } />
            Player
          </div>
          <div className="outcome-message">
            <h1>{ this.props.winner }</h1>
            <button type="button" onClick={ this.props.reset }>Reset</button>
          </div>
          <div className="computer">
            <img src={ this.weaponIcon(this.props.computer) } />
            Computer
          </div>
        </div>
      );
    }
}
