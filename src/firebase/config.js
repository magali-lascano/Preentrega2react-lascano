// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAt_2iCEDzVqh0eOMpxCOWqtWw_NG6HRo",
    authDomain: "lskn-store.firebaseapp.com",
    projectId: "lskn-store",
    storageBucket: "lskn-store.appspot.com",
    messagingSenderId: "357880131022",
    appId: "1:357880131022:web:1f974073df348b62e34f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);