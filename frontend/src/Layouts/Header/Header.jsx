import React from 'react';

import Logo from "@/Assets/Images/LogoMicheline.png";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <img className='logo' src={Logo} alt="logo du header" />
            <h1 className='logoTitre'>Micheline Photographe</h1>
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}  >Accueil</NavLink>
                <NavLink to="/contact" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}  >Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;