import React, { useEffect } from 'react'
import "./index1.less";
import { Space } from 'antd'
import { PictureOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Ablums() {
  const navigate = useNavigate()
  const albums = [{name:'风景',date:'2022-04-20',fmimg:'assets/images/mainpage/image/fengjing.jpg',introduce:"无",id:'001',num:10},
  {name:'人物',date:'2022-04-20',fmimg:'assets/images/mainpage/image/renwu.jpg',introduce:"今天是星期六今天是星期六今天是星期六今天是星期六今天是星期六今天是星期六今天是星期六今天是星期六",id:'002',num:10},
  {name:'截图',date:'2022-04-20',fmimg:'assets/images/mainpage/image/jietu.jpg',introduce:"无",id:'003',num:10},
  {name:'搞笑',date:'2022-04-20',fmimg:'assets/images/mainpage/image/gaoxiao.jpg',introduce:"无",id:'004',num:10}]
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
  useEffect(() => {
    return () => {
    }
  })
  return (
    <div style={{ height: '100%' }}>
      <div className='albums'>
            {
              albums.map((item,index)=>{
                return (
                    <div className='oneAlbum' key={index}>
                    <div className='oneAlbumPicture'>
                    <span className='oneAlbumName'>{item.name}</span>
                    <img src={require(`../../../../${item.fmimg}`)} height="100%" width="100%" onClick={()=>{goToDetail(item.id)}}> 
                    </img>
                    <div className='oneAlbumNum'>
                      <Space>
                        <PictureOutlined></PictureOutlined>
                        <span>{item.num}</span>
                      </Space>
                    </div>
                  </div>
                  <div className='oneAblumBackface' onClick={()=>{goToDetail(item.id)}}>
                  <div className='oneAblumDate'>
                     创建日期：{item.date}
                    </div>
                    <div className='oneAblumIntroduce'>
                       简介: {item.introduce}
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
