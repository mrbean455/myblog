import React from 'react'
import { Space } from 'antd'
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
import './threearrows.less';
//用于左箭头闪烁的图标
export default function leftarrow(props) {
    const {type} = props
    const produceEl=()=>{
        let arr=[];
        if(type=='left'){
           for(let i=0;i<3;i++){
               arr.push(<LeftOutlined key={i}></LeftOutlined>)
           }
        }else if(type=='right'){
            for(let i=0;i<3;i++){
                arr.push(<RightOutlined key={i}></RightOutlined>)
            }
        }
        return arr;
    }
  return (
    <div className={type=="left"?'leftarrow':'rightarrow'}>
        <Space>
        {produceEl()}
        </Space>
    </div>
  )
}
