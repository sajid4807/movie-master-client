// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuKMY-k9crf5HuF7HuKexhQDaQuEvXepk",
  authDomain: "movie-master-216f7.firebaseapp.com",
  projectId: "movie-master-216f7",
  storageBucket: "movie-master-216f7.firebasestorage.app",
  messagingSenderId: "346518991324",
  appId: "1:346518991324:web:160acb9ad32f76ec0b1f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);