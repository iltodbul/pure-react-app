import React, { Component } from 'react';
import './App.css';

import Lottery from './Components/Lottery';
import Final from './Components/Final';
import { getRandomNumber } from './Helper/utils';
import { registerTicket, removeTicket, finish, reset } from './Helper/actions';

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
    this.removeTicket = removeTicket.bind(this);
    this.finish = finish.bind(this);
    this.reset = reset.bind(this);
  }

  renderApp() {
    const actions = {};
    const { tickets, remainingTickets, finished, winningNumber } = this.state;
    
    if (finished) {
      actions.reset = this.reset; 
      return (
        <Final
          tickets={tickets}
          winningNumber={winningNumber}
          actions={actions}
        />
      );
    }

    actions.registerTicket = this.registerTicket;
    actions.removeTicket = this.removeTicket;
    actions.finish = this.finish;
    actions.reset = this.reset;

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
