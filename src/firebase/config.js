import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmZpgc0q_m0JL59tdZYSVdBpudh_e8I-0",
  authDomain: "blogcursoreact.firebaseapp.com",
  projectId: "blogcursoreact",
  storageBucket: "blogcursoreact.appspot.com",
  messagingSenderId: "889009370660",
  appId: "1:889009370660:web:a5584261ad8a4908034ab1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}