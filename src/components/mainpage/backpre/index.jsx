import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'
import { Space } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
export default function Index(props) {
    const [compBottom,setCompBottom] = useState(130);
    let curBottom;
    const navigate = useNavigate();
    const backToList = ()=>{
        //-1表示后退一位
          navigate(-1)
      }

    const onDragStart=(e)=>{
        console.log(e,'start')
        curBottom  =e.clientY - compBottom;
    }
    const onDragEnd=(e)=>{
        console.log(e,'end')
        setCompBottom(e.clientY-curBottom);
    }
  return (
    <div className='backToList' draggable="true" onDragStart={onDragStart} onDragEnd={onDragEnd} style={{bottom:compBottom}}>
    <Space>
      <LeftCircleOutlined onClick={()=>{backToList()}}></LeftCircleOutlined>
    </Space>
  </div>
  )
}
