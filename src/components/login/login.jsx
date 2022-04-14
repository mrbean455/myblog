import React,{useState,useEffect} from 'react'
import "./login.less";
import {Form, Input, Button,Layout}from 'antd'
import sliderImage1 from '../../images/login/login-sliderimage1.png'
import  visitorButton from "../../images/login/cyberpunk-vistor-btn.jpg"

export default function Login() {
  //引入antdLayout中的Header,Footer,Content
  // const {Header,Footer,Content} =Layout;
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
      sliderStyle.backgroundImage="linear-gradient(to right, rgb(20, 39, 91) , rgb(36, 93, 177))";
    }else{
      sliderStyle.transform="translateX(-45%)";
      sliderStyle.backgroundImage="linear-gradient(to left, rgb(20, 39, 91) , rgb(36, 93, 177))";
    }
    setVisitor(!visitor);

  }
  return (
    <div className='login-bg'>
    <div className='slogen'>
      <span>W</span>
      <span>E</span>
      <span>L</span>
      <span>C</span>
      <span>O</span>
      <span>M</span>
      <span>E</span>
      <span>!</span>
    </div>
    <div className='login-slider' ref={sliderRef}>
    <div className='user-login-header'>
        <span className='user-login-header-span' >{visitor?'VISITOR':'USER'}</span>
    </div>
      <img src={sliderImage1} >
      </img>
      <div className='changeLogin'>
      {visitor?<span style={{color:'#fff'}}>已有账号？<a onClick={()=>{changeLogin()}}>使用账号登录</a></span>:<span>没有账号？<a onClick={()=>{changeLogin()}}>尝试换种方式</a></span>}
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
          <span>本站提供了游客访问的方法，让您无需账号也可访问本站内容。如需访问请点击下方按钮</span>
          </div>
        <div className='vistor-link'>
          <div className='visitor-icon'>
          </div>
          {/* <img src={ visitorButton} alt="" /> */}
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
