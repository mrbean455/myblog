import React, { useEffect,useState } from 'react'
import "./index1.less";
import { Space } from 'antd'
import { PictureOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import $request from "../../../../utils/request"

export default function Ablums() {
  const [albumList,setAlbumList] = useState([]);
  const navigate = useNavigate()

  const loadDate = async()=>{
    await $request("/picture/getalbums").then(res=>{
      setAlbumList(res)
    })
  }
  //跳转到相册详情
  const goToDetail = (id)=>{
    navigate(`album/${id}`);
  }
  useEffect(() => {
      loadDate();
    return () => {
    }
  },[])
  return (
    <div className='albumsList'>
      <div className='albums'>
            {
             albumList.map((item,index)=>{
                return (
                    <div className='oneAlbum' key={item.id}>
                    <div className='oneAlbumPicture'>
                    <span className='oneAlbumName'>{item.albumName}</span>
                    <img src={item.bigPicture} height="100%" width="100%" onClick={()=>{goToDetail(item.id)}}> 
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
