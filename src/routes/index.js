import Login from '../components/login/login';
import Mainpage from "../components/mainpage/mainpage"
//Navigate用于默认展示，例如匹配'/'时，默认转到那个路由下面
import { Navigate } from 'react-router-dom';
import Artcle from "../components/mainpage/artcle";
import Picture from "../components/mainpage/picture"
import Video from "../components/mainpage/video";
import Mainindex from "../components/mainpage/mainindex";
import Albums from "../components/mainpage/picture/ablums"
import Album from "../components/mainpage/picture/ablum";
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
                element:<Picture></Picture>,
                children:[
                    {   
                        //index是设为默认路由
                        index:true,
                        // path:'albums',
                        element:<Albums></Albums>
                    },
                    {
                        path:'album/:id',
                        element:<Album></Album>
                    }
                ]
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
