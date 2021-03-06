import React ,{useState,useEffect}from 'react'
import './index.less'
import { useNavigate , useParams } from 'react-router-dom'
import { ClockCircleTwoTone, LikeTwoTone  ,EyeTwoTone} from '@ant-design/icons';
import DragBox from "../../backpre/index"
import ContentComp from "./contentComp/index"
import $request from "../../../../utils/request"
export default function Index(props) {
  const [likeFlag ,setLikeFlag] = useState(false);
  const [articleDetail,setArticleDetail]=useState({})
  const params =useParams();
  const loadArticleData =async (id,first=true)=>{
  await  $request(`article/getarticledetail?id=${id}&first=${first}`).then(res=>{
      setArticleDetail(res);
    })
  }
  useEffect(()=>{
   loadArticleData(params.id);
  },[])
  const addLike= async (id)=>{
    let count =articleDetail.articleLike;
    if(likeFlag){
      //已经点过了，再点就取消点赞
      count = count-1;

    }else{
      count = count+1;
    }
   await $request(`/article/addarticlelike?id=${id}&like=${count}`)
    setLikeFlag(!likeFlag)
    loadArticleData(id,false);
  }
  return(
    <div  style={{background:'#1f1d1d',width:"100%",overflow:"auto"}}>
    <div className='articleDetail'>
      <h1 className='articleDetailTitle'>{articleDetail.articleName}</h1>
      <div className='articleDetailInfo'>
        <span><ClockCircleTwoTone  twoToneColor="#878989d6"/>{articleDetail.date}</span>
        <span className="articleDetailIcon" style={{cursor:'pointer'}}  onClick={()=>{addLike(articleDetail.id)}}><LikeTwoTone twoToneColor={likeFlag?"pink":"#878989d6"}/>{articleDetail.articleLike}</span>
        <span className="articleDetailIcon" ><EyeTwoTone  twoToneColor="#878989d6"/>{articleDetail.articleWatch}</span>
      </div>
      <div className='articleDetailIntroduce'><span style={{fontSize:"24px",color:"#424244"}}>简介：</span>{articleDetail.introduce}</div>
      <div className='articleDetailContent'>
        {
        JSON.stringify(articleDetail)=='{}'?"":<ContentComp content={articleDetail.content} paragraphOrder={articleDetail.paragraphArr}></ContentComp>
        }

      </div>
    </div>
    <DragBox type={'left'} btnClick={'1'}></DragBox>
    </div>

  )
}
