import React, { useContext } from 'react';
import { userContext } from '../../App';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    const [user , setUser] = useContext(userContext);
    return (
        <div>
            <NavBar />
    <h1>{user.name || user.Fname}</h1>
    <h1>{user.email}</h1>
        </div>
    );
};

export default Home;