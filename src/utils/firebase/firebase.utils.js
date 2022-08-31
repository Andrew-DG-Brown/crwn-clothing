import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  addDoc,
  where,
} from "firebase/firestore";

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

//accessing the firestore database
export const db = getFirestore();

//Google signin popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//(already added the collection) function to add the shop data to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  //iterating over the SHOP_DATA object for each category
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

//test setting wishlist item
export const addToWishlist = async (currentUserUid, productToAdd) => {
  await addDoc(collection(db, "users", currentUserUid), {
    wishList: [productToAdd],
  });
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "catagories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  );

  return categoryMap;
};

export const getTestData = async () => {
  const q = query(
    collection(db, "users"),
    where("email", "==", "andrewbrown1337@hotmail.com")
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => console.log(doc.id));
};

//Passing in the user after sign in
//storing user data inside firestore db
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  //getting the document reference, inside this db collection, with this users uid
  const userDocRef = doc(db, "users", userAuth.uid);

  //fetching the already signed up user doc
  const userSnapshot = await getDoc(userDocRef);

  //if user data doesn't exists, set it in the db
  if (!userSnapshot.exists()) {
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

//sign up with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//sign in with email and pass auth
export const signInWithAuthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//sign out user
export const signOutUser = async () => await signOut(auth);

//auth state listener
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
