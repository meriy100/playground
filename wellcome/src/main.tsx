import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnCip5_tqqOhbog_n8eubTr7YSQzU6Zbk",
  authDomain: "playground-meriy100.firebaseapp.com",
  projectId: "playground-meriy100",
  storageBucket: "playground-meriy100.appspot.com",
  messagingSenderId: "229478005442",
  appId: "1:229478005442:web:3454eec57ecfd940b8d95b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
