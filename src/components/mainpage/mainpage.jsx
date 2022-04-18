import React from 'react';
import './mainpage.less';
import {Link,Outlet,useNavigate} from 'react-router-dom';
import visitorIcon from "../../assets/images/login/visitor-icon.JPG"
import {Popover} from "antd";

export default function Mainpage() {
  
  const visitor = true;
  const navigate = useNavigate()
  const userinfo = ()=>{
    return (
      <div className='userinfo'>
      </div>
    )
  }
  const menuType =[
                  {type:'artcle',name:'博文'},
                  {type:'picture',name:'图片'},
                  {type:'video',name:'视频'},
                  {type:'other',name:'其他'}];
  const backtoindex=()=>{
    navigate('./index')
  }
  return (
    <div style={{minHeight:'720px'}}>
      <div className='header'>
        <div className='header-left'>
        <div className='logo' onClick={()=>{backtoindex()}}>
          <span>Mrbean455</span>
        </div>
        <div className='menu'>
          {
            menuType.map((item,index)=>{
              return <div key={index} >
                <Link  to={`./${item.type}`}>{item.name}</Link>
                </div>
            })
          }
        </div>
        </div>
        <div className='header-right'>
        <div className='userform'>
          <div className='user'>
            <Popover content={userinfo}>
              <div className='user-icon'>
                <img src={visitorIcon} style={{width:'100%',height:'100%',borderRadius:"50%"}}></img>
              </div>
            </Popover>

          </div>
        </div>
        </div>   
      </div>
      <div style={{paddingTop:"52px",width:"100%"}}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
