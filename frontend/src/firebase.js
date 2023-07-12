import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB86q00CsMymPIrUW1gAQt-p5mQiPy1SqU",
  authDomain: "xetgo--auth.firebaseapp.com",
  projectId: "xetgo--auth",
  storageBucket: "xetgo--auth.appspot.com",
  messagingSenderId: "1008776625615",
  appId: "1:1008776625615:web:1505feb762ff8d8c3466ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
