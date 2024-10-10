// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU4BfHKxXFxk_PnGwd80lVkyOjo-g4cpY",
  authDomain: "react-dragon-news-auth-e46c3.firebaseapp.com",
  projectId: "react-dragon-news-auth-e46c3",
  storageBucket: "react-dragon-news-auth-e46c3.appspot.com",
  messagingSenderId: "1013040127033",
  appId: "1:1013040127033:web:4cf068cd057fb7d3c001e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;