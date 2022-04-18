import React from 'react'
import "./index.less"
import {Link} from "react-router-dom";

export default function Index() {
  const menuType =[
    {type:'artcle',name:'博文'},
    {type:'picture',name:'图片'},
    {type:'video',name:'视频'},
    {type:'other',name:'其他'}];
  return (
    <div className='maincontent'>
      <div className='introduce'>
        <span style={{fontSize:'36px'}}>WELCOME!!!</span>
        <br></br>
        <span>这是我的个人博客，或者说我更倾向于称其为我的个人兴趣。</span>
        <br></br>
        <span>1.0版本主要是分为三大模块也可以说是网站的内容，分享我对编程的心得、分享一些符合我个人审美的</span>
        <br></br>
        <span>一些自己的或者他人的照片、一些自己拍的小视频,后期（如果够闲）会随着技术的进步可能会</span>
        <br></br>
        <span>发布一些自己觉得有意思的小demo。最后,版本的更新维护迭代啥的,随缘哈哈哈。</span>
        <br></br>
        <span>该网站的代码会上传到我的github上</span>
      </div>
      <div className='typeform'>
        {
            menuType.map((item,index)=>{
              return <div key={index} className="typeintroduce">
                <div className='typeintroduce-name'>
                  <span>{item.name}</span>
                </div>
                </div>
            })
        }
      </div>
    </div>
  )
}
