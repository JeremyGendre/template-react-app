import React, {useContext} from 'react';
import './styles/App.css';
import './styles/login.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContext} from "./context/UserContext";
import Layout from "./component/Layout/Layout";
import AuthPage from "./page/auth/AuthPage";

function App() {
    const {user} = useContext(UserContext);

    if(!user){
        return (<AuthPage/>);
    }

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<>test</>} />
                    <Route path="/my-list" element={<>ma liste</>} />
                    <Route path="/history" element={<>historique</>} />
                    <Route path="*" element={<>No route match :(</>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
