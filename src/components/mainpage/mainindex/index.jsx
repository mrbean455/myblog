import React from 'react'
import "./index.less"
import {useNavigate} from "react-router-dom";


export default function Index() {
  const navigate = useNavigate();

  const gotoPage = (type)=>{
    navigate(`/mainpage/${type}`);
  }
  const menuType =[
    {type:'article',name:'博文',url:'assets/images/blog-picture-dabiaoge/article.jpg',introduce:'分享关于我自己写的一些技术博客或者解决方法心得'},
    {type:'picture',name:'图片',url:'assets/images/blog-picture-dabiaoge/picture.jpg',introduce:'分享一些我觉得美的照片,有自己拍的和他人拍摄的'},
    {type:'video',name:'视频',url:'assets/images/blog-picture-dabiaoge/video.jpg',introduce:'分享一些我觉得有意思的小视频'},
    {type:'other',name:'其他',url:'assets/images/blog-picture-dabiaoge/3dDemo.jpg',introduce:'施工区,还没想好干啥使'}
  ];
  return (
    <div className='mainContent'>
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
      <div className='typeForm'>
        {
            menuType.map((item,index)=>{
              {/*在react的标签中直接用backgroundImage时候，url直接写路径是找不到src下的路径的，要用require方法来实现从src下寻找,可以通过注释moduleScope来访问src以外路径 */}
              {/* require只接受两种形式参数 1.纯静态变量 2.静态+动态变量，不能纯动态 */}
              return <div key={index} className="typePicture" style={{backgroundImage:`url(${require(`../../../${item.url}`)})`}} onClick={()=>{gotoPage(item.type)}}>
                <span className='typeName'>
                  {item.name}
                </span>
                <span className='typeIntroduce'>
                  {item.introduce}
                </span>
                </div>
                
            })
        
        }
        {
          menuType.length%2==0? "":<div  className="typePicture" style={{backgroundColor:`#d4cfcf`}} ></div>
        }
      </div>
    </div>
  )
}
