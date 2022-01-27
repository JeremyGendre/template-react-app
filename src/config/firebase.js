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

// TODO: change this
const firebaseConfig = {
    apiKey: "zzzzzzzzzzzzzzzzzzzz",
    authDomain: "app-name.firebaseapp.com",
    projectId: "app-name",
    storageBucket: "app-name.appspot.com",
    messagingSenderId: "messagingsenderid",
    appId: "appid"
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