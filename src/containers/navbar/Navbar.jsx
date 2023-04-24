import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';

import './navbar.css';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-links_container">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <p><a href="#home">Home</a></p>
                <p><a href="#podcasts">Podcasts</a></p>
                <p><a href="#artists">Artists</a></p>
                <p><a href="#library">Library</a></p>
                <input class="search" type="text" placeholder="Podcast, Artist..." size="50"></input>
            </div>
            <div className="navbar-sign">
                <p>Sign in</p>
                <button class="landing" type="button">Sign up</button>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#podcasts">Podcasts</a></p>
                            <p><a href="#artists">Artists</a></p>
                            <p><a href="#library">Library</a></p>
                        </div>
                        <div className="navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button class="landing" type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
