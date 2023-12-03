// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHrxLZEtg2HDDIaGFbji9NWjeIpXNXFXo",
    authDomain: "logger-791f8.firebaseapp.com",
    projectId: "logger-791f8",
    storageBucket: "logger-791f8.appspot.com",
    messagingSenderId: "221329878830",
    appId: "1:221329878830:web:945c6432a80a8492fe94bf",
    measurementId: "G-M8L6ECHTV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };