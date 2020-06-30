
import React from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined,LockOutlined,SafetyCertificateOutlined } from '@ant-design/icons';
import './login.css'
  
export default class Login extends React.Component{
    state = {
        collapsed: false,
        basic:{},
        loading:false,
        isLogin:false
    };
    componentWillMount(){
      console.log("登录页渲染")
      
      
    }
    componentDidMount(){
      let basic= (localStorage.getItem('basic') && JSON.parse(localStorage.getItem('basic'))) || false
      if(basic.remember){
        this.refs.form.setFieldsValue(basic)
      }
    }
    loginSubmit=()=>{
      console.log(this.state.isLogin)
      if(this.state.isLogin){
        // 查询缓存中是否计入初次进入路径
        localStorage.getItem("pathname") ? window.location.pathname = localStorage.getItem("pathname") : window.location.pathname ="/"
      }else{
        if(!this.state.basic.username){
          message.warning('请输入您的用户名哦~');
        }else if(!this.state.basic.password){
          message.warning('请输入您的密码哦~');
        }else if(!this.state.basic.code){
          message.warning('请输入您的验证码哦~');
        }
      }
    }
    onFinish = values => {
      console.log('Success:', values);
      this.setState({basic:values,isLogin:true})
      localStorage.setItem("isLogin",true) // 已登录,计入缓存 下次进入不需要登录
      localStorage.setItem("loginTime",new Date().getTime()) // 已登录,计入缓存 下次进入不需要登录
      let info={
        username:this.state.basic.username,
        password:this.state.basic.password,
        remember:this.state.basic.remember
      }
      localStorage.setItem("basic",JSON.stringify(info)) // 已登录,计入缓存 下次进入不需要登录
      this.loginSubmit()
    }
    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
      this.setState({isLogin:false})
      this.setState({basic:errorInfo.values,isLogin:false})
      this.loginSubmit()
    };
    getCode=()=>{
      console.log("获取验证码")
      message.success('验证码可以随便输哦~');
    }
    render(){
        return(
            <div id="login">
                <div className="login-form">
                    <p className="login-form-title">瞎写的后台</p>
                    <Form
                      ref='form'
                      className="login-form-box"
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={this.onFinish}
                      onFinishFailed={this.onFinishFailed}
                    >
                      <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入您的用户名' }]}
                      >
                        <Input placeholder="请输入您的用户名" allowClear addonBefore={<UserOutlined />}/>
                      </Form.Item>

                      <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码' }]}
                      >
                        <Input.Password  placeholder="请输入您的密码" addonBefore={<LockOutlined />} />
                      </Form.Item>
                      <Form.Item
                        name="code"
                        rules={[{ required: true, message: '请输入验证码' }]}
                      >
                        <Input  placeholder="请输入验证码" addonBefore={<SafetyCertificateOutlined />} suffix={<Button onClick={this.getCode} type="link" size="small">获取验证码</Button>} />
                      </Form.Item>
                      <Form.Item className="remember"  name="remember" valuePropName="checked"><Checkbox style={{color:'#fff'}}>记住我</Checkbox></Form.Item>
                      <Form.Item className="loginBtn"><Button type="primary" block loading={this.state.loading} htmlType="submit">登录</Button></Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
