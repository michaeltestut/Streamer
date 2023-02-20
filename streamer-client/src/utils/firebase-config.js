
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {FIREBASE_KEY} from "./constants.js"

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "streamer-59575.firebaseapp.com",
  projectId: "streamer-59575",
  storageBucket: "streamer-59575.appspot.com",
  messagingSenderId: "601639585406",
  appId: "1:601639585406:web:13c4ccbb9fcfeb3d06ba2f",
  measurementId: "G-HJFTR3GSBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);