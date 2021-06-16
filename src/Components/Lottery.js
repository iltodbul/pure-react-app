import React, { Component } from 'react';
import { Button, Typography, Divider } from 'antd';

import LotteryTicket from './LotteryTicket';

const {Title} = Typography;

class Lottery extends Component {
  renderButton() {
    const { remainingTickets, actions } = this.props;

    if (remainingTickets > 0) {
      return (
        <Button type="primary" block onClick={actions.registerTicket}>
          КУПИ БИЛЕТ
        </Button>
      );
    }
    return (
      <Button type="primary" block onClick={actions.finish}>
        ПРОВЕРИ ЗА ПЕЧАЛБА
      </Button>
    );
  }

  renderTickets() {
    const { tickets, actions } = this.props;
    const lotteryTicketActions = { removeTicket: actions.removeTicket };
    const lotteryTickets = tickets.map((ticket, index) => {
      return (
        <LotteryTicket
          color={ticket.color}
          number={ticket.number}
          index={index}
          key={index}
          actions={lotteryTicketActions}
        />
      );
    });
    return lotteryTickets;
  }

  render() {
    return (
      <>
        <Title>Лотария</Title>
        {this.renderButton()}
        <br />
        <Title level={4}>Оставащи: {this.props.remainingTickets}</Title>
        <br />
        <Divider>вашите билетчета</Divider>
        {this.renderTickets()}
      </>
    );
  }
}

export default Lottery;
