// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsZwlvItHliin1RIuOa2WaS1iBykXe_Ds",
  authDomain: "simple-task-project-a5dad.firebaseapp.com",
  projectId: "simple-task-project-a5dad",
  storageBucket: "simple-task-project-a5dad.firebasestorage.app",
  messagingSenderId: "862847091917",
  appId: "1:862847091917:web:6c48b53a48cf6cd6f0d584"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };