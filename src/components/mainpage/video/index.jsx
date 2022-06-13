import React,{useEffect,useState}from 'react'
import VideoComp from '../../Videocomp/videoComp'; 
import './index.less';
//引入react-redux的connect
import {connect} from 'react-redux';
import  PageHeader  from '../../pageHeader/index';
import $request  from "../../../utils/request"

//当决定要在组件中使用react-redux时，默认暴露就要发生变化，是默认暴露connect
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

const getVideoImg= (img)=>{
  // let url ='D:/work/blogResource/videos/test01.png';
  // let test = "test01.png"
  // let imgUrl  =require(`D:/work/blogResource/${}`);
  // return imgUrl;
}

 const Video=(props)=> {
   let {videoFlag,changeShowVideoFlag} = props;
  const [videoInfo,setVideoInfo] =React.useState({url:'',options:{},config:{}}); 
  const [videoList,setVideoList] =React.useState([]);
  let showVideodetail = {url:'',options:{},config:{},};
  useEffect(()=>{
    $request("/video/getvideos").then(res=>{
      setVideoList(res);
      console.log(res,'diveo')
    })

      // let testList=[{id:"1",url:'assets/video/test.mp4',img:'assets/video/test.jpg'},{id:"2",url:'',img:''},{id:"3",url:'',img:'assets/video/test.jpg'},
      // {id:"4",url:'assets/video/test.mp4',img:'assets/video/test.jpg'},{id:"5",url:'',img:''},{id:"6",url:'',img:'assets/video/test.jpg'},
      // {id:"7",url:'assets/video/test.mp4',img:'assets/video/test.jpg'},{id:"8",url:'',img:''},{id:"9",url:'',img:'assets/video/test.jpg'}];
      // if(videoList.length==0){
      //   setVideoList(testList)
      //   console.log('222222')
      // }
    return()=>{

      }
    
  },[])
const openVideoComp = (url)=>{

    if(videoFlag){

    }else{
      setVideoInfo({...{url,}})
    }
    changeShowVideoFlag(!videoFlag);
}

  return (
    <div style={{ height: '100%' }}>
    <PageHeader title={"VIDEO"} img={"assets/images/blog-picture-dabiaoge/video-header.png"}></PageHeader>
    <div className='videoList'>
      { 
        // console.log(videoList,'11111')
        videoList.map((item)=>{
          return(
            <div key={item.id} className='videoDetail' onClick={()=>{openVideoComp(item.url)}}>
              <img src={item.img} alt="" className='videoImg'></img>
            </div>
          )

        })
      }
      {
        videoFlag?<VideoComp url={videoInfo.url}></VideoComp>:''
      }
    </div>
    </div>

  )
}

/*
  connect()();
  第一个括号中的两个参数：（内在逻辑是映射）
  参数1：类似于Vue中的在computed中写 ...mapState['xxx','xxx']一样，是为了从store中拿到数据，放到props中方面组件使用
  参数2: 是为了方便发送dispatch事件，然后同时把他挂在到props上，方便处理
  第二个括号就是你要connect的组件
*/
export default connect(stateToProps,dispatchToProps)(Video)