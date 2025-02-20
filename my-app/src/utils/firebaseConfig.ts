import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection,getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCILSuVw9Y-t_8pZZAIwsL8_8K-HTW6uHY",
  authDomain: "zoom-clone-59ea0.firebaseapp.com",
  projectId: "zoom-clone-59ea0",
  storageBucket: "zoom-clone-59ea0.firebasestorage.app",
  messagingSenderId: "287027362936",
  appId: "1:287027362936:web:ab09a42a57b28445e3418d",
  measurementId: "G-16693SZC0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)
export const firebaseDB=getFirestore(app)

export const userRef=collection(firebaseDB,"users");
export const meetingsRef=collection(firebaseDB,"meetings");