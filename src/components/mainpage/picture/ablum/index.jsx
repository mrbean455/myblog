import React,{useState,useEffect} from 'react'
import './index.less'
import { Space,Image } from 'antd'
import {ClockCircleTwoTone} from "@ant-design/icons"
import { useParams } from 'react-router-dom'
import DragBox from "../../backpre/index"
import $request from "../../../../utils/request"


export default function Ablum() {
  const [pictures,setPictures] = useState([]);
  const params  =useParams();

  const loadData = async()=>{
    await $request(`/picture/getpictures?albumId=${params.id}`).then(res=>{
      setPictures(res);
    })
  }


  useEffect(()=>{
    loadData();
  },[])
  return (
    <div className='pictures'>

      <div className='pictureList'>
            <Image.PreviewGroup>
              {
          pictures.map((item)=>{
            return (
              <div className='onePicture' key={item.id}>
              <div className='onePictureInfo'>发布日期:{item.date}</div>
              <Image width={400} height={400} src={item.url} key={item.id}></Image>
              </div>

            )
          })
              }
            </Image.PreviewGroup>
      </div>
            <DragBox btnClick='1'></DragBox>
    </div>
  )
}
