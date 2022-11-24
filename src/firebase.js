import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJZmUnPoDYeSjTl8S6-jxg-1RJAqwzchE",
  authDomain: "phone-auth-d5eb4.firebaseapp.com",
  projectId: "phone-auth-d5eb4",
  storageBucket: "phone-auth-d5eb4.appspot.com",
  messagingSenderId: "411130960871",
  appId: "1:411130960871:web:868dfd8d025002e4db7b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
