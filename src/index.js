import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './exam1/Library'
import Example from './exam1/Example'
import Square from './exam2/Square';
import SquareList from './exam2/SquareList';
import Sqare2nd from './exam2-2/SquareTop';
import SquareTopList from './exam2-2/SquareTopList';
import SquareBottomList from './exam2-2/SquareBottomList';
import StateTest1 from './exam4/StateTest1';
import StateTest2 from './exam5/StateTest2';
import Gugudan from './gugudan/Gugudan';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gugudan />   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
