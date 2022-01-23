import React, {useState} from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export default function AuthPage(){
    const [isLoginPage, setIsLoginPage] = useState(true);

    return (
        <div className="d-flex w-full h-screen">
            <div className="w-full h-full absolute login-bg" style={{overflow: 'hidden'}}/>
            {isLoginPage ? (
                <LoginPage onRegister={() => setIsLoginPage(false)}/>
            ) : (
                <RegisterPage onLogin={() => setIsLoginPage(true)}/>
            )}
        </div>
    )
}