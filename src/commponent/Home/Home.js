/* eslint-disable array-callback-return */
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Layout, Breadcrumb,Spin } from 'antd';
import './Home.css'

import Head from '../Header/Header'
import Siders from '../Sider/Sider'
import Content from '../Content/Content'

export default class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      collapsed:false
    }
  }
  // 切换状态 收缩侧边栏
  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render(){
        return(
        <Spin spinning={false}>
          <Router>
            <Layout id="body" >

              <Head home={this} />
              
              <Layout>

                <Siders collapsed={this.state.collapsed} />

                <Layout style={{ padding: '0 12px 12px' }}>

                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                  </Breadcrumb>

                  <Content/>

                </Layout>
              </Layout>
            </Layout>
          </Router>
        </Spin>
        )
    }
}