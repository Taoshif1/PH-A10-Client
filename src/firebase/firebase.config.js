// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdW0V0DdCM1nygyugBukI6tCKhg8CrD0k",
  authDomain: "gariwalaph10.firebaseapp.com",
  projectId: "gariwalaph10",
  storageBucket: "gariwalaph10.firebasestorage.app",
  messagingSenderId: "100904596567",
  appId: "1:100904596567:web:edad89c1295eac35a0df12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export as default (CRITICAL FIX!)
export default auth;