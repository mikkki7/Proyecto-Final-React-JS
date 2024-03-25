import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.VITE_APIKEY,
    authDomain: import.meta.VITE_AUTHDOMAIN,
    projectId: import.meta.VITE_PROJECT_ID,
    storageBucket: import.meta.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.VITE_MESSAGINGSENDERID,
    appId: import.meta.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )