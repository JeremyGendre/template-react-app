import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContext} from "./context/UserContext";
import LoginPage from "./page/LoginPage";
import Layout from "./component/Layout/Layout";

function App() {
    const {user} = useContext(UserContext);

    if(!user){
        return (<LoginPage/>);
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
