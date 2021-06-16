import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class AppFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        На Божков Лотарията ©2021 Created with React - Ant Design - React Router
      </Footer>
    );
  }
}

export default AppFooter;
