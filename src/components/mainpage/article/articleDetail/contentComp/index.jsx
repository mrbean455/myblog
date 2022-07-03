import React,{useState} from 'react'
import './index.less'

export default function Index(props) {
  const[content]=useState(props.content);
  const[orders]=useState(props.paragraphOrder);


  return (
    <div>
      {
       orders!=undefined?orders.map((orderid)=>{
          let paragraph  = content.find((item)=>{return item.id==orderid})
          if(paragraph.type=='text'){
            return <div key={orderid}>
              {paragraph.content}
            </div>
          }else if(paragraph.type=="codeBlock"){
            return <div className='codeBlock' key={orderid}>
              {paragraph.content}
            </div>
          }
        }):""
      }
    </div>
  )
}
