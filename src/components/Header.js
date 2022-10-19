import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../context/UserContext';

const Header = () => {
    const user = useContext(AuthContext);

    return (
        <div className="h-20">
            <nav className="flex justify-around bg-black-700">
                <h1 className="text-3xl"> Login and Register</h1>
                <Link to="/login" className="text-3xl">Login</Link>
                <Link to="/register" className="text-3xl">Register</Link>

            </nav>
        </div>
    )
}

export default Header
