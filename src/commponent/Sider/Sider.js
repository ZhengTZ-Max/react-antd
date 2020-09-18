/* eslint-disable array-callback-return */
import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd'; // 引入antd侧边栏组件
import Routers from '@/routers' // 路由表
import * as Icon from '@ant-design/icons';

// 侧边栏组件
const { SubMenu } = Menu;
const { Sider } = Layout;

export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pathname:'/'
        }
    }
    componentWillMount() {
      this.setState({
        pathname: window.location.pathname
      })
    }
     // 渲染侧边栏
    fillterSidebar=()=>{
      return Routers.map((item,index)=>{
        if(item.show){
          if(item.child && item.child.length > 0 && this.isDrop(item.child)){
            return (
              <SubMenu key={item.path} icon={ React.createElement(Icon['UserOutlined']) } title={item.name}>
                {
                  item.child.map((ele,i)=>{
                    if(ele.show){
                      return ele.icon ?<Menu.Item key={ele.path} icon={ React.createElement(Icon[ele.icon]) }><Link to={ele.path}>{ele.name}</Link></Menu.Item> : <Menu.Item key={ele.path}><Link to={ele.path}>{ele.name}</Link></Menu.Item>
                    }
                  })
                }
              </SubMenu>
            )
          }else{
            return item.icon ?<Menu.Item key={item.path} icon={ React.createElement(Icon[item.icon]) }><Link to={item.path}>{item.name}</Link></Menu.Item> : <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>
          }
        }
      })
    }
    // 判断当前侧边栏下的子级 是否显示
    isDrop=(children)=>{
      return children.some((ele)=>{
        return ele.show === true
      })
    }
    render(){
        return(
            <Sider width={210} collapsed={this.props.collapsed} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={[this.state.pathname]}
                // selectedKeys={[this.state.pathname]}
                style={{ height: '100%', borderRight: 0 }}
              >
                {this.fillterSidebar()}
              </Menu>
            </Sider>
        )
    }
}