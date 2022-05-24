import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.less"

export default function Index(props) {

    const navigate =useNavigate()
    const toArticleDetail =(id)=>{
        navigate(`articleDetail/${id}`)
    }

    const article =[{id:"1",title:'今天是星期一今天是星期一',introduce:'可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实',time:"2022-5-23"},
    {id:"2",title:'今天是星期一',introduce:'可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实。',time:"2022-5-23"},
    {id:"3",title:'今天是星期一',introduce:'可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实。',time:"2022-5-23"},
    {id:"8",title:'今天是星期一',introduce:'可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实。',time:"2022-5-23"},
    {id:"4",title:'今天是星期一',introduce:'可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实。',time:"2022-5-23"},
    {id:"5",title:'今天是星期一',introduce:'可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实。',time:"2022-5-23"},
    {id:"6",title:'今天是星期一',introduce:'可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实。',time:"2022-5-23"}]
  return (
    <div className='articleList'>
        {
            article.map((item)=>{
                return (
                    <div key={item.id}  className='articleInfo' onClick={()=>{toArticleDetail(item.id)}}>
                        <span className='articleTitle'>{item.title}</span>
                        <span className='articleIntroduce'>{item.introduce}</span>
                        <span className='articleTime'>{item.time}</span>
                    </div>
                )
            })
        }
    </div>
  )
}
