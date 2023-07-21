import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
////---------------------------firebase-----inicia
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN || '',
  projectId:  process.env.REACT_APP_FIREBASE_PROJECTID || '',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET || '',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID || '',
  appId: process.env.REACT_APP_FIREBASE_APPID || '',
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID || ''
};

initializeApp(firebaseConfig);
///-------------------------fin------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
