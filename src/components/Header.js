import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="flex justify-around bg-black-700">

                <h1 className="text-3xt"> Login and Register</h1>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    )
}

export default Header
