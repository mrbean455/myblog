import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'
import { Space } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
export default function Index(props) {
  const {leftVal,bottomVal,type} = props;
  //type类型:1.为回退，2.为回到顶部
    const backToListRef = React.useRef()
    const [compBottom,setCompBottom] = useState(bottomVal);
    const [compLeft,setCompLeft] =useState(leftVal);
    //屏幕不包括滚动条的宽度
    let rootWidth;
    let curBottom;
    let curLeft;
    
    //亲测这都是获取包含滚动条高度
    // const innerWidth  = window.innerWidth;
    const navigate = useNavigate();
    const backToList = ()=>{
        //-1表示后退一位
          navigate(-1)
      }

    const onDragStart=(e)=>{
        console.log(e,'start')
        rootWidth = document.body.clientWidth;
        curLeft = e.clientX;
        curBottom = e.clientY;
    }
    const onDragEnd=(e)=>{
        console.log(e,'end')
        setCompBottom(compBottom-(e.clientY-curBottom));
        if(e.clientX>rootWidth/2){
          //工作区宽度 - 本身div距离左边的距离 - div的宽
          setCompLeft(rootWidth-leftVal-40);
        }else{
          setCompLeft(leftVal)
        }
    }
  return (
    <div className='backToList' draggable="true" onDragStart={onDragStart} onDragEnd={onDragEnd} style={{bottom:compBottom,left:compLeft}} ref={backToListRef}>
    <Space>
      <LeftCircleOutlined onClick={()=>{backToList()}}></LeftCircleOutlined>
    </Space>
  </div>
  )
}
