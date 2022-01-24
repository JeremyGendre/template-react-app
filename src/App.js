import React, {useContext} from 'react';
import './styles/App.css';
import './styles/login.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {UserContext} from "./context/UserContext";
import Layout from "./component/Layout/Layout";
import AuthPage from "./page/auth/AuthPage";
import LoginPage from "./page/auth/LoginPage";
import RegisterPage from "./page/auth/RegisterPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<>home</>} />
                <Route path="my-list" element={<>ma liste</>} />
                <Route path="history" element={<>historique</>} />
            </Route>
            <Route path="/auth" element={<AuthPage/>}>
                <Route path="login" element={<LoginPage/>} />
                <Route path="register" element={<RegisterPage/>} />
            </Route>
            <Route path="*" element={<>No route match :(</>} />
        </Routes>
    );
}

export default App;
