import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">Начало</Menu.Item>
          <Menu.Item key="/about">За нас</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default AppHeader;
