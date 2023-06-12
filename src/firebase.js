// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCdekOyirWbGvqGmd-OORXlrU17MfkUwE",
  authDomain: "dashboard-portafolio.firebaseapp.com",
  projectId: "dashboard-portafolio",
  storageBucket: "dashboard-portafolio.appspot.com",
  messagingSenderId: "611165428746",
  appId: "1:611165428746:web:0cba2dd74ef0f4705393f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider)