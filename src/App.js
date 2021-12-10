import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// import * as authService from "./services/authService.js";
import { AuthContext } from "./contexts/AuthContext.js";
import useLocalStorage from "./hooks/useLocalStorageHook.js";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import MyPets from "./components/MyPets";
import Create from "./components/Create";
import Details from "./components/Details";
import Logout from "./components/Logout";
// import Edit from "./components/Edit";

const initialAuthState = {
    _id: "",
    accessToken: "",
    email: ""
};

function App() {
    // const [userInfo, setUserInfo] = useState({ isAuthenticated: false, email: '' });

    // useEffect(() => {
    //     let user = authService.getUser();

    //     setUserInfo({
    //         isAuthenticated: Boolean(user),
    //         user
    //     })
    // }, []);

    // const [user, setUser] = useState({
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        // setUserInfo({
        //     isAuthenticated: true,
        //     user: email
        // })

        setUser(authData);
    };

    const logout = () => {
        // setUserInfo({
        //     isAuthenticated: false,
        //     user: null
        // })

        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            <div id="container">

                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/my-pets" element={<MyPets />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/details/:petId" element={<Details />} />
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@PetMyPet</p>
                </footer>

            </div>
        </AuthContext.Provider>
    );
}

export default App;
