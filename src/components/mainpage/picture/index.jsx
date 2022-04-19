import React,{useEffect} from 'react'
import "./index.less"

export default function Picture() {
  const pictureHeaderRef = React.useRef();
  //添加滚轮事件监听
  const headerEffct = ()=>{
      window.addEventListener('scroll',pictureScroll)
  }
  
  const  pictureScroll=()=>{
    let pictureHeaderEl = pictureHeaderRef;
    //获取窗口的滚轮高度
    const scrollY = window.scrollY;
    if(scrollY !==0){
      pictureHeaderEl.current.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
    }else{
      pictureHeaderEl.current.style.backgroundPosition = ''
    }
}

  useEffect(()=>{
      headerEffct();
      return ()=>{
        window.removeEventListener('scroll',pictureScroll);
      }
  })
  return (
    <div style={{height:'100%'}}>
      <div className='pictureheader' ref={pictureHeaderRef}>
        <span>PICTURE</span>
      </div>
      <div className='albums'>
        <div className='album'>
          <div className='ablumleft'>
            <img></img>
          </div>
          <div className='ablumright'>
              <h2>相册名字</h2>
              <span>简介：xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          </div>
          </div>
        <div className='album'>

        </div>
        <div className='album'>

        </div>
        <div className='album'>

        </div>
        <div className='album'>

        </div>
        <div className='album'>

        </div>

      </div>
    </div>
  )
}
