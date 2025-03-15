import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Obtained from building web app this boilerplate is provided
const firebaseConfig = {
  apiKey: "AIzaSyAV7PjVIruz4tekjnlooGbuDHqZXLEwhKE",
  authDomain: "crown-store-c737c.firebaseapp.com",
  projectId: "crown-store-c737c",
  storageBucket: "crown-store-c737c.firebasestorage.app",
  messagingSenderId: "718322832562",
  appId: "1:718322832562:web:e4a90982e1959345cb25ab",
  measurementId: "G-WVZ7EJ115E",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
