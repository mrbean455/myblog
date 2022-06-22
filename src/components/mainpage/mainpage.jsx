import React,{useEffect,useState} from 'react';
import './mainpage.less';
import {Link,Outlet,useNavigate} from 'react-router-dom';
import {Popover} from "antd";
import DragBox from "./backpre/index"
import UserManager from "../usermanager"
import $request from "../../utils/request"

export default function Mainpage() {
  const [visit,setVisit] =useState({});
  const visitor = true;
  const navigate = useNavigate()
  const loadVisitDate = ()=>{
    $request("/visit/getvisitnum").then(res=>{
      setVisit(res);
    })
  }
  const menuType =[
                  {type:'article',name:'博文'},
                  {type:'picture',name:'图片'},
                  {type:'video',name:'视频'}];
  const backtoindex=()=>{
    navigate('./index')

  }
  useEffect(()=>{
    //让其每次跳转完滚轮都回到顶部
    window.scrollTo(0,0)
    console.log('....zhixingle')
    loadVisitDate();

    return ()=>{
      console.log(886)
    }
  },[])
  return (
    <div style={{minHeight:'720px'}}>
      <div className='header'>
        <div className='headerLeft'>
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
          <div><a href='http://localhost:3001' style={{cusor:"pointer"}} target="_blank">地图</a></div>
        </div>
        </div>
        <div className='headerRight'>
        <div className='userForm'>
          <UserManager></UserManager>
        </div>
        </div>   
      </div>
      <div style={{paddingTop:"52px",width:"100%"}}>
        <Outlet></Outlet>
      </div>
      <DragBox type="right" btnClick='2'></DragBox>
      <div className='aboutMe'>
      <span style={{fontSize:'22px'}}>关于我</span>
      <br></br>
      <span>只是一个喜欢代码并且喜欢倒腾花里胡哨的INFJ人格程序员</span>
      <br></br>
      <span>Github:<a href='https://github.com/mrbean455' target={'_blank'}>https://github.com/mrbean455</a></span>
      <br></br>
      <span>otherBlog:<a href='https://juejin.cn/user/2630507106147517' target={'_blank'}>https://juejin.cn/user/2630507106147517</a></span>
      <div className='visitNum'>
        <div>当日访问次数:<span>{visit.todayVisit}</span></div>
        <div>总访问次数:<span>{visit.totalVisit}</span></div>
      </div>
    </div>
    </div>
  )
}
