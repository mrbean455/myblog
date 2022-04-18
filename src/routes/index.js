import Login from '../components/login/login';
import Mainpage from "../components/mainpage/mainpage"
//Navigate用于默认展示，例如匹配'/'时，默认转到那个路由下面
import { Navigate } from 'react-router-dom';
import Artcle from "../components/mainpage/artcle";
import Picture from "../components/mainpage/picture"
import Video from "../components/mainpage/video";
import Mainindex from "../components/mainpage/mainindex";
//路由表
export default [
    {
        path:'/login',
        element: <Login></Login>    
    },
    {
        path:'/mainpage',
        element:<Mainpage></Mainpage>,
        children:[
            {
                path:'index',
                element:<Mainindex></Mainindex>
            },
            {
                path:'artcle',
                element:<Artcle></Artcle>
            },
            {
                path:'picture',
                element:<Picture></Picture>
            },
            {
                path:'video',
                element:<Video></Video>
            },
        ]
    },
    {
        path:'/',
        element:<Navigate to="/login"></Navigate>
    }

]
