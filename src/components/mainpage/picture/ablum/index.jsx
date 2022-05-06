import React from 'react'
import './index.less'
import { Space,Image } from 'antd'
import {LeftCircleOutlined} from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'



export default function Ablum() {
  const navigate = useNavigate();
  const ablum = [{src:'assets/images/mainpage/image/fengjing.jpg'},{src:'assets/images/mainpage/image/renwu.jpg'},{src:'assets/images/mainpage/image/fengjing.jpg'},{src:'assets/images/mainpage/image/fengjing.jpg'},
  {src:'assets/images/mainpage/image/fengjing.jpg'},{src:'assets/images/mainpage/image/fengjing.jpg'}];
  const backToList = ()=>{
    //-1表示后退一位
      navigate(-1)
  }
  return (
    <div>
      <div className='albumHeader'>
        <Space>
          <LeftCircleOutlined onClick={()=>{backToList()}}></LeftCircleOutlined>
        </Space>
      </div>
      <div className='pictureshow'>
            <Image.PreviewGroup>
              {
          ablum.map((item,index)=>{
            return (
              <Image width={400} height={400} src={require(`../../../../${item.src}`)} key={index}></Image>
            )
          })
              }
            </Image.PreviewGroup>

          
      </div>
    </div>
  )
}
