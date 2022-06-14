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
        <div className='articleListNotice'>
            <div>鉴于目前博客阅读功能在展示文章内容方面比较粗糙（还没办法实现图片展示</div>
            <div>文章排版和代码展示设计不是很完善）所以希望想阅读文章的朋友，请点击此<a href='https://juejin.cn/user/2630507106147517' target={'_blank'}>地址</a></div>
        </div>
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
