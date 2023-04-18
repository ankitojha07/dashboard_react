import {initializeApp} from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyAavQFS9ehlF64akTebY-Y5xYYXkZx3b4U",
    authDomain: "react-dashboard-listed.firebaseapp.com",
    projectId: "react-dashboard-listed",
    storageBucket: "react-dashboard-listed.appspot.com",
    messagingSenderId: "913860874979",
    appId: "1:913860874979:web:6ff9175d8c019dd8d02bd6",
    measurementId: "G-HD9DE704HK"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);