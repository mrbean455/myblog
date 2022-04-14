import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//在react18中，不再使用render函数,改用createRoot,不改也行但是报错恶心
import {createRoot} from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

reportWebVitals();
