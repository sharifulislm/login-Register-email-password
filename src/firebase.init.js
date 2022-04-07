// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYdf7WwwoYhD50oTZNzmDX23YLOSIIj8Q",
  authDomain: "secondprojects-eebae.firebaseapp.com",
  projectId: "secondprojects-eebae",
  storageBucket: "secondprojects-eebae.appspot.com",
  messagingSenderId: "502994950400",
  appId: "1:502994950400:web:ccfe7b3cbea6ba83403be5",
  measurementId: "G-EZFJJ0G4KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;