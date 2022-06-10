import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaKOMR7jYOyBieJrQtAkZdO3fn9ft5bnY",
  authDomain: "crwn-clothing-db-878a5.firebaseapp.com",
  projectId: "crwn-clothing-db-878a5",
  storageBucket: "crwn-clothing-db-878a5.appspot.com",
  messagingSenderId: "104234351111",
  appId: "1:104234351111:web:1c665aa1e4963f50bf48a2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//Google signin popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//accessing the firestore database
export const db = getFirestore();

//Passing in the user after sign in
//storing user data inside firestore db
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  //getting the document reference, inside this db collection, with this users uid
  const userDocRef = doc(db, "users", userAuth.uid);

  //fetching the already signed up user doc
  const userSnapshop = await getDoc(userDocRef);

  //if user data doesnt exists, set it in the db
  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(`Error creating the user. ${error.message}`);
    }
  }

  //if user data exist
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
