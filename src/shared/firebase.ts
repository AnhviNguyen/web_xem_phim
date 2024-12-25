import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlPZ6uPl-7CWwryltOU9DobkUdfTtyw18",
  authDomain: "moonlight-3ba2a.firebaseapp.com",
  projectId: "moonlight-3ba2a",
  storageBucket: "moonlight-3ba2a.firebasestorage.app",
  messagingSenderId: "902029822400",
  appId: "1:902029822400:web:f2cb6fc1e7e2275ac2e025",
  measurementId: "G-NSBD3ZX6LM",
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
