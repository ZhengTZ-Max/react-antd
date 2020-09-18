/* eslint-disable array-callback-return */
import React from 'react';
import { Layout, Menu,Dropdown } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import Logo from "@/logo.svg"
import * as Icon from '@ant-design/icons';

const { Header } = Layout;

export default class Head extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
  outLogin=()=>{
    localStorage.removeItem("isLogin")
    window.location.pathname = "/login"
  }
  render(){
        return(
            <Header className="header">
              <div className="logo">
                <img onClick={this.props.home.toggle} className="logoImg" src={Logo} alt=""/>
                <span className="title">铁柱后台</span>
              </div>
              <div className="userInfo">
                {/* <Avatar size="large" style={{backgroundColor: '#87d068'}} icon={ React.createElement(Icon['UserOutlined']) }/> */}
                <Dropdown 
                overlay={<Menu>
                          <Menu.Item icon={<ExportOutlined />} onClick={this.outLogin} style={{color:'#f5222d'}}>退出登录</Menu.Item>
                        </Menu>} placement="bottomCenter">
                  <span className="ant-dropdown-link">{JSON.parse(localStorage.getItem('basic')).username} { React.createElement(Icon['DownOutlined'])}</span>
                </Dropdown>
              </div>
            </Header>
        )
    }
}