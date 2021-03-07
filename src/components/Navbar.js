import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                    <NavLink to="about">
                        About Me
                    </NavLink>
                    <NavLink to="portfolio">
                        Portfolios
                    </NavLink>
                    <NavLink to="">
                        Resume
                    </NavLink>
                    <NavLink to="contactme">
                        Contact Me
                    </NavLink>
                </nav>
            </div>
        </header>
        )
}