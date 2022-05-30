import React, { useEffect } from 'react'
import "./index.less"
import { Popover, Space } from 'antd'
import { EllipsisOutlined,PictureOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Ablums() {
  const navigate = useNavigate()
  const albums = [{name:'风景',data:'2022-04-20',fmimg:'assets/images/mainpage/image/fengjing.jpg',introduce:"无",id:'001',num:10},
  {name:'人物',data:'2022-04-20',fmimg:'assets/images/mainpage/image/renwu.jpg',introduce:"无",id:'002',num:10},
  {name:'截图',data:'2022-04-20',fmimg:'assets/images/mainpage/image/jietu.jpg',introduce:"无",id:'003',num:10},
  {name:'搞笑',data:'2022-04-20',fmimg:'assets/images/mainpage/image/gaoxiao.jpg',introduce:"assets/images/mainpage/image/gaoxiao.jpgassets/images/mainpage/image/gaoxiao.jpgassets/images/mainpage/image/gaoxiao.jpgassets/images/mainpage/image/gaoxiao.jpgassets/images/mainpage/image/gaoxiao.jpg",id:'004',num:10}]
  const pitureOther = ()=>{
    return(
      <div style={{cursor:'pointer'}}>
        删除
      </div>
    )
  }
  //跳转到相册详情
  const goToDetail = (id)=>{
    navigate(`album/${id}`);
  }

  //用于获取Div平移时候的平移值
  const getTranslateX = (item)=>{
    if(item.style.transform!=""){
      let temp = item.style.transform.split("(");
      let finalnum =temp[1].split('p')
      
      return parseFloat(finalnum[0]);
    }
    return 0;

  }
  const albumEffct = ()=>{
    window.addEventListener('scroll',ablumScrollAwait)
  }
  const ablumScrollAwait = ()=>{
    setTimeout(()=>{
      ablumScroll();
    })
  }
  let scrollYpre = window.scrollY ;
  const ablumScroll =()=>{

  const scrollYnext = window.scrollY;
  let album = document.getElementsByClassName('album');
  let albumArr = Array.from(album);
  albumArr.forEach((album,index)=>{
    if(scrollYnext - scrollYpre>0&&(scrollYnext!=0&&scrollYpre!=0)){
      //>0时为向下滑，同时scrollYnext!=0&&scrollYpre!=0是为了预防刷新后向上移动滚轮造成div右滑现象
      if(album.offsetTop-scrollYnext<630){
        let left =  album.childNodes[0];
        let right = album.childNodes[1];
          if(getTranslateX(left)>(-170.0)){
            let getLeftX = getTranslateX(left);
            let getRightX = getTranslateX(right);
            left.style.transform = `translateX(${getLeftX-10}px)`;
            right.style.transform = `translateX(${getRightX+5}px)`;
          }
        }
    }else if(scrollYnext - scrollYpre<=0){
      //<=0表示向上滑
      if(album.offsetTop-scrollYnext>378&&album.offsetTop-scrollYnext>0){
        let left =  album.childNodes[0];
        let right = album.childNodes[1];

        if(getTranslateX(left)<(-0.1)){
          let getLeftX = getTranslateX(left);
          let getRightX = getTranslateX(right);
          left.style.transform = `translateX(${getLeftX+10}px)`;
          right.style.transform = `translateX(${getRightX-5}px)`;
        }
        }
      }
  })
  scrollYpre=scrollYnext;
  }

  useEffect(() => {
    albumEffct();
    return () => {
      window.removeEventListener('scroll',ablumScrollAwait);
    }
  })
  return (
    <div className='albumsList'>
      <div className='albums'>
            {
              albums.map((item,index)=>{
                return (
                  <div className='album' key={index}>
                  <div className='albumpicture'>
                    <span className='albumpicturename'>{item.name}</span>
                    <img src={require(`../../../../${item.fmimg}`)} height="100%" width="100%" onClick={()=>{goToDetail(item.id)}}> 
                    </img>
                    
                    <div className='albumpicturenum'>
                      <Space>
                        <PictureOutlined></PictureOutlined>
                        <span>{item.num}</span>
                      </Space>
                    </div>
                  </div>
                  <div className={`right-${index} album-right `}>
                    <div className='abluminfo'>
                        <div style={{fontSize:'26px',height:'10%'}}>{item.name}</div>
                        <div style={{height:'10%'}}>日期:{item.data}</div>
                        <div style={{height:'10%'}}>简介:</div>
                        <div style={{height:'40%',overflow:'hidden'}}>{item.introduce}</div>
                    </div>
                    <div className='other'>
                    <Popover content={pitureOther}>
                          <Space>
                            <EllipsisOutlined></EllipsisOutlined>
                          </Space>
                    </Popover>
                        </div>
                  </div>
                </div>
                )
              })
            }
        </div>
    </div>
  )
}
