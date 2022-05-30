import React,{useState,useEffect, Fragment} from 'react'
import "./login.less";
import {Form, Input, Button}from 'antd'
import Threearrows from '../icon/threearrows/threearrows';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  //获取ref的方法
  const sliderRef = React.useRef(null)
  //用于实现编程式导航的方法
  const navigate = useNavigate();
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
      sliderStyle.backgroundImage="background-image: linear-gradient(to right, #1f1d1d 32%, #211e1d 71%);";
    }else{
      sliderStyle.transform="translateX(-45%)";
      sliderStyle.backgroundImage="background-image: linear-gradient(to left, #1f1d1d 32%, #211e1d 71%);";
    }
    console.log(document.body.clientHeight )
    setVisitor(!visitor);

  }
  const loginByVisitor = ()=>{
    console.log('以访客方式登录');
    //1.发请求
    //2.跳转
    navigate('/mainpage/index')
  }
  return (
    <div className='loginBg'>
    <div className='slogen'>
      <span>WELCOME!</span>
    </div>
    <div className='loginSlider' ref={sliderRef}>
    <div className='userLoginHeader userLoginHeaderName'>
      {visitor?
      <span className='userLoginHeaderName'>VISI<span className='userLoginHeaderNameOff'>T</span>OR</span>:
      <span className='userLoginHeaderName'>U S <span className='userLoginHeaderNameOff'>E</span> R</span>}
        <span className='userLoginHeaderWelcome'>WELCOME</span>
        <span className='userLoginHeaderLogin'>LOGIN</span>
    </div>
      <div className='changeLogin'>
      {visitor?
      <span style={{color:'rgb(206 194 174)'}}>USE ACCOUNT ？<a onClick={()=>{changeLogin()}}>USER LOGIN</a></span>
      :
      <span style={{color:'rgb(206 194 174)'}}>NO ACCOUNT ？<a onClick={()=>{changeLogin()}}>OTHER LOGIN</a></span>}
      </div>
    </div>
      <div className='login'>
      <div className='userLogin'>
    <div className='userLoginForm'>
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
        <Button htmlType="submit" className='loginButton' shape="round" size={'large'}>
          LOGIN
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
      <div className='visitorLogin'>
          <div className="visitorNote">
          <span>VISIT AS A TOURIST</span>
          <br></br>
          <span>CLICK THE BUTTON</span>
          </div>
          <div className='visitorBtn'>
            <Threearrows type="right"></Threearrows>
            <div className='visitorLink' onClick={()=>{loginByVisitor()}}>
          <div className='visitorIcon'>
          </div>
        </div>
            <Threearrows type="left"></Threearrows>
          </div>

      </div>
      </div>
    </div>
  )
}
