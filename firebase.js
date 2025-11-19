// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYb722t6Oh4waMKW0AO1lRUbaXZJKuTC4",
  authDomain: "bot-tlegram-9f4b5.firebaseapp.com",
  databaseURL: "https://bot-tlegram-9f4b5-default-rtdb.firebaseio.com",
  projectId: "bot-tlegram-9f4b5",
  storageBucket: "bot-tlegram-9f4b5.firebasestorage.app",
  messagingSenderId: "561534640067",
  appId: "1:561534640067:web:4be5ed739278d0e2e66776",
  measurementId: "G-K1T66T95S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);