import React, { useEffect } from 'react'
import "./index.less"
import { Outlet } from 'react-router-dom';

export default function Picture() {

  const pictureHeaderRef = React.useRef();
  //添加滚轮事件监听
  const headerEffct = () => {
    window.addEventListener('scroll', pictureScroll)
  }

  const pictureScroll = () => {
    let pictureHeaderEl = pictureHeaderRef;
    //获取窗口的滚轮高度
    const scrollY = window.scrollY;
    if (scrollY !== 0) {
      pictureHeaderEl.current.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
    } else {
      pictureHeaderEl.current.style.backgroundPosition = ''
    }
    console.log(scrollY,'yyy')
  }

  useEffect(() => {
    headerEffct();
    return () => {
      window.removeEventListener('scroll', pictureScroll);
    }
  })
  return (
    <div style={{ height: '100%' }}>
      <div className='pictureheader' ref={pictureHeaderRef}>
        <span>PICTURE</span>
      </div>
      <Outlet></Outlet>
    </div>
  )
}
