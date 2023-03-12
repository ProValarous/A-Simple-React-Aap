import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userData from './user';
import User from './components/main';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <User profile={userData.user1}/>
    <User profile={userData.user2}/>
    <User profile={userData.user3}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
