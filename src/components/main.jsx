import React ,{useState,useEffect}from 'react';
import './main.less';
import routes from "../routes";
//NavLink用于手动切换路由，类似于vue中的router-link
//Routes用于替换老版本的switchs,用于遍历寻找到路由
//Route用于注册渲染路由
import {useRoutes} from 'react-router-dom';
// import { Button,Input } from 'antd';



export default function Main() {
  //useState用于获取自身的State属性，因为函数式变成中没有this,注意要用[]
  // const [isLogin ,setIsLogin] = useState(false);
  // useEffect(()=>{
  //   console.log(isLogin,'islogin')
  //   if(isLogin){
  //     navigate('/mainpage')
  //   }else{
  //     navigate('/login')
  //   }
  // },[isLogin])
  const element = useRoutes(routes)
  return (
    <div className='main'>
      {/* 用于注册路由 */}
          {element}
    </div>
  )
}
