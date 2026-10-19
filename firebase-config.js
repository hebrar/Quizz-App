import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcjTXHW-ZIKKqqkCRTMffGFWNkSGBYepo",
  authDomain: "quizzapp-23d77.firebaseapp.com",
  projectId: "quizzapp-23d77",
  storageBucket: "quizzapp-23d77.firebasestorage.app",
  messagingSenderId: "1074508811120",
  appId: "1:1074508811120:web:5dfd9642a0507483ee5db5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
