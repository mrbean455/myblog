import React ,{useState}from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { Space } from 'antd';
import { ClockCircleTwoTone, LikeTwoTone  ,LeftCircleOutlined ,EyeTwoTone} from '@ant-design/icons';
export default function Index(props) {
  const [likeFlag,setLikeFlag] = useState(false);

  const articleDemo1 ={
    id:"1",
    title:"今天是星期一今天是星期一",
    introduce:"可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实",
    content:"可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实这里才是涉及到content相关的代码，setContent(<String|HTMLElement|Function> htmlContent)这个方法可以接收HTMLElment的参数。所以，到此我们的思路就很清晰了，即在执行到this._popup.setContent()这个方法的时候。我们给他传入渲染好的vue组件的el就行。一般我们使用子组件方法是import xxx from ‘’./xxxx.vue’然后components:{xxx}最后写入我开始设想的是传入一个字符串然后通过require.context对目录扫描获取到该组件。这样确实也可以，但是我后来发现。。。可以直接地可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实这里才是涉及到content相关的代码，setContent(<String|HTMLElement|Function> htmlContent)这个方法可以接收HTMLElment的参数。所以，到此我们的思路就很清晰了，即在执行到this._popup.setContent()这个方法的时候。我们给他传入渲染好的vue组件的el就行。一般我们使用子组件方法是import xxx from ‘’./xxxx.vue’然后components:{xxx}最后写入我开始设想的是传入一个字符串然后通过require.context对目录扫描获取到该组件。这样确实也可以，但是我后来发现。。。可以直接地可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实这里才是涉及到content相关的代码，setContent(<String|HTMLElement|Function> htmlContent)这个方法可以接收HTMLElment的参数。所以，到此我们的思路就很清晰了，即在执行到this._popup.setContent()这个方法的时候。我们给他传入渲染好的vue组件的el就行。一般我们使用子组件方法是import xxx from ‘’./xxxx.vue’然后components:{xxx}最后写入我开始设想的是传入一个字符串然后通过require.context对目录扫描获取到该组件。这样确实也可以，但是我后来发现。。。可以直接地可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实这里才是涉及到content相关的代码，setContent(<String|HTMLElement|Function> htmlContent)这个方法可以接收HTMLElment的参数。所以，到此我们的思路就很清晰了，即在执行到this._popup.setContent()这个方法的时候。我们给他传入渲染好的vue组件的el就行。一般我们使用子组件方法是import xxx from ‘’./xxxx.vue’然后components:{xxx}最后写入我开始设想的是传入一个字符串然后通过require.context对目录扫描获取到该组件。这样确实也可以，但是我后来发现。。。可以直接地可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实这里才是涉及到content相关的代码，setContent(<String|HTMLElement|Function> htmlContent)这个方法可以接收HTMLElment的参数。所以，到此我们的思路就很清晰了，即在执行到this._popup.setContent()这个方法的时候。我们给他传入渲染好的vue组件的el就行。一般我们使用子组件方法是import xxx from ‘’./xxxx.vue’然后components:{xxx}最后写入我开始设想的是传入一个字符串然后通过require.context对目录扫描获取到该组件。这样确实也可以，但是我后来发现。。。可以直接地可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实这里才是涉及到content相关的代码，setContent(<String|HTMLElement|Function> htmlContent)这个方法可以接收HTMLElment的参数。所以，到此我们的思路就很清晰了，即在执行到this._popup.setContent()这个方法的时候。我们给他传入渲染好的vue组件的el就行。一般我们使用子组件方法是import xxx from ‘’./xxxx.vue’然后components:{xxx}最后写入我开始设想的是传入一个字符串然后通过require.context对目录扫描获取到该组件。这样确实也可以，但是我后来发现。。。可以直接地可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实这里才是涉及到content相关的代码，setContent(<String|HTMLElement|Function> htmlContent)这个方法可以接收HTMLElment的参数。所以，到此我们的思路就很清晰了，即在执行到this._popup.setContent()这个方法的时候。我们给他传入渲染好的vue组件的el就行。一般我们使用子组件方法是import xxx from ‘’./xxxx.vue’然后components:{xxx}最后写入我开始设想的是传入一个字符串然后通过require.context对目录扫描获取到该组件。这样确实也可以，但是我后来发现。。。可以直接地可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实可控核聚变就不同了，它效率极高且十分稳定，如果可控核聚变真能实现，远的不说，至少我们可以在太阳系内自由航行了，科幻电影中的宇宙飞船也将变为现实这里才是涉及到content相关的代码，setContent(<String|HTMLElement|Function> htmlContent)这个方法可以接收HTMLElment的参数。所以，到此我们的思路就很清晰了，即在执行到this._popup.setContent()这个方法的时候。我们给他传入渲染好的vue组件的el就行。一般我们使用子组件方法是import xxx from ‘’./xxxx.vue’然后components:{xxx}最后写入我开始设想的是传入一个字符串然后通过require.context对目录扫描获取到该组件。这样确实也可以，但是我后来发现。。。可以直接地",
    date:"2022-05-26",
    like:5,
    look:20,
    sort:["前端","leaflet"]
  } 
  const [articleDemo,setArticleDemo]=useState(articleDemo1)
  const navigate = useNavigate();
  const backToList = ()=>{
    //-1表示后退一位
      navigate(-1)
  }
  const addLike=()=>{
    let count = null;
    if(likeFlag){
      count = articleDemo.like-1;
    }else{
      count = articleDemo.like+1;
    }
    setLikeFlag(!likeFlag)
    setArticleDemo({...articleDemo,like:count});
  }
  return (
    <div className='articleDetail'>
      <h1 className='articleDetailTitle'>{articleDemo.title}</h1>
      <div className='articleDetailInfo'>
        <span><ClockCircleTwoTone  twoToneColor="#878989d6"/>{articleDemo.date}</span>
        <span className="articleDetailIcon" style={{cursor:'pointer'}}  onClick={()=>{addLike(articleDemo.id)}}><LikeTwoTone twoToneColor={likeFlag?"pink":"#878989d6"}/>{articleDemo.like}</span>
        <span className="articleDetailIcon" ><EyeTwoTone  twoToneColor="#878989d6"/>{articleDemo.look}</span>
      </div>
      <div className='articleDetailIntroduce'><span style={{fontSize:"24px",color:"#424244"}}>简介：</span>{articleDemo.introduce}</div>
      <div className='articleDetailContent'>
        <span>{articleDemo.content}</span>
      </div>
      <div className='backToList'>
        <Space>
          <LeftCircleOutlined onClick={()=>{backToList()}}></LeftCircleOutlined>
        </Space>
      </div>
    </div>
  )
}
