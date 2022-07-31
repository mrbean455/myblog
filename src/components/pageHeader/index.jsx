import React,{useEffect}from "react"
import './index.less'

export default function PageHeader(props){
    const {img,title} =props;
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
    }
    useEffect(() => {
        headerEffct();
        return () => {
          window.removeEventListener('scroll', pictureScroll);
        }
      })

return(
    <div className='pictureheader' ref={pictureHeaderRef} style={{backgroundImage:`url(${require(`../../${img}`)})`,backgroundRepeat:"no-repeat"}}>
    <span>{title}</span>
    </div>
)
}