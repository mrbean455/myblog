import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.less"
import {EyeTwoTone,LikeTwoTone}from "@ant-design/icons"
import $request from "../../../../utils/request"

export default function Index(props) {

    const [articleList,setArticleList]  = useState([]);
    const navigate =useNavigate()
    const toArticleDetail =(id)=>{
        navigate(`articleDetail/${id}`)
    }
    useEffect(()=>{
          $request('/article/getarticlelist').then(res=>{
            console.log(res,'art')
                setArticleList(res);
        })
    },[])
  return (
    <div className='articleList'>
        {
            articleList.map((item)=>{
                return (
                    <div key={item.id}  className='articleInfo'>
                        <span className='articleTitle' onClick={()=>{toArticleDetail(item.id)}}>{item.articleName}</span>
                        <span className='articleIntroduce' onClick={()=>{toArticleDetail(item.id)}}>{item.introduce}</span>
                        <div className='articleBottom'>
                            <span>{item.time}</span> 
                            <span><LikeTwoTone twoToneColor="#878989d6"></LikeTwoTone>{item.articleLike}</span>
                            <span><EyeTwoTone twoToneColor="#878989d6"></EyeTwoTone>{item.articleWatch}</span>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
