import React,{useEffect}from 'react'
import videojs from "video.js";
import "video.js/dist/video-js.css"; 
import './index.less';
import { Space } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
// import test from "../../assets/video/test.mp4"
import { connect } from 'react-redux';


const VideoComp = (props)=>{
    const {url} = props;
    const {videoFlag,changeShowVideoFlag} = props;
    let options = {

    }
    let player={};
    useEffect(()=>{
        //配置参数
        let videoOptions = options;
        //初始化videojs
        player = videojs('myVideo', videoOptions, function onPlayerReady() {

       });
       return()=>{
           //销毁插件
           player.dispose();
       }
    })
    const closeVideoInfo = ()=>{
        changeShowVideoFlag(!videoFlag);
    }
  return (
    <div>
        <div className='video-bg'>
            <div className='video-close-btn'>
            <CloseCircleOutlined  onClick={()=>{closeVideoInfo()}}/>
            </div>
            <div className='video-panel'>
            <video-js id="myVideo" height="500px" width="600px" controls preload="auto" >
                <source src={url} type="video/mp4"></source>
            </video-js>
            </div>
        </div>
    </div>
  )
}
const stateToProps = (state)=>{
    return{
      videoFlag:state.videoFlag,
    }
  }
  const dispatchToProps = (dispatch)=>{
    return {
      changeShowVideoFlag(flag){
        let action ={type:'changeVideoFlag',value:flag}
        //派发
        dispatch(action);
      }
    }
  }

export default connect(stateToProps,dispatchToProps)(VideoComp)