import React,{useEffect,useState}from 'react'
import test from "../../../assets/video/test.mp4";
import VideoComp from '../../Videocomp/videoComp'; 
import './index.less';


export default function Video() {
  const [showVideo,setShowVideo] = React.useState(false);
  const [videoInfo,setVideoInfo] =React.useState({url:'',options:{},config:{}}); 
  let showVideodetail = {url:'',options:{},config:{},};
const openVideoComp = (id)=>{

    if(showVideo){

    }else{
      setVideoInfo({...{url:'assets/video/test.mp4',options:{controls:true},config:{}}})
    }
    setShowVideo(!showVideo);
}

  return (
    <div>
      <div className='videoDetail' onClick={()=>{openVideoComp('test')}}>
      </div>
      {
        showVideo?<VideoComp url={videoInfo.url} options={videoInfo.options}></VideoComp>:''
      }
    </div>
  )
}
