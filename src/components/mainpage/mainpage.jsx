import React,{useEffect,useState} from 'react';
import './mainpage.less';
import {Link,Outlet,useNavigate} from 'react-router-dom';
import {Image} from "antd";
import DragBox from "./backpre/index"
import UserManager from "../usermanager"
import $request from "../../utils/request"

export default function Mainpage() {
  const [visit,setVisit] =useState({});
  const [showNotice,setShowNotice] = useState(sessionStorage.getItem("showNotice")?Boolean(parseInt(sessionStorage.getItem("showNotice"))):1);
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
  useEffect(()=>{
    //让其每次跳转完滚轮都回到顶部
    window.scrollTo(0,0)
    loadVisitDate();

    return ()=>{
      console.log(886)
    }
  },[])
  const backtoindex=()=>{
    navigate('./index')

  }
  const closeNotice=()=>{
    sessionStorage.setItem("showNotice",0);
    setShowNotice(0)
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
          <div><a href='http://120.53.107.234:3001' style={{cusor:"pointer"}} target="_blank">地图</a></div>
        </div>
        </div>
        <div className='headerRight'>
        <div className='userForm'>
          <UserManager></UserManager>
        </div>
        </div>   
      </div>
        {showNotice==0?"":
              <div className='noticeBg'>
              <div className='noticeContent'> 
              <div className='mainContent'>
              <div style={{textAlign:'center'}}>
                <span style={{fontSize:'38px'}}>WELCOME!!!</span>
                <br></br>
                <span style={{fontSize:'24px'}}>这是我的个人博客，或者说我更倾向于称其为我的个人兴趣。</span>
                <br></br>
              <span style={{fontSize:'20px'}}>主要是用于展示或者说分享我一些觉得有趣的东西、技术心得和一些奇怪的coding相关的想法，同时方便我做一些新技术上的研究和测试。可能技术上调整会比生活展示更新的频繁，毕竟主业是敲代码的哈哈哈</span>
              <br></br>
              <span style={{fontSize:'18px'}}>上线模块：目前主要是四个内容模块：博文、照片、视频和地图。</span>
              </div>
              <span >博文:主要是分享一些自己的代码心得同时做一些文本展示方面的学习。</span>
              <br></br>
              <span>照片：主要是分享一些自己的拍的有意思的生活。未来会调整页面展示风格（现在这个审美效果属实8太行）。</span>
              <br></br>
              <span>视频：跟照片用途一样。</span>
              <br></br>
              <span>地图：看我Blog风格就知道是老荒野大镖客玩家了哈哈哈,由于自己是搞地图出身的，所以突发奇想自己搞了一个荒野大镖客相关的地图服务，并且做了一些小功能
              单独部署在服务器上是为了让一些游戏粉丝能直接打开不需要看一遍我的博客以及等以后研究了微服务打算将这blog和地图拿来练练手哈哈哈。</span>
              <div>
                <span>网页技术设计：</span>
                <br></br>
                <Image src={require("../../assets/images/mainpage/blogDesign.png")} width={500}></Image>
              </div>
              </div>
              <div className='noticeFunc'>
                <button className='closeNotice' onClick={()=>{closeNotice()}}>OK</button>
              </div>
              </div>
            </div>}
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
