import firebase from "firebase/app";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyAm0Yf8LjPnNrGABkX5C2C_JJpDuQzTB-A",
    authDomain: "daily-moments-59cea.firebaseapp.com",
    projectId: "daily-moments-59cea",
    storageBucket: "daily-moments-59cea.appspot.com",
    messagingSenderId: "487723510174",
    appId: "1:487723510174:web:21512f0a42c165b6e7ce8f",
    measurementId: "G-WZ8RDCFPGP"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();