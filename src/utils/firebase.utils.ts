import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserInfo,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc,collection,writeBatch } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0eENwmU_YV62vWF95uWO7e_6Rt_HIUfo",
  authDomain: "my-project-ef16f.firebaseapp.com",
  projectId: "my-project-ef16f",
  storageBucket: "my-project-ef16f.appspot.com",
  messagingSenderId: "732419782543",
  appId: "1:732419782543:web:cdc081c14e21f0cac9bdfa",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({
//   prompt: "select_account;",
// });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInAuthWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return null;

  return signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: UserInfo,
  additionalInfomation: Object | null = null,
) => {
  if (!userAuth) {
    return null;
  }
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfomation,
      });
    } catch (err: any) {
      console.log("error creating the user", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedLister = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const signOutWithAuth = async () => {
  await signOut(auth);
};

// 添加数据的例子
export  const addItemToColletion =async (collectionKey:string)=>{
	let collectionRef = collection(db,collectionKey);
	let batch = writeBatch(db);

	let docRef = doc(collectionRef,"hello");

	batch.set(docRef,{
		name:"yuanzishuai",
		age:10,
	});

	await batch.commit()
}
