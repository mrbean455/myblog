import Login from '../components/login/login';
import Mainpage from "../components/mainpage/mainpage"
//Navigate用于默认展示，例如匹配'/'时，默认转到那个路由下面
import { Navigate } from 'react-router-dom';
import Article from "../components/mainpage/article";
import ArticleList from "../components/mainpage/article/articleList";
import ArticleDetail from "../components/mainpage/article/articleDetail";
import Picture from "../components/mainpage/picture"
import Video from "../components/mainpage/video";
import Mainindex from "../components/mainpage/mainindex";
import Albums from "../components/mainpage/picture/ablums/index1.jsx"
import Album from "../components/mainpage/picture/ablum";
import Auth from "../components/auth/auth"
//路由表
export default [
    {
        path:'/login',
        element: <Login></Login>    
    },
    {
        path:'/mainpage',
        element:<Auth><Mainpage></Mainpage></Auth>,
        children:[
            {
                path:'index',
                element:<Mainindex></Mainindex>
            },
            {
                path:'article',
                element:<Article></Article>,
                children:[
                    {
                    index:true,
                    element:<ArticleList></ArticleList>
                    },
                    {
                        path:'articleDetail/:id',
                        element:<ArticleDetail></ArticleDetail>
                    }
                ]
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
        element:<Navigate to="/mainpage/index"></Navigate>
    }

]
