import React, { Component } from 'react';
import { Button, Card } from 'antd';

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
      <Card
        style={{ backgroundColor: getRandomColor() }}
        title={this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
      >
        <Button size="large" block onClick={this.props.actions.reset}>
          НОВО ТЕГЛЕНЕ
        </Button>
      </Card>
    );
  }
}

export default Final;
