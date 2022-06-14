import React,{useEffect,useState} from 'react';
import "./index.less";
import store from "../../store/store"
export default function Index() {
    const [userInfo,setUserInfo] = useState({})
    const getUserInfo = ()=>{
        let info = store.getState().userInfo!=null?store.getState().userInfo:JSON.parse(sessionStorage.getItem("userInfo"));
        console.log(info,"info")
        setUserInfo(info);
    }
    useEffect(()=>{
        getUserInfo();
    },[])
  return (
    <div className='userManager'>
    <div className='userIcon'>
        <img src={userInfo.iconUrl} ></img>
    </div>
    <div className='managerContent'>
        <div className="userName">{userInfo.name}</div>
        <div className='userType'>{userInfo.type=="admin"?"管理员":"游客"}</div>
        <div className='userOther'>
            {
                userInfo.type=="admin"?<button>信息管理</button>:""
            }
        </div>
    </div>
    </div>
  )
}
