import React,{useEffect} from 'react';
import './mainpage.less';
import {Link,Outlet,useNavigate} from 'react-router-dom';
import visitorIcon from "../../assets/images/login/visitor-icon.JPG"
import {Popover,Button} from "antd";

export default function Mainpage() {
  
  const visitor = true;
  const navigate = useNavigate()
  const userinfo = ()=>{
    return (
      <div className='userinfo'>
        <span>范大炮</span>
      </div>
    )
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
    console.log('执行了')
    window.scrollTo(0,0)
  })

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
      <div className='aboutme'>
      <span style={{fontSize:'22px'}}>关于我</span>
      <br></br>
      <span>只是一个喜欢代码并且喜欢倒腾花里胡哨的INFJ人格程序员</span>
      <br></br>
      <span>Github:<a href='https://github.com/mrbean455' target={'_blank'}>https://github.com/mrbean455</a></span>
      <br></br>
      <span>otherBlog:<a href='https://juejin.cn/user/2630507106147517' target={'_blank'}>https://juejin.cn/user/2630507106147517</a></span>
    </div>
    </div>
  )
}
