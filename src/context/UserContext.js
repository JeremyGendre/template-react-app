import {createContext, useState} from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({children}){
    const [user, setUser] = useState(null);

    const register = () => {
        setUser({email: 'test@test.com'})
    };

    const login = () => {
        setUser({email: 'test@test.com'})
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{user, register, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}
