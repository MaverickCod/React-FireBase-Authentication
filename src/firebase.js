import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4NewrKgRW_6ivEN-39BEt8YLwMbD8-WQ",
  authDomain: "ecommerce-f6eb6.firebaseapp.com",
  projectId: "ecommerce-f6eb6",
  storageBucket: "ecommerce-f6eb6.appspot.com",
  messagingSenderId: "361567937443",
  appId: "1:361567937443:web:0134926c90fa95612eb016"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);