import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppHeader from './Components/AppHeader';
import About from './Components/About';
import Lottery from './Components/Lottery';
import Final from './Components/Final';
import AppFooter from './Components/AppFooter';

import { getRandomNumber } from './Helper/utils';
import { registerTicket, removeTicket, finish, reset } from './Helper/actions';

import './App.css';
import 'antd/dist/antd.css';

const { Content } = Layout;

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
    return (
      <BrowserRouter>
        <Layout className="layout">
          <AppHeader />
          <Content style={{ padding: '0 50px', textAlign: 'center' }}>
            <div
              style={{
                minHeight: 280,
                padding: 24,
                background: '#fff',
              }}
            >
              <Switch>
                <Route path="/" exact component={() => this.renderApp()} />
                <Route path="/about" component={About} />
                <Redirect from="*" to="/about" />
              </Switch>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
