import React, { Component } from 'react';

import { getRandomColor } from '../Helper/utils';

class Final extends Component {
  isWinning() {
    const { winningNumber, tickets } = this.props;

    for (const ticket of tickets) {
      if (ticket.number === winningNumber) {
        return true;
      }
    }
    return false;
  }
  renderWinning() {
    return (
      <>
        <h2>Честито!</h2>
        <h3>Ти спечели нова junior позиция в желаната от теб компания</h3>
        <p>
          Твоето печелившо число беше: <b>{this.props.winningNumber}</b>
        </p>
      </>
    );
  }

  renderTryAgain() {
    return (
      <>
        <h2>Опитай пак</h2>
        <p>
          Печелившото число беше: <b>{this.props.winningNumber}</b>
        </p>
      </>
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: getRandomColor(), padding: 15 }}>
        {this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
        <button onClick={this.props.actions.reset}>НОВО ТЕГЛЕНЕ</button>
      </div>
    );
  }
}

export default Final;
