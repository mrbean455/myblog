import React from 'react'
import './index.less'
import { Space,Image } from 'antd'
import {ClockCircleTwoTone} from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'
import DragBox from "../../backpre/index"



export default function Ablum() {
  const navigate = useNavigate();
  const ablum = [{src:'assets/images/mainpage/image/fengjing.jpg',time:'2022-05-27'},{src:'assets/images/mainpage/image/renwu.jpg'},{src:'assets/images/mainpage/image/fengjing.jpg'},{src:'assets/images/mainpage/image/fengjing.jpg'},
  {src:'assets/images/mainpage/image/fengjing.jpg',time:'2022-05-27'},{src:'assets/images/mainpage/image/fengjing.jpg',time:'2022-05-27'}];
  const backToList = ()=>{
    //-1表示后退一位
      navigate(-1)
  }
  return (
    <div className='pictures'>

      <div className='pictureList'>
            <Image.PreviewGroup>
              {
          ablum.map((item,index)=>{
            return (
              <div className='onePicture' key={index}>
              <div className='onePictureInfo'>发布日期:{item.time}</div>
              <Image width={400} height={400} src={require(`../../../../${item.src}`)} key={index}></Image>
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
