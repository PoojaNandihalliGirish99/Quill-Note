import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';



// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCKPJ5EgF4ETMKWY3GYRV6mQ0-Whlr0dW8",
    authDomain: "quill-note-d6b6c.firebaseapp.com",
    projectId: "quill-note-d6b6c",
    storageBucket: "quill-note-d6b6c.appspot.com",
    messagingSenderId: "1086774891838",
    appId: "1:1086774891838:web:54704614f473012cf9486f",
    measurementId: "G-5FL7H6LEGG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
