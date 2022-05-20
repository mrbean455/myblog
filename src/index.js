import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import '@testing-library/jest-dom';
//在react18中，不再使用render函数,改用createRoot,不改也行但是报错恶心
import {createRoot} from "react-dom/client";

//使用react-redux
//使用react-redux的Provider(该组件用于传递store)
import { Provider } from 'react-redux';
//引入Store,这样所有Provider包裹的组件都可以使用store
import store from "./store/store"


const container = document.getElementById('root');
const root = createRoot(container);
            root.render(
            <Provider store={store}>
            <App />
            </Provider>
            );
// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

reportWebVitals();
