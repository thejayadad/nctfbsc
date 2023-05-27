import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCBf4ZI6aijoibjZn1-Ffl_N0N9tPc9Yhg",
    authDomain: "nxtauthsite.firebaseapp.com",
    projectId: "nxtauthsite",
    storageBucket: "nxtauthsite.appspot.com",
    messagingSenderId: "406425314169",
    appId: "1:406425314169:web:ebf1cf8a7e08dfc85905a8"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };