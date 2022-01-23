import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    setDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCykmw8f9NsDIhq9g07XwFaduQLlei8Pzg",
    authDomain: "shopping-list-f19c0.firebaseapp.com",
    projectId: "shopping-list-f19c0",
    storageBucket: "shopping-list-f19c0.appspot.com",
    messagingSenderId: "531784564856",
    appId: "1:531784564856:web:8de1989e49037e457b2d8d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const registerWithEmailAndPassword = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "User", user.uid), {
        uid: user.uid,
        email,
    })
    return user;
};

const sendPasswordReset = async (email) => {
    await sendPasswordResetEmail(auth, email);
};

const signout = async () => {
    await signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    signout,
};

export default firebaseConfig;