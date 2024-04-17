import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCY0z_6KjAyAxUXhMQhSuthMgIIY_c03VU",
  authDomain: "van-gogh-volunteer.firebaseapp.com",
  databaseURL: "https://van-gogh-volunteer-default-rtdb.firebaseio.com",
  projectId: "van-gogh-volunteer",
  storageBucket: "van-gogh-volunteer.appspot.com",
  messagingSenderId: "195207518831",
  appId: "1:195207518831:web:fdadc858c2837324f14b9a",
  measurementId: "G-2XBPMYXKKG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);