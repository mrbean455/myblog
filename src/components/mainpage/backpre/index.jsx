import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
//引入属性依赖prop-types用于对props的数入的静态类型进行校验
import PropTypes from "prop-types"
import './index.less'
import { Space } from 'antd';
import { LeftCircleOutlined,UpCircleOutlined } from '@ant-design/icons';
export default function Index(props) {
  /**
   * borderVal:表示距离浏览器边框的距离
   * bottomVal：表示距离浏览器底部边框的距离
   * type:表示放左边还是放右边
   * btnClick表示要触发的功能 1是返回，2是回到顶部
   */
  const {distanceVal,bottomVal,type,btnClick} = props;

    const [compBottom,setCompBottom] = useState(bottomVal);
    const [compDistance,setCompDistance] =useState(distanceVal);
    //屏幕不包括滚动条的宽度
    let rootWidth;
    //托起时候的浏览器坐标
    let curBottom;
    //亲测这都是获取包含滚动条高度
    // const innerWidth  = window.innerWidth;
    const navigate = useNavigate();
    const doEvent =()=>{
      if(btnClick=="1"){
        backToList();
      }else if (btnClick=="2"){
        backtoTop();
      }
    }
    const backToList = ()=>{
      //-1表示后退一位
        navigate(-1)
    }
    const backtoTop = ()=>{
      window.scrollTo(0,0);
    }

    const onDragStart=(e)=>{
        rootWidth = document.body.clientWidth;
        curBottom = e.clientY;
    }
    const onDragEnd=(e)=>{
      if(type=="left"){
        setCompBottom(compBottom-(e.clientY-curBottom));
        if(e.clientX>rootWidth/2){
          //工作区宽度 - 本身div距离左边的距离 - div的宽
          setCompDistance(rootWidth-distanceVal-40);

        }else{
          setCompDistance(distanceVal)
        }
      }else if(type =="right"){
        setCompBottom(compBottom-(e.clientY-curBottom));
        if(e.clientX>rootWidth/2){
          setCompDistance(distanceVal)
        }else{
          //工作区宽度 - 本身div距离右边的距离 - div的宽
          setCompDistance(rootWidth-distanceVal-40);
        }
      }
    }
  return (
    <div className='backToList' 
    draggable="true" 
    onDragStart={onDragStart} 
    onDragEnd={onDragEnd} 
    style={btnClick=="1"||btnClick=="2"?
    ((type=='left'?
    ({left:compDistance,bottom:compBottom}):(type=="right"?
    {right:compDistance,bottom:compBottom}:{display:"none"}))):{display:"none"}}>
    <Space>
      {
        btnClick=="1"?<LeftCircleOutlined onClick={()=>{doEvent()}}></LeftCircleOutlined>:btnClick=="2"?<UpCircleOutlined onClick={()=>{doEvent()}}></UpCircleOutlined>:""
      }

      
    </Space>
  </div>
  )
}

//propTypes:校验props类型
Index.propTypes = {
  distanceVal:PropTypes.number,
  bottomVal:PropTypes.number,
  type:PropTypes.string,
  btnClick:PropTypes.oneOf(['1','2']).isRequired
}
//defaultProps:设置Props默认值
Index.defaultProps = {
  distanceVal:20,
  bottomVal:130,
  type:"left"
}