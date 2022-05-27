import React, { useEffect } from 'react'
import "./index1.less"
import { Space } from 'antd'
import { PictureOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Ablums() {
  const navigate = useNavigate()
  const albums = [{name:'风景',data:'2022-04-20',fmimg:'assets/images/mainpage/image/fengjing.jpg',introduce:"无",id:'001',num:10},
  {name:'人物',data:'2022-04-20',fmimg:'assets/images/mainpage/image/renwu.jpg',id:'002',num:10},
  {name:'截图',data:'2022-04-20',fmimg:'assets/images/mainpage/image/jietu.jpg',id:'003',num:10},
  {name:'搞笑',data:'2022-04-20',fmimg:'assets/images/mainpage/image/gaoxiao.jpg',id:'004',num:10}]
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
                  <div className='ablumbackface'>
                    
                  </div>
                    </div>
                )
              })
            }
        </div>
    </div>
  )
}
