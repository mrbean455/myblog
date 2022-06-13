import React from 'react';
import { Navigate } from 'react-router-dom';
import store from '../../store/store';
import { message } from 'antd';

export default function Auth({children}) {
  const isLogin = store.getState().token?store.getState().token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):null;
  const user  =store.getState().userInfo;
  console.log(isLogin);
  if(isLogin==null){
    message.error("尚未登录，请登录")
    return  (
      <Navigate to="/login" replace={true}></Navigate>
    )
  }else{
    return children;
  }

}
