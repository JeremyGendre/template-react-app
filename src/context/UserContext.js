import {createContext, useState} from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({children}){
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({email: 'test@test.com'})
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}
