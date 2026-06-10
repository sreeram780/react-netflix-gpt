import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace these placeholder values with your Firebase project config.
// Get them from: Firebase Console > Project Settings > Your Apps > SDK setup and configuration
const firebaseConfig = {
 apiKey: "AIzaSyDJv8Za_r3yfH-n0SVDV1DYWSWBfCV7OJQ",
  authDomain: "react-netflix-gpt-demo.firebaseapp.com",
  projectId: "react-netflix-gpt-demo",
  storageBucket: "react-netflix-gpt-demo.firebasestorage.app",
  messagingSenderId: "279821570467",
  appId: "1:279821570467:web:b2d3b5f9e7682635ef4a16"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
