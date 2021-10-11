import "./Login.css";
import React from 'react';
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { signInGoogle } = useAuth();
    const signGoogleHandler = () => {
        signInGoogle();
    }
    return (
        <div>
            <button onClick={signGoogleHandler}>Google SignIn</button>
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;