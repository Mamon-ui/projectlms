
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo0vgHWLxdD34clwrh8yiZs3NmO0O21lM",
  authDomain: "apnashikshalaya.firebaseapp.com",
  projectId: "apnashikshalaya",
  storageBucket: "apnashikshalaya.appspot.com",
  messagingSenderId: "174728225070",
  appId: "1:174728225070:web:45b4f10c0991e368e2dabf"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const store = getFirestore(app);


export { app, auth, app };