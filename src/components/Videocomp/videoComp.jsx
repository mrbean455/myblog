import React,{useEffect}from 'react'
import videojs from "video.js";
import "video.js/dist/video-js.css"; 
import './index.less';
import { Space } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
// import test from "../../assets/video/test.mp4"
export default function VideoComp(props) {
    const {url,options,config} = props;
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
  return (
    <div>
        <div className='video-bg'>
            <div className='video-close-btn'>
            <CloseCircleOutlined />
            </div>
            <div className='video-panel'>
            <video-js id="myVideo" height="400px" width="600px" controls preload="auto" >
                <source src={require(`../../${url}`)} type="video/mp4"></source>
            </video-js>
            </div>
        </div>
    </div>
  )
}
