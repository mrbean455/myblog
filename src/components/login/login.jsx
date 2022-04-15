import React,{useState,useEffect, Fragment} from 'react'
import "./login.less";
import {Form, Input, Button}from 'antd'
import sliderImage1 from '../../assets/images/login/login-sliderimage1.png'
import Threearrows from '../icon/threearrows/threearrows';
import { LeftOutlined,RightOutlined } from '@ant-design/icons';

export default function Login() {
  //获取ref的方法
  const sliderRef = React.useRef(null)
  //state
  const [visitor,setVisitor] =React.useState(false)
  //function
  const submitSuccess=(values)=>{
    console.log(values,'jjj')
  }
  const submitFailed=(error)=>{
    console.log(error,'eoor')
  }
  const changeLogin=()=>{
    console.log(sliderRef,'ref')
    let sliderStyle = sliderRef.current.style;
    if(visitor){
      sliderStyle.transform="translateX(45%)";
      sliderStyle.backgroundImage="linear-gradient(to right, rgb(48, 66, 113) 16%, #2d65b9 75%)";
    }else{
      sliderStyle.transform="translateX(-45%)";
      sliderStyle.backgroundImage="linear-gradient(to left, rgb(48, 66, 113) 16%, #2d65b9 75%)";
    }
    setVisitor(!visitor);

  }
  return (
    <div className='login-bg'>
    <div className='slogen'>
      <span>WELCOME!</span>
    </div>
    <div className='login-slider' ref={sliderRef}>
    <div className='user-login-header user-login-header-name'>
      {visitor?
      <span className='user-login-header-name'>VISI<span className='user-login-header-name-off'>T</span>OR</span>:
      <span className='user-login-header-name'>US<span className='user-login-header-name-off'>E</span>R</span>}
        <span className='user-login-header-welcome'>welcome</span>
        <span className='user-login-header-login'>LOGIN</span>
    </div>
      <div className='changeLogin'>
      {visitor?
      <span style={{color:'#fff'}}>已有账号？<a onClick={()=>{changeLogin()}}>账号登录</a></span>
      :
      <span style={{color:'#fff'}}>没有账号？<a onClick={()=>{changeLogin()}}>换种方式</a></span>}
      </div>
    </div>
    <div className='login-border'>
      <div className='login'>
      <div className='user-login'>
    <div className='user-login-form'>
      <Form
      name="basic"
      onFinish={submitSuccess}
      onFinishFailed={submitFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        wrapperCol={{ span: 20,offset:2 }}
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="username"/>
      </Form.Item>

      <Form.Item
        name="password"
        wrapperCol={{ span: 20,offset:2 }}
        rules={[{ required: true, message: '请数入密码' }]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>
      <Form.Item wrapperCol={{}}>
        <Button htmlType="submit" className='login-button' shape="round" size={'large'}>
          LOGIN
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
      <div className='visitor-login'>
          <div className="visitor-note">
          <span>以游客方式访问</span>
          <br></br>
          <span>请点击下方按钮</span>
          </div>
          <div className='visitor-btn'>
            <Threearrows type="right"></Threearrows>
            <div className='visitor-link'>
          <div className='visitor-icon'>
          </div>
        </div>
            <Threearrows type="left"></Threearrows>
          </div>

      </div>
      </div>
    </div>
    </div>
  )
}
