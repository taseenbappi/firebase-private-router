import "./Register.css";
import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    const registerHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={registerHandler} >
                <input type="email" placeholder="Enter your Email" />
                <br />
                <br />
                <input type="password" placeholder="Enter your Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already register?</Link>
        </div>
    );
};

export default Register;