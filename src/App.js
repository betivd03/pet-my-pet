import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import * as authService from "./services/authService.js";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import MyPets from "./components/MyPets";
import Create from "./components/Create";
// import Edit from "./components/Edit";
// import Details from "./components/Details";

function App() {
    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, email: '' });

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            user
        })
    }, []);

    const onLogin = (email) => {
        setUserInfo({
            isAuthenticated: true,
            user: email
        })
    }

    return (
        <div id="container">

            <Header {...userInfo} />

            <main id="site-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login onLogin={onLogin} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/my-pets" element={<MyPets />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </main>

            <footer id="site-footer">
                <p>@PetMyPet</p>
            </footer>

        </div>
    );
}

export default App;
