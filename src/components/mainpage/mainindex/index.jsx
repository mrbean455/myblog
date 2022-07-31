import React,{useEffect,useState} from 'react'
import "./index.less"
import {useNavigate} from "react-router-dom";
import $request from "../../../utils/request"


export default function Index() {
  const dialogueRef = React.useRef(null);
  const navigate = useNavigate();
  const [curDayDialogue,setCurDayDialogue] = useState({});

  useEffect(()=>{
    loadEveryDayDialogue();
  },[])

  const loadEveryDayDialogue=()=>{
     $request('/dialogue/getcurrentdialogue').then(res=>{
      console.log(res);
      setCurDayDialogue(res);
      if(res.bgUrl!=null){
        load24jieqiPicture(res.bgUrl);
      }
     })
  }

  const load24jieqiPicture=(url)=>{
    let elStlye = dialogueRef.current.style;
    elStlye.backgroundImage = `url(${url})`;
  }

  const gotoPage = (type)=>{
    navigate(`/mainpage/${type}`);
  }


  const menuType =[
    {type:'article',name:'博文',url:'assets/images/blog-picture-dabiaoge/article.jpg',introduce:'分享关于我自己写的一些技术博客或者解决方法心得'},
    {type:'picture',name:'图片',url:'assets/images/blog-picture-dabiaoge/picture.jpg',introduce:'分享一些我觉得美的照片,有自己拍的和他人拍摄的'},
    {type:'video',name:'视频',url:'assets/images/blog-picture-dabiaoge/video.jpg',introduce:'分享一些我觉得有意思的小视频'},
    {type:'map',name:'地图',url:'assets/images/blog-picture-dabiaoge/3dDemo.jpg',introduce:'施工区,还没想好干啥使'}
  ];
  return (
    <div className='mainContent'>
      <div  className={`classicDialogue ${curDayDialogue.bgUrl==null||curDayDialogue.bgUrl.length==0?'commonPicture':'jieqi24Picture'}`} ref={dialogueRef}>
        <div className='dialogueContent'>{curDayDialogue.content}</div>
        <div className='dialogueInfo'><span>——{curDayDialogue.name}</span></div>
      </div>
      <div className='typeForm'>
        {
            menuType.map((item,index)=>{
              {/*在react的标签中直接用backgroundImage时候，url直接写路径是找不到src下的路径的，要用require方法来实现从src下寻找,可以通过注释moduleScope来访问src以外路径 */}
              {/* require只接受两种形式参数 1.纯静态变量 2.静态+动态变量，不能纯动态 */}
              return <div key={index} className="typePicture" style={{backgroundImage:`url(${require(`../../../${item.url}`)})`}} onClick={()=>{gotoPage(item.type)}}>
                <span className='typeName'>
                  {item.name}
                </span>
                <span className='typeIntroduce'>
                  {item.introduce}
                </span>
                </div>
                
            })
        
        }
        {
          menuType.length%2==0? "":<div  className="typePicture" style={{backgroundColor:`#d4cfcf`}} ></div>
        }
      </div>
    </div>
  )
}
