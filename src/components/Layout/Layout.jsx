import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Layout.css";
import Footer from '../Footer/Footer';

function Layout() {
    return (
        <div className='navbar'>
            <h1 className='header'>JYOTI SINGH</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Works</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout