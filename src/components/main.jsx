import React ,{useState,useEffect}from 'react';
import './main.less';
import Login from './login/login';
import Mainpage from './mainpage/mainpage';
//NavLink用于手动切换路由，类似于vue中的router-link
//Routes用于替换老版本的switchs,用于遍历寻找到路由
//Route用于渲染路由展示路由，类似于VUE中Router-view
//Navigate用于默认展示，例如匹配'/'时，默认转到那个路由下面
import { NavLink, Routes,Route ,Navigate,useNavigate} from 'react-router-dom';
// import { Button,Input } from 'antd';

export default function Main() {
  //useState用于获取自身的State属性，因为函数式变成中没有this,注意要用[]
  // const [isLogin ,setIsLogin] = useState(false);
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   console.log(isLogin,'islogin')
  //   if(isLogin){
  //     navigate('/mainpage')
  //   }else{
  //     navigate('/login')
  //   }
  // },[isLogin])
  return (
    <div className='main'>
      <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/mainpage' element={<Mainpage/>}></Route>
      <Route path='/' element={<Navigate to="/Login"></Navigate>}></Route>
      </Routes>
    </div>
  )
}
