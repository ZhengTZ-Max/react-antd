/* eslint-disable array-callback-return */
import React,{ Suspense } from 'react';
import {Route} from 'react-router-dom';
import { Layout,Spin } from 'antd';
import Routers from '@/routers'

const { Content } = Layout;

export default class Con extends React.Component{
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
            <Content
                className="site-layout-background"
                style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {Routers.map((item,index)=>{
                return(
                  <Suspense key={index} fallback={<Spin size="large"></Spin>}>
                    <Route exact={item.exact} path={item.path} component={item.component} />
                  </Suspense>
                )
              })}

            </Content>
        )
    }
}