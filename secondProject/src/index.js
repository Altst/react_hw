import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './Components/App/App';
//import Card from './Components/Card/Card'
import User from './Components/User/User'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='title'>Популярні</div>
    <div className='main'>
      <User
        photo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        desription="Внешний аккумулятор Apple MagSafe Battery..."
        price="3 330грн" />
      <User
        photo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        desription="Внешний аккумулятор Apple MagSafe Battery..."
        price="3 330грн" />
      <User
        photo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        desription="Внешний аккумулятор Apple MagSafe Battery..."
        price="3 330грн" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
