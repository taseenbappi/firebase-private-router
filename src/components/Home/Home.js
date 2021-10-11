import './Home.css';
import React from 'react';
import useAuth from '../../hooks/useAuth';


const Home = () => {
    const { users } = useAuth();
    return (
        <div>
            <h1>It's Home</h1>
            <p>{users.displayName}</p>
        </div>
    );
};

export default Home;