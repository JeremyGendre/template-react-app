import React, {useContext} from "react";
import {Navigate, Outlet} from 'react-router-dom';
import {UserContext} from "../../context/UserContext";

export default function AuthPage(){
    const {user} = useContext(UserContext);

    if(user){
        return (<Navigate to="/"/>);
    }

    return (
        <div className="d-flex w-full h-screen">
            <div className="w-full h-full absolute login-bg" style={{overflow: 'hidden'}}/>
            <Outlet/>
        </div>
    )
}