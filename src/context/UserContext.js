import {createContext, useEffect, useState} from "react";
import {logInWithEmailAndPassword, registerWithEmailAndPassword, signout, auth} from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import LoadingPage from "../page/LoadingPage";


export const UserContext = createContext(null);

export default function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(false);
    const [retreivingUser, setRetreivinguser] = useState(true);

    const register = (email, password) => {
        setLoadingUser(true);
        return registerWithEmailAndPassword(email, password)
            .then(user => {
                setUser(user);
            }).finally(() => setLoadingUser(false))
    };

    const login = (email, password) => {
        setLoadingUser(true);
        return logInWithEmailAndPassword(email, password)
            .then((userCredentials) =>  {
                setUser(userCredentials.user);
            }).finally(() => setLoadingUser(false))
    };

    const logout = async () => {
        setLoadingUser(true);
        await signout();
        setLoadingUser(false);
        setUser(null);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) { // user signed in
                setUser(user);
            } else { // user signed out
                setUser(null);
            }
            setRetreivinguser(false);
        });
    },[])

    return (
        <UserContext.Provider value={{user, register, login, logout, loadingUser}}>
            {retreivingUser ? (<LoadingPage/>) : children}
        </UserContext.Provider>
    );
}
