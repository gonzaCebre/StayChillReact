import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from "firebase/app"; //Para firebase
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyAIUh9iyF69SiybDGTvwGZxXgsb4cfsA7Y",
  authDomain: "staychill-4adb4.firebaseapp.com",
  projectId: "staychill-4adb4",
  storageBucket: "staychill-4adb4.appspot.com",
  messagingSenderId: "645651613290",
  appId: "1:645651613290:web:2d90d07d2f501a14366c13"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

