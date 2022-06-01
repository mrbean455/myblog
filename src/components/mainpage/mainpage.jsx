import React,{useEffect} from 'react';
import './mainpage.less';
import {Link,Outlet,useNavigate} from 'react-router-dom';
import {Popover} from "antd";
import DragBox from "./backpre/index"

export default function Mainpage() {
  
  const visitor = true;
  const navigate = useNavigate()
  const userinfo = ()=>{
    return (
      <div>
        <div style={{textAlign:'center'}}>{userInfo.name}</div>
        {
          userInfo.type=="admin"?
          <div style={{marginTop:'4px'}}>
            <button>页面管理</button>
            </div>
            :''
        }

      </div>
    )
  }
  const todayNum=10;
  const totalNum=200;
  const  userInfo={
     type:'admin',
     name:'龅牙',
     icon:'assets/images/blog-picture-dabiaoge/visitoricon.png'
  } 
  const menuType =[
                  {type:'article',name:'博文'},
                  {type:'picture',name:'图片'},
                  {type:'video',name:'视频'},
                  {type:'other',name:'其他'}];
  const backtoindex=()=>{
    navigate('./index')

  }
  useEffect(()=>{
    //让其每次跳转完滚轮都回到顶部
    window.scrollTo(0,0)
    console.log('....zhixingle')
    return ()=>{
      console.log(886)
    }
  })
  const backToTop =()=>{
    window.scrollTo(0,0);
  }
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
        </div>
        </div>
        <div className='headerRight'>
        <div className='userForm'>
          <div className='user'>
            <Popover content={userinfo}>
              <div className='userIcon'>
                <img src={require(`../../${userInfo.icon}`)} style={{width:'100%',height:'100%',borderRadius:"50%"}}></img>
              </div>
            </Popover>

          </div>
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
        <div>当日访问次数:<span>{todayNum}</span></div>
        <div>总访问次数:<span>{totalNum}</span></div>
      </div>
    </div>
    </div>
  )
}
