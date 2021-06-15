import React, { Component } from 'react';

class LotteryTicket extends Component {
  render() {
    const { color, number, actions, index } = this.props;
    return (
      <div
        style={{
          backgroundColor: color,
          padding: 5,
          width: '60%',
          margin: 'auto',
        }}
      >
        <button
          onClick={() => {
            actions.removeTicket(index);
          }}
          style={{ float: 'left' }}
        >
          X
        </button>
        <small>
          Това билетче има числото: <b>{number}</b>
        </small>
      </div>
    );
  }
}

export default LotteryTicket;
