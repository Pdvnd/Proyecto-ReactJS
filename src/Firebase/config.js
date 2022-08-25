import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_LAi7GUZH44TEYwFoaI2ysiIEPtQNpGc",
    authDomain: "no-geek-store.firebaseapp.com",
    projectId: "no-geek-store",
    storageBucket: "no-geek-store.appspot.com",
    messagingSenderId: "683829433240",
    appId: "1:683829433240:web:10eec2bb6c2479312091ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)