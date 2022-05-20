
import { createStore } from 'redux';
import reducer from "./reducer.js"

const store = createStore(reducer);


export default store

/*
React-redux使用步骤
1.store.js文件
    引入两个包 createStore和reducer
    创建store=》 const store = createStore(reducer)
    默认暴露
2.reducer.js文件
    创建一个初始化的state,相当于vuex中的state:{}
    创建reducer(state,action){}函数并暴露
3.一般是在app中引入react-redux的provider和store.js，并包裹住想要得到redux管理的组件
4.在要使用的组件中引入connect，注意，使用connect之后，传统的默认暴露函数式组件改成默认暴露connect，详情看video
5.分别用stateToProps和dispatchToProps来使得直接可以用props管理state的内容和dispatch的操作方法，详情看video和videoComp
*/