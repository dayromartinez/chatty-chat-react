import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyC8FYGzZCU3X2vLYIZ4zHR87yViZR_Xuow",
  authDomain: "chatty-chat-react.firebaseapp.com",
  projectId: "chatty-chat-react",
  storageBucket: "chatty-chat-react.appspot.com",
  messagingSenderId: "291081322081",
  appId: "1:291081322081:web:da10aca5eb216cd701f420",
  measurementId: "G-CX29Q38MJ7",
  databaseURL: "https://chatty-chat-react-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
