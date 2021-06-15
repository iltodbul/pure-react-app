import React, { Component } from 'react';
import './App.css';

import Lottery from './Components/Lottery';
import { getRandomNumber } from './Helper/utils';
import { registerTicket } from './Helper/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remainingTickets: 5,
      finished: false,
    };

    this.registerTicket = registerTicket.bind(this);
  }

  renderApp() {
    const actions = {};
    const { tickets, remainingTickets } = this.state;
    actions.registerTicket = this.registerTicket;

    return (
      <Lottery
        remainingTickets={remainingTickets}
        actions={actions}
        tickets={tickets}
      />
    );
  }

  render() {
    return <div className="App">{this.renderApp()}</div>;
  }
}

export default App;
