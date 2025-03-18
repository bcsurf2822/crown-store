import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getFirestore,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  // transaction: rep a successful unit of work to a db
  const batch = writeBatch(db);

  // Now that we have the batch intstance we can initiate multiple transactions/set events

  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
  console.log("done");
};

//Get Items From Firestore

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapShot) => docSnapShot.data());

  // .reduce((accumaltor, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   accumaltor[title.toLowerCase()] = items;
  //   return accumaltor;
  // }, {});
  // return categoryMap;
};

//with this system we now have a way to authenticate & store users
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  // document reference (inside of database, "users collection", with this auth users ID)
  const userDocRef = doc(db, "users", userAuth.uid);
  // The snapshot is the data also a specific kind of obj
  const userSnapShot = await getDoc(userDocRef);

  // does snapshot exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //if it does not we want to set it inside of our DB
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error createing the user:", error.message);
    }
  }

  return userDocRef;
};

// Creating all of these utilities allows you to control how this app  operates with the external service/creates a separation layer between concerns
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// We make this await because we want to await whatever signOut returns
export const signOutUser = async () => await signOut(auth);

//  It passes this callback funciton to the 2nd val of onAuthStateChanged.  It will call this callback whenever the state of our auth singleton changes. SignIN and Out are both changes and the callback will be invoked..  This is an open listener , so it is always listening for changes to the auth state. When it does it will run  the function.
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
