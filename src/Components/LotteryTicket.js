import React, { Component } from 'react';
import { Button, Card, Typography } from 'antd';

const { Title } = Typography;

class LotteryTicket extends Component {
  render() {
    const { color, number, actions, index } = this.props;
    return (
      <Card
        style={{
          backgroundColor: color,
          marginBottom: 25,
        }}
        size="small"
        title="Лотариен билет с номер"
      >
        <b>
          <Title level={4}>{number}</Title>
        </b>
        <Button
          onClick={() => {
            actions.removeTicket(index);
          }}
          block
        >
          X
        </Button>
      </Card>
    );
  }
}

export default LotteryTicket;
