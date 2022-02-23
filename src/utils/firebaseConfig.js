// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxQzqEhDd6f08LIfrjUcTZkdSCp3WmsJQ",
  authDomain: "cursoreact-2496d.firebaseapp.com",
  projectId: "cursoreact-2496d",
  storageBucket: "cursoreact-2496d.appspot.com",
  messagingSenderId: "560603890160",
  appId: "1:560603890160:web:ee3692dbd5f10ec63c9d35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Genero y exporto una conexion a la base de datos
export const dataBase = getFirestore(app);