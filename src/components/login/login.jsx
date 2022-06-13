import React,{useState,useEffect, Fragment} from 'react'
import "./login.less";
import {Form, Input, Button,message}from 'antd'
import Threearrows from '../icon/threearrows/threearrows';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
//全局引入axios的二次封装
import $request from "../../utils/request"


  //当决定要在组件中使用react-redux时，默认暴露就要发生变化，是默认暴露connect
  const stateToProps = (state)=>{
    return{
      token:state.token,
      userInfo:state.userInfo
    }
  }
  const dispatchToProps = (dispatch)=>{
    return {
      setToken(v){
        let action ={type:'setToken',value:v}
        //派发
        dispatch(action);
      },
      setUserInfo(v){
        let action={type:'setUserInfo',value:v}
        dispatch(action);
      }
    }
  }
const  Login=(props) =>{
  
  let {setToken,setUserInfo} = props;
  //获取ref的方法
  const sliderRef = React.useRef(null)
  //用于实现编程式导航的方法
  const navigate = useNavigate();
  //state
  const [visitor,setVisitor] =React.useState(false)
  //function

  const submitSuccess=(values)=>{
    //发送登录请求前先清空Session中的token
    sessionStorage.removeItem("token");
    $request(`/login/loginbyuser?username=${values.username}&password=${values.password}`).then(res=>{
      if(res.state){
        console.log(res,'res');
          //存到redux
          setToken(res.token);
          //存到sessionStorage中
          sessionStorage.setItem("token",res.token)
          setUserInfo(res.user);
          navigate('/mainpage/index');
      }else{
        message.error(res.msg);
      }
    })
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
    $request(`/login/loginbyvisitor`).then(res=>{
                //存到redux
                setToken(res.token);
                //存到sessionStorage中
                sessionStorage.setItem("token",res.token)
                setUserInfo(res.user);
                navigate('/mainpage/index');

    })
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
        <Button htmlType="submit" className='loginButton' shape="round" size={'large'} >
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

export default connect(stateToProps,dispatchToProps)(Login)