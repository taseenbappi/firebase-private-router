import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { users, googleLogOut } = useAuth();
    console.log(users.displayName);

    return (
        <div className="py-5">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/about">About</Link>
            <span>{users.displayName} </span>
            {users.displayName && <button onClick={googleLogOut}>Log out</button>}
        </div>
    );
};

export default Header;